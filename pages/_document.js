// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../themes";
import { GTM_ID } from "../lib/gtag";

export default class Document extends NextDocument {
  render() {
    return (
      <>
        <Head />
        <Html lang="en">
          <body>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            {/* 👇 Here's the script */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
