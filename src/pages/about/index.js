import {
  Container,
  Heading,
  Text,
  Image,
  Link,
  Table,
  TableContainer,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// const profileImages = [
//   "/images/profile-picture.jpg",
//   "/images/extra-life_controllerdice.svg",
//   "/images/sloth.jpg",
// ];

function About() {
  // const [indexState, setIndexState] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (indexState === profileImages.length - 1) {
  //       setIndexState(0);
  //       console.log(indexState);
  //     } else {
  //       setIndexState(indexState + 1);
  //       console.log(indexState);
  //     }
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [indexState]);

  return (
    <Container minWidth={"100%"} minHeight={"125vh"} textAlign={"start"}>
      <Container
        pb={"1em"}
        minWidth={"100%"}
        minHeight={"125vh"}
        textAlign={"start"}
      >
        <Container pt={"1em"} display={"flex"} minWidth={"80%"}>
          <Image
            src="/images/profile-picture.jpg" //{profileImages[indexState]}
            alt="Sloth"
            maxWidth={"50vw"}
            maxHeight={"50vh"}
            borderRadius={"full"}
            borderStyle={"double"}
            borderWidth={"thick"}
            //pr={"1em"}
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
            overflowY={"auto"}
          >
            <Text fontSize={"lg"}>{"Hey there!"}</Text>
            <br />
            <Text maxWidth={"50vw"} maxHeight={"50vh"}>
              {
                "My name's Jacob Hein, and I'm a full-stack software developer based in the Seattle area. Originally from northeastern Wisconsin, I've always had a strong work ethic instilled in me by my parents and community. I believe in the “roll up your sleeves” mentality, which means getting down to work and seeing the job through until it's done."
              }
            </Text>
          </Container>
        </Container>

        <Container pt={"1em"} display={"flex"} minWidth={"80%"}>
          <Container
            padding={".5em 2em"}
            border={"groove"}
            backgroundColor={"black"}
            opacity={".8"}
            fontSize={"md"}
            pr={"1em"}
            height={"max-content"}
            alignSelf={"center"}
            overflowY={"auto"}
          >
            <Text maxWidth={"50vw"} maxHeight={"50vh"}>
              {
                "I obtained a BS in Computer Science and a BA in History and Anthropology from the University of Wisconsin Oshkosh, and I believe that both degrees have given me a unique perspective on problem-solving. My History and Anthropology degree, in particular, has been instrumental in developing my critical thinking skills and instilling in me a strong belief in the power of creative problem-solving. This approach to problem-solving involves taking a step back and looking at the problem from a different angle, something I find incredibly valuable when working on complex software systems."
              }
            </Text>
          </Container>

          <Image
            src="/images/sloth.jpg"
            alt="Sloth"
            maxWidth={"50vw"}
            maxHeight={"50vh"}
            borderRadius={"full"}
            pl={"1em"}
          />
        </Container>

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
            overflowY={"auto"}
          >
            <Text maxWidth={"50vw"} maxHeight={"50vh"}>
              {
                "My Computer Science degree gave me the tools to succeed as a software engineer in an ever-developing field. I learned how to code in several programming languages, work with databases, and design and build complex software systems. Additionally, my degree provided me with the opportunity to learn about various topics such as artificial intelligence, web development, and security. I love that the field of computer science is constantly evolving, and there's always something new to learn."
              }
            </Text>
          </Container>
        </Container>

        <Container pt={"1em"} display={"flex"} minWidth={"80%"}>
          <Container
            padding={".5em 2em"}
            border={"groove"}
            backgroundColor={"black"}
            opacity={".8"}
            fontSize={"md"}
            pr={"1em"}
            height={"max-content"}
            alignSelf={"center"}
            overflowY={"auto"}
          >
            <Text maxWidth={"50vw"} maxHeight={"50vh"}>
              {
                "I believe that my diverse background and mix of interests has contributed to making me a well-rounded individual and a valuable member of any team. I'm excited to see where my career as a software developer takes me and look forward to tackling new and exciting challenges in the years to come."
              }
            </Text>
          </Container>

          <Image
            src="/images/sloth.jpg"
            alt="Sloth"
            maxWidth={"50vw"}
            maxHeight={"50vh"}
            borderRadius={"full"}
            pl={"1em"}
          />
        </Container>
      </Container>

      <Container pb={"1em"} minWidth={"100%"} textAlign={"start"}>
        <Heading size={"lg"} textAlign={"center"}>
          Philanthropy
        </Heading>

        <Container pt={"1em"} display={"flex"} minWidth={"80%"}>
          <Link target="_blank" href="https://www.extra-life.org/" pl={"1em"}>
            <Image
              src="/images/extra-life_controllerdice.svg"
              alt="extra life"
              maxWidth={"40vw"}
              minHeight={"20vh"}
            />
          </Link>
          <Container
            padding={".5em 2em"}
            border={"groove"}
            backgroundColor={"black"}
            opacity={".8"}
            fontSize={"md"}
            pl={"1em"}
            height={"max-content"}
            alignSelf={"center"}
            overflowY={"auto"}
          >
            <Text maxWidth={"50vw"} maxHeight={"50vh"}>
              {
                "Extra Life is a gaming-based charity organization that raises funds for children's hospitals all around the world. By participating in a 24-hour gaming marathon, players raise money and awareness to support sick and injured children in their local communities. Since its inception in 2008, Extra Life has raised over $70 million for the Children's Miracle Network Hospitals, providing life-saving care and resources for children in need. Extra Life unites gamers from all backgrounds to make a difference in the world, showcasing the power of gaming for a great cause."
              }
            </Text>
          </Container>
        </Container>
      </Container>

      <Container pb={"1em"} minWidth={"100%"} textAlign={"start"}>
        <Heading size={"lg"} textAlign={"center"}>
          Follow Me On:
        </Heading>
        <Container display={"flex"} minWidth={"80%"} justifyContent={"center"}>
          <TableContainer>
            <Table size="sm" variant={"unstyled"}>
              <Tbody>
                <Tr>
                  <Td>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/jacob-nolan-hein/"
                      pl={"1em"}
                    >
                      <Image
                        src="/images/LI-In-Bug.png"
                        alt="LinkedIn"
                        minWidth={"21px"}
                        minHeight={"21px"}
                        maxWidth={"50px"}
                        maxHeight={"50px"}
                      />
                    </Link>
                  </Td>
                  <Td>
                    <Link
                      target="_blank"
                      href="https://github.com/jakehein"
                      pl={"1em"}
                    >
                      <Image
                        src="/images/github-mark-white.png"
                        alt="GitHub"
                        minWidth={"21px"}
                        minHeight={"21px"}
                        maxWidth={"50px"}
                        maxHeight={"50px"}
                      />
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
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
