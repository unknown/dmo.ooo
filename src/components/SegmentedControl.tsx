import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type SegmentedControlProps = {
  options: { key: string; title: string }[];
  selected: number;
  onSelect: (selected: number) => void;
};

export function SegmentedControl({ options, selected, onSelect }: SegmentedControlProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative flex rounded-full border border-gray-200 bg-gray-100/80 p-1 shadow-inner backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:shadow-none"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--spotlight) / 0.65),
              transparent 80%
            )
          `,
        }}
      />
      {options.map((item, i) => (
        <button
          key={item.key}
          className="relative rounded-full px-4 py-2"
          onClick={() => onSelect(i)}
        >
          <div
            className={twMerge(
              "absolute inset-0 -z-10 rounded-full bg-white shadow-md transition-opacity duration-200 dark:bg-gray-700",
              i === selected ? "opacity-100" : "opacity-0",
            )}
          />
          {item.title}
        </button>
      ))}
    </div>
  );
}
