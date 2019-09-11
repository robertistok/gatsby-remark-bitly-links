## Description

This plugin is going to find all the links in your markdown file, convert them to [bitly](https://bitly.com/) links and mofify the underlying files.

All the links will be available in your [bitly](https://bitly.com/) dashboard, from where you can see how do they perform.

### Dependencies

`npm i gatsby-transformer-remark`

or

`yarn add gatsby-transformer-remark`

## How to install

`npm i gatsby-remark-bitly-links`

or

`yarn add gatsby-remark-bitly-links`

## Options

| Name            | Required | Default                   | Description                                                                                                      |
| --------------- | -------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accessToken`   | true     | -                         | Bitly API access token, see the [bitly docs](https://dev.bitly.com/v4_documentation.html#section/Authentication) |
| `brandedBitlys` | false    | [`"bit.ly"`, `"amzn.to"`] | Filter out bitly links which have a different domain                                                             |

## When do I use this plugin?

If you want to track the performance of your links in markdown files, this plugin is the way to go.

## Examples of usage

Include this in your `gatsby-config.js` file, under the `gatsby-transformer-remark` plugin.

    plugins: [
      {
        resolve: "gatsby-remark-bitly-links",
        options: {
          accessToken: BITLY_ACCESS_TOKEN,
          namedBitlys: ["mzl.la"],
        }
      }
    ]

//See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) on how to format code examples.

This section could also include before-and-after examples of data when the plugin is enabled, if applicable.

## How to run tests

Tests are still work in progres...

## How to contribute

If you have any questions, please open an issue and we will figure it out!
