import { Container, Heading, Text, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Heading as="h1" mb={".5em"}>
        Welcome to Sloth&nbsp;Programming!
      </Heading>
      <Heading size={"md"}>
        Where ideas are rich and the resident programmer only get out once
        a&nbsp;week!
      </Heading>
      <Image
        src="/images/sloth.jpg"
        alt="Sloth"
        width={150}
        height={200}
        borderRadius={"full"}
      />
      <Container>
        <Text fontSize={"md"}>
          Less impressive than Zombo.com, but more impressive
          than&nbsp;nothing...
        </Text>
      </Container>
    </Container>
  );
}
