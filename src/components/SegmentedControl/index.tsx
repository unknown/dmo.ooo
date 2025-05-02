import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { SegmentedControlComponent } from "./types";
import { twMerge } from "tailwind-merge";

export const SegmentedControl: SegmentedControlComponent = ({
  options,
  selected,
  onSelect: consumerOnSelect,
  name = "segmented-control",
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const labelRefs = useRef<HTMLLabelElement[]>([]);

  const selectedX = useSpring(0, { damping: 30, stiffness: 400 });
  const selectedWidth = useSpring(0, { damping: 30, stiffness: 400 });
  const [useFallback, setUseFallback] = useState(true);

  useEffect(
    () => {
      const selectedLabel = labelRefs.current[selected];
      if (selectedLabel) {
        selectedX.jump(selectedLabel.offsetLeft);
        selectedWidth.jump(selectedLabel.offsetWidth);
      }
      setUseFallback(false);
    },
    // We need the initial `selected` value, but not on subsequent renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedX, selectedWidth],
  );

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function onSelect(index: number) {
    consumerOnSelect(index);
    const selectedLabel = labelRefs.current[index];
    if (selectedLabel) {
      selectedX.set(selectedLabel.offsetLeft);
      selectedWidth.set(selectedLabel.offsetWidth);
    }
  }

  return (
    <div
      className="group rounded-full border border-gray-200 bg-gray-100/80 p-1 shadow-inner backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              color-mix(in oklch, var(--spotlight) 65%, transparent),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative flex" role="radiogroup">
        {!useFallback && (
          <motion.div
            className="absolute inset-0 rounded-full bg-white shadow-md dark:bg-gray-700/60"
            style={{
              x: selectedX,
              width: selectedWidth,
            }}
          />
        )}
        {options.map((item, i) => {
          const isSelected = i === selected;
          const showSelectedFallback = useFallback && isSelected;

          return (
            <label
              key={item.key}
              ref={(el) => {
                if (el) {
                  labelRefs.current[i] = el;
                }
              }}
              className={twMerge(
                "relative rounded-full px-4 py-2 transition-colors",
                isSelected ? "text-foreground" : "text-foreground/80",
              )}
            >
              {showSelectedFallback && (
                <div className="absolute inset-0 -z-10 rounded-full bg-white shadow-md dark:bg-gray-700/60" />
              )}
              <input
                type="radio"
                name={name}
                value={item.key}
                checked={i === selected}
                onChange={() => onSelect(i)}
                className="sr-only"
              />
              {item.title}
            </label>
          );
        })}
      </div>
    </div>
  );
};
