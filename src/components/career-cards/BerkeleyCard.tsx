import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import AnimatedSection from "../AnimatedSection";

const BerkeleyCard = () => {
  const year = "2022";

  // Alumni Section
  const header = "UC Berkeley Alumni";
  const description =
    "Graduated with a B.A. in Computer Science, and a minor in Data Science.";

  // UpSync Section
  const header_two = "→ President @ UpSync Consulting";
  const description_two =
    "Lead a group of 40 undergraduates in contract consulting work as their president. ";

  // ANova Section
  const header_three = "→ Mentor @ Berkeley ANova";
  const description_three =
    "Taught computer science to middle & high schools in the Oakland area.";

  //Codeology Section
  const header_four = "→ Project Leader @ Berkeley Codeology";
  const description_four =
    "Directed club members in 12-week video-game development projects.";

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
            <Heading pt={4} size="sm" fontFamily={"M Plus Rounded 1c"}>
              {header_two}
            </Heading>
            <Text fontSize="sm">{description_two}</Text>
            <Heading pt={4} size="sm" fontFamily={"M Plus Rounded 1c"}>
              {header_three}
            </Heading>
            <Text fontSize="sm">{description_three}</Text>
            <Heading pt={4} size="sm" fontFamily={"M Plus Rounded 1c"}>
              {header_four}
            </Heading>
            <Text fontSize="sm">{description_four}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BerkeleyCard;
