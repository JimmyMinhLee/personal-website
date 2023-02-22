import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const fonts = {
  body: `Inter`,
};
const color = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const themeOverrides = {
  ...chakraTheme,
  fonts,
  color,
};
const theme = extendTheme({ themeOverrides });
export default theme;
