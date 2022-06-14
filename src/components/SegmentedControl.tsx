import React from "react";
import { motion } from "framer-motion";

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

  const onClick = (value: string, index: number) => {
    setActiveIndex(index);
    callback(value);
  };

  return (
    <div
      className="rounded-full bg-gray-100 p-1"
      {...restProps}
      ref={forwardedRef}
    >
      <div className="flex flex-row">
        {options.map((item, i) => (
          <motion.div
            className="relative cursor-pointer rounded-full px-4 py-2"
            whileTap={i === activeIndex ? { scale: 0.95 } : { opacity: 0.6 }}
            onClick={() => {
              onClick(item.value, i);
            }}
            key={item.value}
          >
            {i === activeIndex && (
              <motion.div
                className="absolute inset-0 z-0 rounded-full bg-white shadow-md"
                style={{ borderRadius: 100 }}
                layoutId="active"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                }}
              />
            )}
            <p className="relative z-10">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

SegmentedControl.displayName = "SegmentedControl";

export default SegmentedControl;
