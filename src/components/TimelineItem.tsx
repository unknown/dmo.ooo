import React from "react";

type TimelineItemElement = React.ElementRef<"div">;
type TimelineItemProps = React.ComponentPropsWithoutRef<"div"> & {
  data: {
    date: string;
    title: string;
    text: string;
  };
  drawLine?: boolean;
};

const TimelineItem = React.forwardRef<TimelineItemElement, TimelineItemProps>(
  ({ data, drawLine = false, ...restProps }, forwardedRef) => {
    return (
      <div className="relative pb-8" {...restProps} ref={forwardedRef}>
        <p className="absolute -left-8 hidden -translate-x-full text-gray-400 lg:block">
          {data.date}
        </p>
        {drawLine && (
          <div className="absolute h-full w-px -translate-x-1/2 bg-gray-300" />
        )}
        <div className="absolute h-4 w-4 translate-y-1 -translate-x-1/2 rounded-full border-2 border-gray-300 bg-white ring-8 ring-white" />
        <div className="pl-8">
          <p className="mb-2 text-gray-400 lg:hidden">{data.date}</p>
          <h2 className="font-bold">{data.title}</h2>
          <p>{data.text}</p>
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export default TimelineItem;
