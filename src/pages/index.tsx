import { AnimatePresence, motion } from "framer-motion";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import SegmentedControl from "../components/SegmentedControl";
import MotionTimelineItem from "../components/TimelineItem";
import { getPosts, Post } from "./api/posts";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const tabs = [
    { key: "all", title: "All" },
    { key: "projects", title: "Projects" },
    { key: "experience", title: "Experience" },
  ];
  const [tabIndex, setTabIndex] = useState(0);

  const filteredPosts = useMemo(() => {
    // create a record mapping categories (e.g. "2022", "Other") to an array of posts
    return posts.reduce((bucketed_posts, post) => {
      const date = new Date(post.data.date);
      if (
        tabs[tabIndex].key === "all" ||
        post.tags.some((tag) => tabs[tabIndex].key === tag.key)
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
  }, [posts, tabIndex]);

  return (
    <div className="min-h-screen antialiased">
      <Head>
        <title>David Mo</title>
        <meta name="author" content="David Mo" />
        <meta
          name="description"
          content="Programmer and designer studying at New York University"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-xl px-4 pt-16">
        <div className="sticky top-6 z-10 flex flex-row justify-center">
          <SegmentedControl
            options={tabs}
            index={tabIndex}
            callback={(index) => {
              setTabIndex(index);
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
          Computer science student at New York University passionate about
          programming and design.
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
                <AnimatePresence
                  mode="popLayout"
                  key={category}
                  initial={false}
                >
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
                </AnimatePresence>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  return {
    props: { posts: getPosts() },
  };
};

export default Home;
