import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/molecules/Navigation/Navigation";
import Hero from "../components/molecules/Hero/Hero";
import AboutMe from "../components/molecules/AboutMe/AboutMe";
import styled from "styled-components";
import RealisedProject from "../components/molecules/RealisedProject/RealisedProject";

const StyledPlug = styled.h2`
  font-size: 4.8rem;
  text-align: center;
  margin: 300px 0;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Full-Stack Developer - Jakub Chmielewski</title>
      </Head>
      <header>
        <Navigation />
        <Hero />
        <AboutMe />
        <StyledPlug data-scroll-section>
          I have created many interested projects...
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
          texture="rendpro-ss.png"
        />
      </header>
    </>
  );
};

export default Home;
