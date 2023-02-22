import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
  Text,
  Container,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={2}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          justifySelf="center"
          alignSelf={"center"}
        >
          <Flex align="center">
            <Box pr={2}>
              <Text fontSize={"xl"}> jimmyminhlee</Text>
            </Box>
          </Flex>
          <Box p={2} pl={4}>
            <Text fontSize={"md"}> experiences </Text>
          </Box>{" "}
          <Box p={2} pl={4}>
            <Text fontSize={"md"}> dotfiles </Text>
          </Box>
          <Spacer></Spacer>
          <ThemeToggleButton />
        </Container>
      </Box>
    </>
  );
}
