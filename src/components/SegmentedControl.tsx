import React from "react";

type SegmentedControlElement = React.ElementRef<"div">;
type SegmentedControlProps = React.ComponentPropsWithoutRef<"div"> & {
  options: Array<{ title: string; value: string }>;
  defaultIndex: number;
  callback: (value: string) => void;
};

const SegmentedControl = React.forwardRef<
  SegmentedControlElement,
  SegmentedControlProps
>(({ options, defaultIndex, callback, ...restProps }, forwardedRef) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);
  const [segmentBoundingBox, setSegmentBoundingBox] = React.useState<DOMRect>();
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState<DOMRect>();

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const highlightRef = React.useRef<HTMLDivElement>(null);
  const segmentRefs = React.useMemo(
    () => options.map(() => React.createRef<HTMLDivElement>()),
    [options]
  );

  React.useEffect(() => {
    setSegmentBoundingBox(
      segmentRefs[activeIndex].current?.getBoundingClientRect()
    );
    setWrapperBoundingBox(wrapperRef.current?.getBoundingClientRect());
  }, [segmentRefs, activeIndex]);

  const onChange = (value: string, index: number) => {
    setActiveIndex(index);
    callback(value);
  };

  const highlightStyles: React.CSSProperties = {};

  if (segmentBoundingBox && wrapperBoundingBox) {
    highlightStyles.width = `${segmentBoundingBox.width}px`;
    highlightStyles.left = `${
      segmentBoundingBox.left - wrapperBoundingBox.left
    }px`;
  }

  return (
    <div
      className="rounded-full bg-gray-100 p-1"
      {...restProps}
      ref={forwardedRef}
    >
      <div className="relative flex flex-row" ref={wrapperRef}>
        <div
          className="absolute top-0 left-0 z-0 h-10 rounded-full bg-white shadow-md transition-all"
          style={highlightStyles}
          ref={highlightRef}
        />
        {options.map((item, i) => (
          <div
            className="cursor: pointer; z-10 cursor-pointer px-4 py-2 transition-opacity hover:opacity-60"
            onClick={(e) => {
              onChange(item.value, i);
            }}
            key={item.value}
            ref={segmentRefs[i]}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
});

SegmentedControl.displayName = "SegmentedControl";

export default SegmentedControl;
