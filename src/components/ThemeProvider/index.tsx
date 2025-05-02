"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderComponent } from "./type";

export const ThemeProvider: ThemeProviderComponent = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
