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

type BioCardProps = {
  year: string;
  header: string;
  description: string;
};
const BioCard = (props: BioCardProps) => {
  const { year, header, description } = props;
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
const Bio = () => {
  const DDCard = () => {
    const year = "2022";
    const header = "Software Engineer @ DoorDash";
    const description =
      "Currently working at DoorDash in the infrastructure organization, specifically maintaining CodeCov for all of engineering.";
    return <BioCard year={year} header={header} description={description} />;
  };

  const RidgelineCard = () => {
    const year = "2021";
    const header = "Software Engineering Intern @ Ridgeline Inc.";
    const description =
      "Currently working at DoorDash in the infrastructure organization, specifically maintaining CodeCov for all of engineering.";
    return <BioCard year={year} header={header} description={description} />;
  };

  const BerkeleyCard = () => {
    const year = "2022";
    const header = "Alumni @ UC Berkeley";
    const description =
      "Graduated with a B.A. in Computer Science, minoring in Data Science.";
    return <BioCard year={year} header={header} description={description} />;
  };
  return (
    <Container maxWidth="3xl">
      <Heading
        variant="section-heading"
        bgClip="text"
        bgGradient={useColorModeValue(
          "linear(to-l, #e66465, #9198e5)",
          "linear(to-l, #ffca57, #f0f2ac)"
        )}
      >
        my career:
      </Heading>
      <DDCard />
      <BerkeleyCard />
      <RidgelineCard />
    </Container>
  );
};
const GlanceItems = () => {
  return <Bio />;
};
export default GlanceItems;
