import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import RoundedImage from "../components/RoundedImage";
const Home = () => {
  return (
    <VStack pt={20} maxWidth="7xl">
      <Flex maxWidth="6xl">
        <RoundedImage />
        <Box m={8}>
          <Text fontSize="5xl"> hello & welcome.</Text>
          <Text>
            this is the beginning of my personal portfolio website. i'm glad you
            could make it!
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Home;
