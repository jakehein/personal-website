import {
  Container,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function About() {
  return (
    <Container>
      <Heading size={"lg"}>About Me</Heading>
      <Container display={"flex"}>
        <Image
          src="/images/sloth.jpg"
          alt="Sloth"
          //className={styles.vercelLogo}
          width={150}
          height={200}
          borderRadius={"full"}
          //priority
        />
        <Text
          padding={".5em 2em"}
          border={"groove"}
          borderRadius={"15%"}
          backgroundColor={"black"}
          opacity={".8"}
        >
          {
            "I received my Bachelor of Science degree from the University of Wisconsin Oshkosh, majoring in Computer Science. I have a background in history and anthropology, and have a knack for creative problem solving. My most used languages are TypeScript/JavaScript and C#. Most of my experience is backend development, although I have a lot of frontend experience in Vue and Angular. My greatest strength is my willingness to learn new things and adapt to ever-changing obstacles. I enjoy learning new things, and I prefer to make sure I understand what I'm doing before brashly coding something I'm unsure of. This benefits both me an my employers, as I gain useful experience and skills, and they gain an employee/contractor that is openly communicative about their needs on the job. I am dedicated to doing my best work because doing my best is what I am most passionate about."
          }
        </Text>
      </Container>

      <Heading size={"lg"}>Follow my GitHub:</Heading>
      <Text
        padding={".5em 2em"}
        border={"groove"}
        borderRadius={"15%"}
        backgroundColor={"black"}
        opacity={".8"}
      >
        {"https://github.com/jakehein"}
      </Text>
      <Heading size={"lg"}>EXPERTISE:</Heading>
      <UnorderedList
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
      </UnorderedList>
    </Container>
  );
}

export default About;
