import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/molecules/Hero/Hero";
import AboutMe from "../components/molecules/AboutMe/AboutMe";
import styled from "styled-components";
import OtherProjects from "../components/molecules/OtherProjects/OtherProjects";
import { useGsap } from "../hooks/useGsap";
import { useEffect } from "react";
import Statistic from "../components/molecules/Statistic/Statistic";
import Pricing from "../components/molecules/Pricing/Pricing";
import Faq from "../components/molecules/Faq/Faq";
import Contact from "../components/molecules/Contact/Contact";
import RealisedProjectsSection from "../components/organisms/RealisedProjectsSection/RealisedProjectsSection";

const StyledPlug = styled.h2`
  font-size: 4.8rem;
  text-align: center;
  margin: 300px 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Home: NextPage = () => {
  const { gsap, scroll } = useGsap();

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

      <StyledPlug data-scroll-section>
        <div>Stworzyłem wiele ciekawych projektów...</div>
      </StyledPlug>

      <RealisedProjectsSection />

      <StyledPlug data-scroll-section id="portfolio-2">
        <div>I wiele, wiele więcej...</div>
      </StyledPlug>

      <OtherProjects />
      <Statistic />
      <Pricing />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
