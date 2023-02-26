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

const PlaystationCard = () => {
  const year = "2020";
  const header = "Software Engineering Intern @ Playstation Now";
  const description =
    "Built data transformation pipeline in the PS5 ecosystem.";
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

export default PlaystationCard;
