import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>David Mo — Developer & Designer</title>
        <meta name="description" content="Student from New York" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="underline">David Mo</h1>
      </main>
    </div>
  );
};

export default Home;
