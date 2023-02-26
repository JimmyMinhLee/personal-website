import {
  VStack,
  Flex,
  Heading,
  Button,
  Text,
  Container,
  HStack,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useState } from "react";
import Paragraph from "./Paragraph";

const Bio = () => {
  return <Paragraph>This is my text.</Paragraph>;
};
const GlanceItems = () => {
  return <Bio />;
};
export default GlanceItems;
