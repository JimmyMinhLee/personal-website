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

const DDCard = () => {
  const year = "2022";
  const header = "Software Engineer @ DoorDash";
  const description =
    "Currently working at DoorDash in the infrastructure organization, specifically maintaining CodeCov for all of engineering.";
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

export default DDCard;
