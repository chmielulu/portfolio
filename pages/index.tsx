import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/molecules/Navigation/Navigation";
import Hero from "../components/molecules/Hero/Hero";
import AboutMe from "../components/molecules/AboutMe/AboutMe";

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
      </header>
    </>
  );
};

export default Home;
