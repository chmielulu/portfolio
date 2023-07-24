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
import { Raleway } from "next/font/google";

const font = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin-ext"],
});

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
        <div className={font.className}>
          <header>
            <Navigation />
          </header>
          <div asscroll-container="true">
            <div>
              <Component {...pageProps} />
              <Footer />
            </div>
          </div>
        </div>
      </MainContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
