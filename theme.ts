import {
  extendTheme,
  ThemeConfig,
  theme as base,
  withDefaultVariant,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    config,
    // colors: {
    //   black: "#000",
    //   white: "#fff",
    //   primary: "#B1E8FE",
    //   secondary: "#E6DFF1",
    //   tertiary: "#F1EEE9",
    //   quaternary: "#363636",
    //   quinary: "#151515",
    //   base: "#2A2A2A",
    // },
    fonts: {
      heading: `Euclid Circular A Bold, ${base.fonts?.heading}`,
      body: `Euclid Circular A Book, ${base.fonts?.body}`,
    },
  },
  withDefaultVariant({
    variant: "ghost",
    components: ["Button", "IconButton"],
  })
);
