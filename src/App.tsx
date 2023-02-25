import { ChakraProvider, VStack } from "@chakra-ui/react";
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
