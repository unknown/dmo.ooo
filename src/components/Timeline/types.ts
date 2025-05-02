import { Post } from "@/data/posts";
import { FunctionComponent } from "react";

type TimelineProps = {
  posts: Post[];
};

type TimelineItemProps = {
  post: Post;
  drawLine?: boolean;
};

export type TimelineComponent = FunctionComponent<TimelineProps>;
export type TimelineItemComponent = FunctionComponent<TimelineItemProps>;
