import { motion } from "framer-motion";
import React, { ElementRef, forwardRef } from "react";
import { Post } from "../data/posts";
import { LinkIcon } from "./Icons";

type TimelineItemProps = {
  post: Post;
  drawLine?: boolean;
};

export const TimelineItem = forwardRef<ElementRef<"div">, TimelineItemProps>(
  ({ post: { date, title, text, url, tags }, drawLine = false }, forwardedRef) => {
    const dateString = date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
    return (
      <div className="relative" ref={forwardedRef}>
        <p className="absolute -left-8 hidden -translate-x-full text-gray-400 lg:block">
          {dateString}
        </p>
        {drawLine && <div className="absolute h-full w-px -translate-x-1/2 bg-gray-300" />}
        <div className="absolute h-4 w-4 -translate-x-1/2 translate-y-1 rounded-full border-2 border-gray-300 bg-white ring-8 ring-white" />
        <div className="flex flex-col gap-3 pl-8 pb-8">
          <p className="text-gray-400 lg:hidden text-sm font-medium">{dateString}</p>
          <div className="flex flex-row flex-wrap gap-3">
            {tags.map((item) => (
              <div
                key={item.key}
                className="rounded-lg px-3 py-1 text-sm font-medium"
                style={{ background: item.color }}
              >
                <p className="opacity-80">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <h2 className="font-semibold text-lg">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center underline-offset-4 hover:underline"
                >
                  {title}
                  <LinkIcon className="h-4 w-4 ml-1.5" strokeWidth={3} />
                </a>
              ) : (
                title
              )}
            </h2>
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

export const MotionTimelineItem = motion(TimelineItem);
