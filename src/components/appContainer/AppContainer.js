import { Container, Image, Link, Text, keyframes } from "@chakra-ui/react";
import { Fragment } from "react";
import NavBar from "../../components/navigation/NavBar";

const bannerAnimationKeyframes = keyframes`
  from {opacity: .4} 
  to {opacity: 1}
`;

function AppContainer({ children }) {
  const bannerAnimation = `${bannerAnimationKeyframes} 0.5s linear`;

  return (
    <Container
      textAlign="center"
      fontSize="2xl"
      p="1em"
      pt="0em"
      maxW="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgGradient="linear(to-t, rgba(26,32,44,1), rgba(0,0,0,0.5)), url(./images/mountains.jpg)"
    >
      <Fragment>
        <Link
          fontSize={"center"}
          p="-1em"
          target="_blank"
          href="https://supportukrainenow.org/"
          display={"flex"}
          transition={"all 0.5s linear"}
          _hover={{
            textDecoration: "none",
            bgGradient:
              //blue "linear(to-r, rgba(0,0,0,0), rgba(78,66,245,1), rgba(0,0,0,0))",
              "linear(to-r, rgba(0,0,0,0), rgba(224,25,25,1), rgba(0,0,0,0))",
            animation: bannerAnimation,
          }}
          justifyContent={"center"}
        >
          <Text as={"span"}>Slava Ukraini: Click to Donate</Text>
          <Image
            src="/images/ukrainian-flag.jpg"
            alt="Support Ukraine"
            width={20}
            height={10}
            paddingLeft={".25em"}
          />
        </Link>
        <NavBar />
        <main>{children}</main>
      </Fragment>
    </Container>
  );
}

export default AppContainer;
