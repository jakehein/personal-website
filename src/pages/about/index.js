import { Container, Heading, Text, Image, Link } from "@chakra-ui/react";

function About() {
  return (
    <Container minWidth={"100%"} minHeight={"125vh"} textAlign={"start"}>
      <Container pt={"1em"} display={"flex"} minWidth={"80%"}>
        <Image
          src="/images/sloth.jpg"
          alt="Sloth"
          maxWidth={"50vw"}
          maxHeight={"50vh"}
          borderRadius={"full"}
          pr={"1em"}
        />
        <Container
          padding={".5em 2em"}
          border={"groove"}
          backgroundColor={"black"}
          opacity={".8"}
          fontSize={"md"}
          pl={"1em"}
          height={"max-content"}
          alignSelf={"center"}
        >
          <Text fontSize={"lg"}>{"How's it going!"}</Text>
          <br />
          <Text>
            {
              "I'm a fullstack developer based in the greater Seattle area. I've got a BA in Computer Science and a BS in History and Anthropology, both of which I obtained while attending University of Wisconsin Oshkosh."
            }
          </Text>
        </Container>
      </Container>

      <Heading size={"lg"} textAlign={"center"}>
        Philanthropy
      </Heading>

      <Container pt={"1em"} display={"flex"} minWidth={"80%"}>
        <Text
          padding={".5em 2em"}
          border={"groove"}
          backgroundColor={"black"}
          opacity={".8"}
          fontSize={"md"}
          pl={"1em"}
          height={"max-content"}
          alignSelf={"center"}
        >
          {
            "I received my Bachelor of Science degree from the University of Wisconsin Oshkosh, majoring in Computer Science. I have a background in history and anthropology, and have a knack for creative problem solving. My most used languages are TypeScript/JavaScript and C#. Most of my experience is backend development, although I have a lot of frontend experience in Vue and Angular. My greatest strength is my willingness to learn new things and adapt to ever-changing obstacles. I enjoy learning new things, and I prefer to make sure I understand what I'm doing before brashly coding something I'm unsure of. This benefits both me an my employers, as I gain useful experience and skills, and they gain an employee/contractor that is openly communicative about their needs on the job. I am dedicated to doing my best work because doing my best is what I am most passionate about."
          }
        </Text>
        <Link
          fontSize={"center"}
          target="_blank"
          href="https://www.extra-life.org/"
          display={"flex"}
          justifyContent={"center"}
          marginLeft={"-2em"}
        >
          <Image
            src="/images/extra-life_controllerdice.svg"
            alt="extra life"
            minWidth={"50vw"}
            maxHeight={"40vh"}
          />
        </Link>
      </Container>

      <Heading size={"lg"} textAlign={"center"}>
        Follow my GitHub:
      </Heading>
      <Container
        pt={"1em"}
        display={"flex"}
        minWidth={"80%"}
        justifyContent={"center"}
      >
        <Text
          padding={".5em 2em"}
          border={"groove"}
          backgroundColor={"black"}
          opacity={".8"}
          fontSize={"md"}
          pl={"1em"}
          height={"max-content"}
        >
          {"https://github.com/jakehein"}
        </Text>
      </Container>

      {/* <Heading size={"lg"}>EXPERTISE:</Heading> */}
      {/* <UnorderedList
        padding={".5em 2em"}
        border={"groove"}
        borderRadius={"15%"}
        backgroundColor={"black"}
        opacity={".8"}
      >
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>backend development</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>frontend development</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>TypeScript/JavaScript</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>C#</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>.NET/Core</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>MVC</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>Node</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>NestJS</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>MongoDB</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>SQL</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>HTML</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>CSS</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>Vue</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>React</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>Next.JS</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>Angular</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>Firebase</Text>
        </ListItem>
        <ListItem listStyleType={"none"}>
          <Text as={"span"}>MEAN stack development</Text>
        </ListItem>
      </UnorderedList> */}
    </Container>
  );
}

export default About;
