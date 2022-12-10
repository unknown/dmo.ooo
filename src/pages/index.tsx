import { AnimatePresence, motion } from "framer-motion";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import SegmentedControl from "../components/SegmentedControl";
import MotionTimelineItem from "../components/TimelineItem";

export interface Post {
  data: {
    date: string;
    title: string;
    text: string;
    url?: string;
  };
  tags: Tag[];
}

interface Tag {
  title: string;
  value: string;
  color: string;
}

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [activeTab, setActiveTab] = useState("all");
  const filteredPosts = useMemo(() => {
    // create a record mapping categories (e.g. "2022", "Other") to an array of posts
    return posts.reduce((bucketed_posts, post) => {
      const date = new Date(post.data.date);
      if (
        activeTab === "all" ||
        post.tags.some((tag) => activeTab === tag.value)
      ) {
        let key = date.getFullYear().toString();
        // if an array of posts at `key` doesn't exist, create one
        if (!bucketed_posts[key]) {
          bucketed_posts[key] = [];
        }
        bucketed_posts[key].push(post);
      }

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
              setActiveTab(val);
            }}
          />
        </div>
        <div className="mt-16 flex items-center gap-6">
          <div className="h-16 w-16 rounded-full ring-4 ring-gray-300/30">
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-xl">David Mo</h1>
            <p className="text-gray-500">New York, USA</p>
          </div>
        </div>
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
                        post={item}
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

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
  context
) => {
  const posts = [
    {
      data: {
        date: "Nov 17, 2022",
        title: "BUGS @ NYU",
        text: "Designed and built the new BUGS @ NYU website.\nBUGS is NYU’s premier open source club, connecting students to create an inclusive environment to work on projects together.",
        url: "https://bugs-nyu.github.io/",
      },
      tags: [
        {
          title: "Built a website",
          value: "projects",
          color: "#9AD9F4",
        },
      ],
    },
    {
      data: {
        date: "June 29, 2022",
        title: "Intern at Chariot",
        text: "Started a part-time internship at Chariot, prototyping back-end services to process donations from Donor Advised Funds.",
      },
      tags: [
        {
          title: "Started an internship",
          value: "experience",
          color: "#F4E09A",
        },
      ],
    },
    {
      data: {
        date: "Jun 16, 2022",
        title: "Personal website",
        text: "Built this personal website featuring a timeline of milestones.\n Crafted using React (Next.js) and Framer Motion for animations.",
      },
      tags: [
        {
          title: "Launched a website",
          value: "projects",
          color: "#9AD9F4",
        },
      ],
    },
    {
      data: {
        date: "May 23, 2022",
        title: "Intern at Moore Capital Management",
        text: "Started a summer internship at Moore Capital Management as a software developer on the Portfolio and Risk Team.",
      },
      tags: [
        {
          title: "Started an internship",
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
        url: "https://arithmetic.dmo.ooo/",
      },
      tags: [
        {
          title: "Launched a project",
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

  return {
    props: { posts },
  };
};

export default Home;
