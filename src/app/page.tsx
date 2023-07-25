"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import SegmentedControl from "../components/SegmentedControl";
import MotionTimelineItem from "../components/TimelineItem";
import { Post, posts, tabs } from "../data/posts";

type IndexPageProps = {
  searchParams: { tab?: string };
};

export default function IndexPage({ searchParams }: IndexPageProps) {
  const router = useRouter();

  const [tabIndex, setTabIndex] = useState(
    Math.max(
      tabs.findIndex((tab) => tab.key === searchParams.tab),
      0
    )
  );

  // filter posts by tab
  const filterPosts = (tabName: string) => {
    return posts.filter((post) => {
      return tabName === "all" || post.tags.some((tag) => tabName === tag.key);
    });
  };

  // posts bucketed by year
  const bucketedPosts = useMemo<Record<string, Post[]>>(() => {
    const map: Record<string, Post[]> = {};
    filterPosts(tabs[tabIndex].key).forEach((post) => {
      const year = new Date(post.data.date).getFullYear().toString();
      const bucket = map[year] ?? [];
      bucket.push(post);
      map[year] = bucket;
    });
    return map;
  }, [tabIndex]);

  // years with posts sorted in reverse-chronological order
  const sortedGroups = Object.keys(bucketedPosts).sort((a, b) => {
    return b.localeCompare(a);
  });

  return (
    <main className="mx-auto max-w-xl px-4 pt-16">
      <div className="sticky top-6 z-10 flex flex-row justify-center">
        <SegmentedControl
          options={tabs}
          index={tabIndex}
          callback={(index) => {
            if (index !== tabIndex) {
              router.replace(`/?tab=${tabs[index].key}`);
              setTabIndex(index);
            }
          }}
        />
      </div>
      <div className="mt-16 flex items-center gap-6">
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
        <motion.a href="https://github.com/unknown" whileTap={{ scale: 0.95 }}>
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
        {sortedGroups.map((group) => {
          return (
            <AnimatePresence mode="popLayout" key={group} initial={false}>
              <motion.h1
                className="mb-6 text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                {group}
              </motion.h1>
              {bucketedPosts[group].map((item, i) => {
                return (
                  <MotionTimelineItem
                    key={item.data.title}
                    post={item}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                    drawLine={i + 1 !== bucketedPosts[group].length}
                  />
                );
              })}
            </AnimatePresence>
          );
        })}
      </div>
    </main>
  );
}
