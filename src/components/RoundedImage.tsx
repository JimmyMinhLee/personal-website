import { Image } from "@chakra-ui/react";
import MyImage from "./images/image.jpg";
const RoundedImage = () => {
  return (
    <Image
      src={MyImage}
      borderStyle="fit"
      display="flex"
      borderRadius="md"
      objectFit="cover"
      maxW={"450px"}
      maxH={"450px"}
    />
  );
};

export default RoundedImage;
