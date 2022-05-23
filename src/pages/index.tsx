import type { NextPage } from "next";
import Head from "next/head";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen antialiased">
      <Head>
        <title>David Mo — Developer & Designer</title>
        <meta name="description" content="Student from New York" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-xl px-4 pt-32">
        <h1 className="text-xl">David Mo</h1>
        <p className="text-gray-400">New York, USA</p>
        <p className="mt-6">
          Computer science student at NYU passionate in programming and design.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/unknown">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/davidmo1/">
            <LinkedInIcon />
          </a>
          <a href="mailto:david@dmo.ooo">
            <MailIcon />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
