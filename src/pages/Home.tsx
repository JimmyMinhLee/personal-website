import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import RoundedImage from "../components/RoundedImage";
const Home = () => {
  return (
    <VStack pt={16} maxWidth="6xl">
      <Flex>
        <RoundedImage />
        <Text> This will be the first section. </Text>
      </Flex>
      <Box>
        <Text> This will be the second section. </Text>
      </Box>
    </VStack>
  );
};

export default Home;
