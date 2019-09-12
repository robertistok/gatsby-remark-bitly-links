const fs = require("fs");
const visit = require("unist-util-visit");
const axios = require("axios");
const matter = require("gray-matter");
const Queue = require("promise-queue");
const unified = require("unified");
const stringify = require("remark-stringify");

const processor = unified().use(stringify);
const queue = new Queue(5, Infinity);
const BITLY_DOMAINS = ["bit.ly", "amzn.to"];

const transform = ({ markdownAST, markdownNode }, options = {}) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    const { accessToken, brandedBitlys = [] } = options;

    const nodesToConvert = [];

    const visitor = node => {
      if (
        node.url &&
        ![...BITLY_DOMAINS, ...brandedBitlys].some(p => node.url.includes(p))
      ) {
        nodesToConvert.push(node);
      }
    };

    visit(markdownAST, "link", visitor);

    if (nodesToConvert.length > 0) {
      for (const node of nodesToConvert) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const { data } = await queue.add(() =>
            axios({
              method: "post",
              url: "https://api-ssl.bitly.com/v4/bitlinks",
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
              },
              data: {
                long_url: node.url,
                tags: [markdownNode.frontmatter.slug.substring(0, 50)]
              }
            })
          );

          // it's http by default
          node.url = `https://${data.id}`;
        } catch (err) {
          const { response } = err;

          if (response && response.data) {
            const { data } = response;
            if (data.message === "ALREADY_A_BITLY_LINK") {
              console.log(`The URL ${node.url} is already a bitly link.`);
            } else {
              console.log(`Error at URL ${node.url}:`, data);
            }
          } else {
            console.log(`The URL ${node.url} could not be converted to bitly.`);
          }
        }
      }

      const markdown = processor.stringify(markdownAST);

      try {
        fs.writeFileSync(
          markdownNode.fileAbsolutePath,
          matter.stringify(markdown, markdownNode.frontmatter)
        );
      } catch (err) {
        // An error occurred
        reject(err);
      }
    }

    resolve();
  });

module.exports = transform;
