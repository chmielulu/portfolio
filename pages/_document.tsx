import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  default as NextDocument,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import ModernizrScript from "../scripts/Modernizr";

function Document() {
  return (
    <Html lang="pl" className="no-js">
      <Head>
        <link rel="icon" href="/favicon.png" />
        {/*^TODO VPS EXPIRED*/}
        {/*<script*/}
        {/*  defer*/}
        {/*  data-domain="jakubprogramista.dev"*/}
        {/*  src="https://plausible.jacobprogrammer.dev/js/script.js"*/}
        {/*/>*/}
      </Head>
      <body className="with-background">
        <Main />
        <ModernizrScript />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};

export default Document;
