import { GlobalStyles } from "../theme/GlobalStyles";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

function MyApp({ Component, pageProps }: AppProps) {
  const container = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LocomotiveScrollProvider
        options={{ smooth: true }}
        containerRef={container}
        watch={[]}
      >
        <div data-scroll-container ref={container}>
          <Component {...pageProps} />
        </div>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  );
}

export default MyApp;
