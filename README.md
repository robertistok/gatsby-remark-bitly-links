## Description

This plugin is going to find all the links in your markdown file, convert them to [bitly](https://bitly.com/) links and mofify the underlying markdown files, replacing all the links with the newly created _bitly_ ones.

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

| Name          | Required | Default                   | Description                                                                                                      |
| ------------- | -------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accessToken` | true     | -                         | Bitly API access token, see the [bitly docs](https://dev.bitly.com/v4_documentation.html#section/Authentication) |
| `namedBitlys` | false    | [`"bit.ly"`, `"amzn.to"`] | Filter out bitly links which have a different domain                                                             |
|               |

### Notes

- In order to identify the source of the links, this plugin will add a tag when creating the link, as you can see it in the [bitly docs](https://dev.bitly.com/v4/#operation/createFullBitlink). This tag is the first 50 characters of the **slug** parameter from the **frontmatter** of the markdown file. This means that you have to have a **slug** value in your **frontmatter**, or the **tag** value is not going be populated.

## When do I use this plugin?

If you want to track the performance of your links in markdown files, this plugin is the way to go.

## Examples of usage

Include this in your `gatsby-config.js` file, under the `gatsby-transformer-remark` plugins section.

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [{
          resolve: "gatsby-remark-bitly-links",
          options: {
            accessToken: BITLY_ACCESS_TOKEN, // see the options sections for how to get the token
            namedBitlys: ["mzl.la"] // optional
          }
        }]
      }
    }

## How to run tests

Tests are still work in progres...

## How to contribute

If you have any questions, please open an issue and we will figure it out!
