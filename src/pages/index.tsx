import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import SegmentedControl from "../components/SegmentedControl";
import MotionTimelineItem from "../components/TimelineItem";

type Post = {
  data: {
    date: string;
    title: string;
    text: string;
  };
  tags: Tag[];
};

type Tag = {
  title: string;
  value: string;
  color: string;
};

const posts = [
  {
    data: {
      date: "Jun 16, 2022",
      title: "Personal website",
      text: "A portfolio website featuring a personal timeline of milestones.\n Crafted using React (Next.js) and Framer Motion for animations.",
    },
    tags: [
      {
        title: "Deployed personal website",
        value: "projects",
        color: "#9AD9F4",
      },
    ],
  },
  {
    data: {
      date: "May 23, 2022",
      title: "Moore Capital Management",
      text: "Started a summer internship at Moore Capital Management as a developer on the risk team.",
    },
    tags: [
      {
        title: "Started a new role",
        value: "experience",
        color: "#F4E09A",
      },
    ],
  },
  {
    data: {
      date: "Mar 25, 2022",
      title: "Arithmetic",
      text: "A fast-paced arithmetic drill designed to test mental math.\n Built using React (Next.js) with a MySQL database for problem statistics logging.",
    },
    tags: [
      {
        title: "Deployed a project",
        value: "projects",
        color: "#9AD9F4",
      },
    ],
  },
  {
    data: {
      date: "Nov 11, 2019",
      title: "Dark Patterns Recognition",
      text: "A Chrome Extension that identifies and classifies potential dark patterns on the pages of online stores with 97% accuracy.\n\
            Created Chrome Extension front-end using plain JavaScript that interfaced a Python back-end running Naive Bayes Classifiers using Flask and sklearn.",
    },
    tags: [
      {
        title: "Attended a hackathon",
        value: "projects",
        color: "#9AD9F4",
      },
    ],
  },
];
const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const filteredPosts = useMemo(() => {
    // create a record mapping categories (e.g. "2022", "Other") to an array of posts
    return posts.reduce((bucketed_posts, post) => {
      const date = new Date(post.data.date);
      let key = "Other";
      if (
        activeTab === "all" ||
        post.tags.some((tag) => activeTab === tag.value)
      ) {
        key = date.getFullYear().toString();
      }
      // if an array of posts at `key` doesn't exist, create one
      if (!bucketed_posts[key]) {
        bucketed_posts[key] = [];
      }
      bucketed_posts[key].push(post);

      return bucketed_posts;
    }, {} as Record<string, Post[]>);
  }, [activeTab]);

  return (
    <div className="min-h-screen antialiased">
      <Head>
        <title>David Mo</title>
        <meta name="author" content="David Mo" />
        <meta
          name="description"
          content="Programmer and designer living in New York"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-xl px-4 pt-16">
        <div className="sticky top-6 z-10 flex flex-row justify-center">
          <SegmentedControl
            options={[
              { title: "All", value: "all" },
              { title: "Projects", value: "projects" },
              { title: "Experience", value: "experience" },
            ]}
            defaultIndex={0}
            callback={(val) => {
              console.log(val);
              setActiveTab(val);
            }}
          />
        </div>
        <h1 className="mt-16 text-xl">David Mo</h1>
        <p className="text-gray-400">New York, USA</p>
        <p className="mt-6">
          Computer science student at NYU passionate about programming and
          design.
        </p>
        <div className="mt-8 flex gap-4">
          <motion.a
            href="https://github.com/unknown"
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/davidmo1/"
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a href="mailto:david@dmo.ooo" whileTap={{ scale: 0.95 }}>
            <MailIcon />
          </motion.a>
        </div>
        <div className="mt-16">
          {Object.keys(filteredPosts)
            .sort((a, b) => {
              // sort keys so that "Other" is always last
              if (a === "Other") return 1;
              if (b === "Other") return -1;
              // sort keys in chronological order
              return b.localeCompare(a);
            })
            .map((category) => {
              return (
                <div key={category}>
                  <motion.h1
                    className="mb-6 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                  >
                    {category}
                  </motion.h1>
                  {filteredPosts[category].map((item, i) => {
                    return (
                      <MotionTimelineItem
                        key={item.data.title}
                        data={item.data}
                        tags={item.tags}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layout
                        drawLine={i + 1 !== filteredPosts[category].length}
                      />
                    );
                  })}
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default Home;
