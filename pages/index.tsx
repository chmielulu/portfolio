import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/molecules/Navigation/Navigation";
import Hero from "../components/molecules/Hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Full-Stack Developer - Jakub Chmielewski</title>
      </Head>
      <header>
        <Navigation />
        <Hero />
      </header>
    </>
  );
};

export default Home;
