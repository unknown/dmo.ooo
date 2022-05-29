import type { NextPage } from "next";
import Head from "next/head";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import SegmentedControl from "../components/SegmentedControl";
import TimelineItem from "../components/TimelineItem";

const Home: NextPage = () => {
  const posts = [
    {
      data: {
        date: "May 16, 2022",
        title: "Portfolio website",
        text: "This portfolio website built with Next.js",
      },
      tags: [
        {
          title: "Project",
          value: "projects",
          color: "#9AD9F4",
        },
      ],
    },
    {
      data: {
        date: "May 16, 2022",
        title: "Arithmetic",
        text: "A fast-paced arithmetic drill built with Next.js",
      },
      tags: [
        {
          title: "Project",
          value: "projects",
          color: "#9AD9F4",
        },
      ],
    },
    {
      data: {
        date: "May 16, 2022",
        title: "Arithmetic",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      tags: [
        {
          title: "Project",
          value: "projects",
          color: "#9AD9F4",
        },
      ],
    },
    {
      data: {
        date: "May 16, 2022",
        title: "Arithmetic",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis feugiat vivamus at augue eget arcu dictum.",
      },
      tags: [
        {
          title: "Project",
          value: "projects",
          color: "#9AD9F4",
        },
        {
          title: "Experience",
          value: "experience",
          color: "#F4E09A",
        },
      ],
    },
    {
      data: {
        date: "May 16, 2022",
        title: "Arithmetic",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque non.",
      },
      tags: [
        {
          title: "Project",
          value: "projects",
          color: "#9AD9F4",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen antialiased">
      <Head>
        <title>David Mo — Developer & Designer</title>
        <meta name="description" content="Student from New York" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-xl px-4 pt-32">
        <div className="flex flex-row justify-center">
          <SegmentedControl
            options={[
              { title: "All", value: "all" },
              { title: "Projects", value: "projects" },
              { title: "Experience", value: "experience" },
            ]}
            defaultIndex={0}
            callback={(val) => console.log(val)}
          />
        </div>
        <h1 className="mt-16 text-xl">David Mo</h1>
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
        <div className="mt-16">
          <h1 className="mb-6 text-xl">2022</h1>
          {posts.map((item, i) => {
            return (
              <TimelineItem
                key={item.data.title}
                data={item.data}
                tags={item.tags}
                drawLine={i + 1 !== posts.length}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
