import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/molecules/Hero/Hero";
import AboutMe from "../components/molecules/AboutMe/AboutMe";
import styled from "styled-components";
import RealisedProject from "../components/molecules/RealisedProject/RealisedProject";
import OtherProjects from "../components/molecules/OtherProjects/OtherProjects";
import { useGsap } from "../hooks/useGsap";
import { useEffect, useState } from "react";
import Statistic from "../components/molecules/Statistic/Statistic";
import Pricing from "../components/molecules/Pricing/Pricing";

const StyledPlug = styled.h2`
  font-size: 4.8rem;
  text-align: center;
  margin: 300px 0;
`;

const Home: NextPage = () => {
  const { gsap, scroll } = useGsap();
  const [showCursor, setShowCursor] = useState<boolean>(true);

  const handleRealisedProjectMouseEnter = () => setShowCursor(false);

  useEffect(() => {
    const el1 = document.querySelector("#portfolio > div");
    const el2 = document.querySelector("#portfolio-2 > div");

    const initAnimation = (target: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });

      tl.from(target, { x: -200, opacity: 0, scale: 0.6, y: -100 })
        .to(target, { x: 0, opacity: 1, scale: 1 })
        .to(target, { x: 200, opacity: 0, scale: 0.6, y: 100 });
    };

    initAnimation(el1);
    initAnimation(el2);
  }, [scroll]);

  return (
    <>
      <Head>
        <title>Full-Stack Developer - Jakub Chmielewski</title>
      </Head>
      <header>
        <Hero />
      </header>

      <AboutMe />

      <StyledPlug data-scroll-section id="portfolio">
        <div>I have created many interested projects...</div>
      </StyledPlug>

      <RealisedProject
        name="Strona firmowa - RendPro"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        properties={[
          {
            name: "Graphic Designer, Full-Stack Developer",
            icon: "magic-trick-dynamic-gradient.png",
          },
          {
            name: "Typescript, Gatsby, Three.js",
            icon: "flag-dynamic-gradient.png",
          },
          {
            name: "RendPro Limited, United Kingdom",
            icon: "travel-dynamic-gradient.png",
          },
        ]}
        texture="test_video.mov"
        showCursor={showCursor}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />

      <RealisedProject
        name="Osiedle Mława"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        properties={[
          {
            name: "Front-End Developer",
            icon: "magic-trick-dynamic-gradient.png",
          },
          {
            name: "Typescript, Gatsby",
            icon: "flag-dynamic-gradient.png",
          },
          {
            name: "RendPro Limited, United Kingdom",
            icon: "travel-dynamic-gradient.png",
          },
        ]}
        texture="osiedlemlawa.mp4"
        showCursor={showCursor}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />

      <RealisedProject
        name="Marys Deweloper"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        properties={[
          {
            name: "Front-End Developer",
            icon: "magic-trick-dynamic-gradient.png",
          },
          {
            name: "Typescript, Gatsby",
            icon: "flag-dynamic-gradient.png",
          },
          {
            name: "RendPro Limited, United Kingdom",
            icon: "travel-dynamic-gradient.png",
          },
        ]}
        texture="marysdeweloper.mp4"
        showCursor={showCursor}
        onMouseEnter={handleRealisedProjectMouseEnter}
      />

      <StyledPlug data-scroll-section id="portfolio-2">
        <div>And a lot more...</div>
      </StyledPlug>

      <OtherProjects />
      <Statistic />
      <Pricing />
    </>
  );
};

export default Home;
