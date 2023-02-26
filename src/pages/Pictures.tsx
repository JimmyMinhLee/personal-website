import { HStack, Image, Box } from "@chakra-ui/react";
import otherPicture from "../components/images/jimmy2.jpg";
import profilePicture from "../components/images/jimmy.jpg";
const Pictures = () => {
  return (
    <HStack maxWidth="6xl" pt={32}>
      <Box bg="red">
        <Image fit="scale-down" src={otherPicture} />
      </Box>
      <Image fit="scale-down" src={profilePicture} />
      <Image fit={"scale-down"} src={otherPicture} />
    </HStack>
  );
};
export default Pictures;
