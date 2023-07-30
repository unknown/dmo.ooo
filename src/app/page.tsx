"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import SegmentedControl from "../components/SegmentedControl";
import MotionTimelineItem from "../components/TimelineItem";
import { Post, posts, tabs } from "../data/posts";

export default function IndexPage() {
  const [tabIndex, setTabIndex] = useState(0);

  // filter posts by tab
  const filterPosts = (tabName: string) => {
    return posts.filter((post) => {
      return tabName === "all" || post.tags.some((tag) => tabName === tag.key);
    });
  };

  // posts bucketed by year
  const bucketedPosts: Record<string, Post[]> = {};
  filterPosts(tabs[tabIndex].key).forEach((post) => {
    const year = new Date(post.data.date).getFullYear().toString();
    const bucket = bucketedPosts[year] ?? [];
    bucket.push(post);
    bucketedPosts[year] = bucket;
  });

  // group names sorted in reverse-chronological order
  const postGroups = Object.keys(bucketedPosts).sort((a, b) =>
    b.localeCompare(a)
  );

  return (
    <main className="mx-auto max-w-xl space-y-16 p-4">
      <header className="sticky top-6 z-10 my-8 flex flex-row justify-center">
        <SegmentedControl
          options={tabs}
          index={tabIndex}
          callback={(index) => {
            if (index !== tabIndex) {
              setTabIndex(index);
            }
          }}
        />
      </header>
      <section>
        <div className="flex flex-wrap items-center gap-6">
          <div className="h-16 w-16 rounded-full ring-4 ring-gray-300/30">
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={256}
              height={256}
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
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/davidmo1/"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a href="mailto:david@dmo.ooo" whileTap={{ scale: 0.95 }}>
            <MailIcon />
          </motion.a>
        </div>
      </section>
      <section>
        <AnimatePresence mode="sync" initial={false}>
          {postGroups.map((groupName) => {
            return (
              <div key={groupName}>
                <motion.h1
                  className="mb-6 text-xl"
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  {groupName}
                </motion.h1>
                {bucketedPosts[groupName].map((item, i) => {
                  return (
                    <MotionTimelineItem
                      key={item.data.title}
                      post={item}
                      drawLine={i + 1 !== bucketedPosts[groupName].length}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                    />
                  );
                })}
              </div>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
