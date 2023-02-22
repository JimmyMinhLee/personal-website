import { Box, Text, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
const Home = () => {
  return (
    <VStack>
      <ColorModeSwitcher></ColorModeSwitcher>
      <Box>
        First with a lot of text that might go all the way to the end of the
        screen?
        <Text>More text</Text>
        <Text>More text</Text>
        <Text>More text</Text>
        <Text>More text</Text>
        <Text>More text</Text>
        <Text>More text</Text>
        <Text>More text</Text>
        <Text>More text</Text>
      </Box>

      <Box>
        <Text>Second text</Text>
      </Box>
    </VStack>
  );
};

export default Home;
