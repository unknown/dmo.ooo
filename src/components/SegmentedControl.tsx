import React from "react";
import { motion } from "framer-motion";

type SegmentedControlProps = {
  options: Array<{ key: string; title: string }>;
  selected: number;
  onSelect: (selected: number) => void;
};

function SegmentedControl({ options, selected, onSelect }: SegmentedControlProps) {
  return (
    <div className="flex rounded-full border border-gray-200 bg-gray-100/80 p-1 shadow-inner backdrop-blur-sm">
      {options.map((item, i) => (
        <button
          key={item.key}
          className="relative rounded-full px-4 py-2"
          onClick={() => onSelect(i)}
        >
          {i === selected ? (
            <motion.div
              className="absolute inset-0 -z-10 bg-white shadow-md"
              style={{ borderRadius: 999 }}
              layoutId="active"
              transition={{ type: "spring", duration: 0.4 }}
            />
          ) : null}
          <p>{item.title}</p>
        </button>
      ))}
    </div>
  );
}

SegmentedControl.displayName = "SegmentedControl";

export default SegmentedControl;
