import { Container } from "@chakra-ui/react";
import { Fragment } from "react";
import NavBar from "../../components/navigation/NavBar";

function AppContainer({ children }) {
  return (
    <Container
      textAlign="center"
      fontSize="2xl"
      p="1em"
      maxW="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgGradient="linear(to-t, rgba(26,32,44,1), rgba(0,0,0,0.5)), url(./images/mountains.jpg)"
    >
      <Fragment>
        <NavBar />
        <main>{children}</main>
      </Fragment>
    </Container>
  );
}

export default AppContainer;
