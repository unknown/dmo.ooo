import { AnimatePresence, motion } from "motion/react";
import { TimelineItem } from "./TimelineItem";
import { TimelineComponent } from "./types";

export const Timeline: TimelineComponent = ({ posts }) => {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {posts.map((post, i) => (
        <motion.div
          key={post.title}
          className="flex"
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        >
          <TimelineItem post={post} drawLine={i < posts.length - 1} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
