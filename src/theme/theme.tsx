import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  textStyles: {},
};

const theme = extendTheme({ customTheme });
export default theme;
