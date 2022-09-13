import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/molecules/Navigation/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Full-Stack Developer - Jakub Chmielewski</title>
      </Head>
      <header>
        <Navigation />
      </header>
    </>
  );
};

export default Home;
