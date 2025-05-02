import { TimelineItemComponent } from "./types";
import { TimelineItemTitle } from "./TimelineItemTitle";

export const TimelineItem: TimelineItemComponent = ({
  post: { date, title, text, url, tags },
  drawLine = false,
}) => {
  const dateString = dateFormatter.format(date);

  return (
    <div className="relative">
      {drawLine && <div className="absolute h-full w-px -translate-x-1/2 bg-gray-300" />}
      <div className="absolute flex -translate-x-full items-center gap-6">
        <p className="text-foreground-muted hidden lg:block">{dateString}</p>
        <div className="size-3.5 translate-x-1/2 rounded-full border-2 border-gray-300 bg-background ring-8 ring-background" />
      </div>
      <div className="flex flex-col gap-3 pb-12 pl-10">
        <p className="text-foreground-muted text-sm font-medium lg:hidden">{dateString}</p>
        <div className="flex flex-row flex-wrap gap-3">
          {tags.map((item) => (
            <div
              key={item.tag}
              className="rounded-lg px-3 py-1 text-sm font-medium"
              style={{ background: item.color }}
            >
              <p className="opacity-90">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <TimelineItemTitle title={title} url={url} />
          <div className="space-y-3 leading-relaxed">
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
