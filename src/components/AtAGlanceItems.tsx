import { Heading, Container, useColorModeValue } from "@chakra-ui/react";
import BerkeleyCard from "./career-cards/BerkeleyCard";
import DDCard from "./career-cards/DDCard";
import PlaystationCard from "./career-cards/PlaystationCard";
import RedCard from "./career-cards/RedCard";
import RidgelineCard from "./career-cards/RidgelineCard";

const Bio = () => {
  return (
    <Container maxWidth="3xl">
      <Heading
        variant="section-heading"
        bgClip="text"
        bgGradient={useColorModeValue(
          "linear(to-l, #e66465, #9198e5)",
          "linear(to-l, #7928CA, #F88CA7)"
        )}
      >
        my career:
      </Heading>
      <DDCard />
      <BerkeleyCard />
      <RidgelineCard />
      <PlaystationCard />
      <RedCard />
    </Container>
  );
};
const GlanceItems = () => {
  return <Bio />;
};
export default GlanceItems;
