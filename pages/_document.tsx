import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  default as NextDocument,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="icon" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=raleway:400,500,600,700,800"
          rel="stylesheet"
        />
        <script
          defer
          data-domain="jakubprogramista.dev"
          src="https://plausible.jacobprogrammer.dev/js/script.js"
        ></script>
      </Head>
      <body className="with-background">
        <Main />
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
