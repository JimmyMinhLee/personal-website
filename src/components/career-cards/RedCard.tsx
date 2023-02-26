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

const RedCard = () => {
  const year = "2019";
  const header = "Software Engineering Intern @ RED Digital Cinema";
  const description =
    "Developed automated hardware testing applications for the RED Komodo Product.";
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

export default RedCard;
