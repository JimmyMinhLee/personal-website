import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: Object) => ({
    "html, body": {
      background: mode("#fcfcfc", "#202023")(props),
    },
  }),
};
const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const theme = extendTheme({ config, fonts, styles });
export default theme;
