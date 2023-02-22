import * as React from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import theme from "./theme/theme";
import Home from "./pages/Home";
import Nav from "./components/NavBar";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav></Nav>
    <VStack>
      <Home></Home>
    </VStack>
  </ChakraProvider>
);
