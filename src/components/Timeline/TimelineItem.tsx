import { TimelineItemComponent } from "./types";
import { LinkIcon } from "../icons";

export const TimelineItem: TimelineItemComponent = ({
  post: { date, title, text, url, images, tags },
  drawLine = false,
}) => {
  const dateString = dateFormatter.format(date);

  return (
    <div className="relative">
      {drawLine && <div className="bg-foreground-muted absolute h-full w-px -translate-x-1/2" />}
      <div className="absolute top-1 flex -translate-x-full items-center gap-4">
        <p className="text-foreground-muted hidden text-sm font-medium lg:block">{dateString}</p>
        <div className="bg-background ring-background border-foreground-muted size-3.5 translate-x-1/2 rounded-full border-2 ring-8" />
      </div>
      <div className="flex flex-col gap-3 pb-12 pl-8">
        <p className="text-foreground-muted text-sm font-medium lg:hidden">{dateString}</p>
        <div className="space-y-2">
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
                  <LinkIcon className="ml-1.5 size-4" strokeWidth={2.5} />
                </a>
                <div className="bg-foreground absolute -bottom-px h-0.5 w-0 rounded-full transition-all duration-50 peer-hover:w-full" />
              </div>
            ) : (
              title
            )}
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            {tags.map((tag) => (
              <div key={tag} className="bg-muted text-foreground/80 rounded-md px-2 py-0.5">
                <p className="text-xs font-medium tracking-wide opacity-90">{tag}</p>
              </div>
            ))}
          </div>
          {images && (
            <div className="mt-4 flex flex-row gap-2">
              {images.map(({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className="max-h-84 rounded-md border border-gray-200 shadow-md dark:border-gray-800 dark:shadow-none"
                />
              ))}
            </div>
          )}
          <div className="mt-4 space-y-3 leading-normal">
            {text.split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  month: "short",
  year: "numeric",
});
