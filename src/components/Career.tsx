import { Heading, Container, useColorModeValue } from "@chakra-ui/react";
import BerkeleyCard from "./career-cards/BerkeleyCard";
import DDCard from "./career-cards/DDCard";
import PlaystationCard from "./career-cards/PlaystationCard";
import RedCard from "./career-cards/RedCard";
import RidgelineCard from "./career-cards/RidgelineCard";
import AnimatedSection from "../components/AnimatedSection";
const MyCareer = () => {
  return (
    <AnimatedSection
      child={
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
          <AnimatedSection child={<DDCard />} delay={0.6} />
          <AnimatedSection child={<BerkeleyCard />} delay={0.8} />
          <AnimatedSection child={<RidgelineCard />} delay={1.0} />
          <AnimatedSection child={<PlaystationCard />} delay={1.2} />
          <AnimatedSection child={<RedCard />} delay={1.4} />
        </Container>
      }
      delay={0.4}
    />
  );
};
export default MyCareer;
