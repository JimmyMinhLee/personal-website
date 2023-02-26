import {
  Flex,
  Heading,
  Container,
  Text,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Box,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

const RidgelineCard = () => {
  const year = "2021";
  const header = "Software Engineering Intern @ Ridgeline";
  const description =
    "Worked on the UI team to build keyboard shortcuts throughout the Ridgeline application.";
  return (
    <Card
      variant="filled"
      size="sm"
      bg={useColorModeValue("#fcfcfc", "#202023")}
      direction={"row"}
    >
      <CardHeader>
        <Heading variant="subsection-heading"> {year}</Heading>
      </CardHeader>

      <CardBody>
        <Stack>
          <Box>
            <Heading size="md" fontFamily={"M Plus Rounded 1c"}>
              {header}
            </Heading>
            <Text fontSize="sm">{description}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default RidgelineCard;
