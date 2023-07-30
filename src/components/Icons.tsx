import React from "react";

type IconElement = React.ElementRef<"svg">;

type IconProps = React.ComponentPropsWithoutRef<"svg"> & {};

export const GitHubIcon = React.forwardRef<IconElement, IconProps>(
  ({ strokeWidth = 1.5, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={strokeWidth}
        ref={forwardedRef}
        {...props}
      >
        <path
          d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);
GitHubIcon.displayName = "GithubIcon";

export const TwitterIcon = React.forwardRef<IconElement, IconProps>(
  ({ strokeWidth = 1.5, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={strokeWidth}
        ref={forwardedRef}
        {...props}
      >
        <path
          d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);
TwitterIcon.displayName = "TwitterIcon";

export const LinkedInIcon = React.forwardRef<IconElement, IconProps>(
  ({ strokeWidth = 1.5, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={strokeWidth}
        {...props}
      >
        <path
          d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17V13.5V10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 7.01L7.01 6.99889"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);
LinkedInIcon.displayName = "LinkedInIcon";

export const MailIcon = React.forwardRef<IconElement, IconProps>(
  ({ strokeWidth = 1.5, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={strokeWidth}
        ref={forwardedRef}
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
  },
);
MailIcon.displayName = "MailIcon";

export const LinkIcon = React.forwardRef<IconElement, IconProps>(
  ({ strokeWidth = 1.5, ...props }, forwardedRef) => {
    return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
        strokeWidth={strokeWidth}
        ref={forwardedRef}
        {...props}
      >
        <path
          d="M21 3h-6m6 0l-9 9m9-9v6"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
          stroke="#000000"
          strokeLinecap="round"
        ></path>
      </svg>
    );
  },
);
LinkIcon.displayName = "LinkIcon";
