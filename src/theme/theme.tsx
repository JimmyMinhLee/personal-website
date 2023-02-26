import { extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
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

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 60,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
    Steps,
  },
  Link: {
    baseStyle: (props: Object) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};
const theme = extendTheme({ config, fonts, styles, components });
export default theme;
