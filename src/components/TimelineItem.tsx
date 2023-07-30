import { motion } from "framer-motion";
import React, { ElementRef, forwardRef } from "react";
import { Post } from "../data/posts";
import { LinkIcon } from "./Icons";

type TimelineItemProps = {
  post: Post;
  drawLine?: boolean;
};

const TimelineItem = forwardRef<ElementRef<"div">, TimelineItemProps>(
  ({ post: { date, title, text, url, tags }, drawLine = false }, forwardedRef) => {
    const dateString = date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return (
      <div className="relative pb-8" ref={forwardedRef}>
        <p className="absolute -left-8 hidden -translate-x-full text-gray-400 lg:block">
          {dateString}
        </p>
        {drawLine && <div className="absolute h-full w-px -translate-x-1/2 bg-gray-300" />}
        <div className="absolute h-4 w-4 -translate-x-1/2 translate-y-1 rounded-full border-2 border-gray-300 bg-white ring-8 ring-white" />
        <div className="pl-8">
          <p className="mb-2 text-gray-500 lg:hidden">{dateString}</p>
          <div className="flex flex-row gap-3">
            {tags.map((item) => {
              return (
                <div
                  className="mb-3 rounded-lg px-3 py-1"
                  style={{ background: item.color }}
                  key={item.key}
                >
                  <p className="opacity-70">{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold hover:underline"
              >
                {title}
                <LinkIcon className="h-4 w-4" strokeWidth={2} />
              </a>
            ) : (
              <h2 className="font-bold">{title}</h2>
            )}
            {text.split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

TimelineItem.displayName = "TimelineItem";

const MotionTimelineItem = motion(TimelineItem);

export default MotionTimelineItem;
