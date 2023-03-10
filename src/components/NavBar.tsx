import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  useColorMode,
  Spacer,
  Text,
  Container,
  Link,
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

const ItemsListFull = () => {
  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      align="center"
      justifyContent={"space-around"}
    >
      <Box>
        <Link href="/" color={useColorModeValue("black", "white")}>
          <Heading fontSize={"3xl"}> jimmy lee</Heading>
        </Link>
      </Box>
      <Link href="/pictures" color={useColorModeValue("black", "white")}>
        <Box p={2} pl={4}>
          <Text fontSize={"md"}> pictures </Text>
        </Box>
      </Link>
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
  );
};
const ItemsListAbridged = () => {
  return (
    <Container
      display={{ base: "inline-block", lg: "none" }}
      justifyContent={"space-around"}
    >
      <Box>
        <Link href="/" color={useColorModeValue("black", "white")}>
          <Heading fontSize={"3xl"}> jimmy lee</Heading>
        </Link>
      </Box>
    </Container>
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
          <ItemsListFull />
          <ItemsListAbridged />
          <Spacer></Spacer>
          <ThemeToggleButton />
        </Container>
      </Box>
    </>
  );
}
