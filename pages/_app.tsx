import { GlobalStyles } from "../theme/GlobalStyles";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { MainContextProvider } from "../context";
import { useState } from "react";
import Navigation from "../components/molecules/Navigation/Navigation";
import Footer from "../components/molecules/Footer/Footer";
import type ASScroll from "@ashthornton/asscroll";
import { useEffectOnce } from "react-use";

function MyApp({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = useState<ASScroll | null>(null);

  useEffectOnce(() => {
    const ASScroll = require("@ashthornton/asscroll");
    const asscroll = new ASScroll({ disableRaf: true });
    asscroll.enable();

    setScroll(asscroll);
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContextProvider scroll={scroll}>
        <header>
          <Navigation />
        </header>
        <div asscroll-container="true">
          <div>
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </MainContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
