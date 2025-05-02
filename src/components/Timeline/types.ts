import { Post } from "@/src/data/posts";
import { FunctionComponent } from "react";

type TimelineProps = {
  posts: Post[];
};

type TimelineItemProps = {
  post: Post;
  drawLine?: boolean;
};

type TimelineItemTitleProps = {
  title: string;
  url?: string;
};

export type TimelineComponent = FunctionComponent<TimelineProps>;
export type TimelineItemComponent = FunctionComponent<TimelineItemProps>;
export type TimelineItemTitleComponent = FunctionComponent<TimelineItemTitleProps>;
