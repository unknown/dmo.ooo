"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { SegmentedControl } from "@/components/SegmentedControl";
import { Category, posts } from "@/data/posts";
import { Timeline } from "@/components/Timeline";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const tabs: { key: "all" | Category; title: string }[] = [
  { key: "all", title: "All" },
  { key: "projects", title: "Projects" },
  { key: "experience", title: "Experience" },
];

export default function IndexPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabName = tabs[tabIndex].key;
  const filteredPosts =
    tabName === "all" ? posts : posts.filter((post) => post.category === tabName);

  return (
    <main className="flex flex-col">
      <header className="sticky top-6 z-10 mt-8 mb-2 lg:mt-12 lg:mb-6">
        <div className="mx-auto w-fit">
          <SegmentedControl options={tabs} selected={tabIndex} onSelect={setTabIndex} />
        </div>
      </header>
      <section className="px-6 py-8 lg:pb-12">
        <div className="mx-auto w-full max-w-xl">
          <div className="flex flex-wrap items-center gap-5">
            <Image
              className="relative size-20 rounded-full ring-1 ring-gray-200 dark:ring-gray-800"
              src="/profile.jpg"
              alt="Picture of David smiling by a lake."
              width={128}
              height={128}
              priority
            />
            <div className="space-y-0.5">
              <h1 className="font-heading text-xl font-bold">David Mo</h1>
              <p className="text-foreground-muted text-sm">New York, USA</p>
            </div>
          </div>
          <p className="mt-6 leading-relaxed">
            Student at New York University interested in programming and design.
          </p>
          <div className="mt-8 flex gap-4">
            <motion.a
              className="hover:text-foreground-muted transition-colors"
              href="https://github.com/unknown"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile link"
              whileTap={{ scale: 0.95 }}
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              className="hover:text-foreground-muted transition-colors"
              href="https://www.linkedin.com/in/davidmo1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile link"
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              className="hover:text-foreground-muted transition-colors"
              href="mailto:david@dmo.ooo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email link"
              whileTap={{ scale: 0.95 }}
            >
              <MailIcon />
            </motion.a>
          </div>
        </div>
      </section>
      <section className="px-6 py-8">
        <div className="mx-auto w-full max-w-xl">
          <Timeline posts={filteredPosts} />
        </div>
      </section>
    </main>
  );
}
