import { ChakraProvider, VStack } from "@chakra-ui/react";
import theme from "./theme/theme";
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import Nav from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Nav></Nav>
      <VStack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<Pictures />} />
        </Routes>
      </VStack>
    </BrowserRouter>
  </ChakraProvider>
);
