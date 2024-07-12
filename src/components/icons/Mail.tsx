import { forwardRef, SVGProps } from "react";

export const Mail = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
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
        d="M7 9L12 12.5L17 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
        stroke="currentColor"
      />
    </svg>
  );
});
Mail.displayName = "Mail";
