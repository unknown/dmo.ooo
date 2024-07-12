import { forwardRef, SVGProps } from "react";

export const ArrowUpRight = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg
      width="1.5rem"
      height="1.5rem"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
});
ArrowUpRight.displayName = "ArrowUpRight";
