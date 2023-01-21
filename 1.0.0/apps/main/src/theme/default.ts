import { extendTheme } from "@chakra-ui/react";
import { boxShadow } from "./effects/shadow";
import colors from "./colors.json";

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      ":root": {
        "--primary": colors.primary[500],
        "--primary-400": colors.primary[400],
        "--primary-300": colors.primary[300],
        "--primary-200": colors.primary[200],
        "--primary-100": colors.primary[100],
        "--white": colors.white
      },
      "*": {
        userSelect: "none",
        transition: "filter .2s linear !important",
      },
      "::-webkit-scrollbar": {
        w: 2,
        mr: -2
      },
      "::-webkit-scrollbar-track": {
        background: colors.primary[300],
        ...boxShadow()
      },
      "::-webkit-scrollbar-thumb": {
        background: colors.primary[400],
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: colors.primary[500],
      },
      body: {
        bg: colors.primary[100],
        h: "100vh",
        w: "100vw",
        overflow: "hidden"
      },
      "button:hover": {
        filter: "brightness(0.95)"
      },
      ".red-progressbar > div[role='progressbar']": {
        bg: colors.red[400]
      },
      ".green-progressbar > div[role='progressbar']": {
        bg: colors.green[400]
      },
      ".primary-progressbar > div[role='progressbar']": {
        bg: colors.primary[500]
      },
      "*:focus": {
        boxShadow: "none !important"
      },
      "input:focus": {
        boxShadow: "none !important"
      },
      ".chakra-checkbox__control:not([data-checked])": {
        color: "var(--primary) !important",
        bgColor: "primary.100"
      }
    }
  }
});