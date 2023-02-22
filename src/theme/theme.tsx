import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["120px", "120px"],
      fontWeight: "bold",
      lineHeight: "110000%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
};

const theme = extendTheme({ customTheme });
export default theme;
