import { TimelineItemTitleComponent } from "./types";
import { LinkIcon } from "../icons";

export const TimelineItemTitle: TimelineItemTitleComponent = ({ title, url }) => {
  return (
    <div className="font-heading text-lg font-semibold">
      {url ? (
        <div className="relative w-fit">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="peer inline-flex items-center"
          >
            {title}
            <LinkIcon className="ml-1.5 size-4" strokeWidth={3} />
          </a>
          <div className="duration-50 absolute -bottom-0.5 h-0.5 w-0 rounded-full bg-foreground transition-all peer-hover:w-full" />
        </div>
      ) : (
        title
      )}
    </div>
  );
};
