import * as React from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import theme from "./theme/theme";
import Home from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack>
      <Home></Home>
    </VStack>
  </ChakraProvider>
);
