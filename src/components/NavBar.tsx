import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  useColorMode,
  Spacer,
  Text,
  Container,
} from "@chakra-ui/react";

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
  return (
    <>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        css={{ backdropFilter: "blur(50px)" }}
        zIndex={2}
      >
        <Container
          display="flex"
          pt={2}
          maxW="4xl"
          justifySelf="center"
          alignSelf={"center"}
        >
          <Flex align="center" justifyContent={"space-around"}>
            <Box>
              <Heading fontSize={"3xl"}> jimmy lee</Heading>
            </Box>
            <Box p={2} pl={4}>
              <Text fontSize={"md"}> about </Text>
            </Box>
            <Box p={2} pl={4}>
              <Text fontSize={"md"}> pictures </Text>
            </Box>
            <Box p={2} pl={4}>
              <Text fontSize={"md"}> experience </Text>
            </Box>
            <Box p={2} pl={4}>
              <Text fontSize={"md"}> projects </Text>
            </Box>
            <Box p={2} pl={4}>
              <Text fontSize={"md"}> writing </Text>
            </Box>
          </Flex>

          <Spacer></Spacer>
          <ThemeToggleButton />
        </Container>
      </Box>
    </>
  );
}
