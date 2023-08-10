"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import { SegmentedControl } from "../components/SegmentedControl";
import { MotionTimelineItem } from "../components/TimelineItem";
import { posts, tabs } from "../data/posts";

export default function IndexPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabName = tabs[tabIndex].key;
  const filteredPosts =
    tabName === "all"
      ? posts
      : posts.filter((post) => post.tags.some((tag) => tabName === tag.key));

  return (
    <main className="mx-auto my-8 max-w-xl p-4">
      <header className="sticky top-6 z-10 flex flex-row justify-center">
        <SegmentedControl options={tabs} selected={tabIndex} onSelect={setTabIndex} />
      </header>
      <section className="py-16 lg:pb-24">
        <div className="flex flex-wrap items-center gap-6">
          <div className="h-16 w-16 rounded-full ring-1 ring-gray-200 dark:ring-gray-800">
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
            <p className="text-gray-500 dark:text-gray-400">New York, USA</p>
          </div>
        </div>
        <p className="mt-6">
          Computer science student at New York University passionate about programming and design.
        </p>
        <div className="mt-8 flex gap-4">
          <motion.a
            className="transition-colors hover:text-gray-600 dark:hover:text-gray-400"
            href="https://github.com/unknown"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile link"
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            className="transition-colors hover:text-gray-600 dark:hover:text-gray-400"
            href="https://www.linkedin.com/in/davidmo1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile link"
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            className="transition-colors hover:text-gray-600 dark:hover:text-gray-400"
            href="mailto:david@dmo.ooo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email link"
            whileTap={{ scale: 0.95 }}
          >
            <MailIcon />
          </motion.a>
        </div>
      </section>
      <section>
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredPosts.map((post, index) => (
            <MotionTimelineItem
              key={post.title}
              post={post}
              drawLine={index < filteredPosts.length - 1}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            />
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
