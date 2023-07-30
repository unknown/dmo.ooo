import React from "react";
import { motion } from "framer-motion";

type SegmentedControlElement = React.ElementRef<"div">;
type SegmentedControlProps = React.ComponentPropsWithoutRef<"div"> & {
  options: Array<{ key: string; title: string }>;
  index: number;
  callback: (index: number) => void;
};

const SegmentedControl = React.forwardRef<
  SegmentedControlElement,
  SegmentedControlProps
>(({ options, index, callback, ...restProps }, forwardedRef) => {
  return (
    <div
      className="supports-backdrop-blur:bg-gray-100/80 supports-backdrop-blur:backdrop-blur-md rounded-full bg-gray-100 p-1"
      {...restProps}
      ref={forwardedRef}
    >
      <div className="flex flex-row">
        {options.map((item, i) => (
          <motion.div
            className="relative cursor-pointer rounded-full px-4 py-2"
            whileTap={i === index ? { scale: 0.95 } : { opacity: 0.6 }}
            onClick={() => callback(i)}
            key={item.key}
          >
            {i === index && (
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
