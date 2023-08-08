import React from "react";
import { twMerge } from "tailwind-merge";

type SegmentedControlProps = {
  options: { key: string; title: string }[];
  selected: number;
  onSelect: (selected: number) => void;
};

export function SegmentedControl({ options, selected, onSelect }: SegmentedControlProps) {
  return (
    <div className="flex rounded-full border border-gray-200 bg-gray-100/80 p-1 shadow-inner backdrop-blur-sm">
      {options.map((item, i) => (
        <button
          key={item.key}
          className="relative rounded-full px-4 py-2 hover:text-gray-600 transition-colors"
          onClick={() => onSelect(i)}
        >
          <div
            className={twMerge(
              "absolute inset-0 -z-10 bg-white shadow-md rounded-full transition-opacity duration-200",
              i === selected ? "opacity-100" : "opacity-0",
            )}
          />
          {item.title}
        </button>
      ))}
    </div>
  );
}
