import React from "react";
import { motion } from "framer-motion";

type SegmentedControlProps = {
  options: Array<{ key: string; title: string }>;
  selected: number;
  onSelect: (selected: number) => void;
};

function SegmentedControl({ options, selected, onSelect }: SegmentedControlProps) {
  return (
    <div className="supports-backdrop-blur:bg-gray-100/80 supports-backdrop-blur:backdrop-blur-md flex flex-row rounded-full bg-gray-100 p-1 shadow-inner">
      {options.map((item, i) => (
        <motion.div
          className="relative cursor-pointer rounded-full px-4 py-2"
          whileTap={{ opacity: 0.8 }}
          onClick={() => onSelect(i)}
          key={item.key}
        >
          {i === selected && (
            <motion.div
              className="absolute inset-0 bg-white shadow-md"
              style={{ borderRadius: 100 }}
              layoutId="active"
              transition={{
                type: "spring",
                duration: 0.4,
              }}
            />
          )}
          <p className="relative z-10">{item.title}</p>
        </motion.div>
      ))}
    </div>
  );
}

SegmentedControl.displayName = "SegmentedControl";

export default SegmentedControl;
