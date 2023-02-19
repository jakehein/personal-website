import { Container } from "@chakra-ui/react";
import { Fragment } from "react";
import NavBar from "../../components/navigation/NavBar";

function AppContainer({ children }) {
  return (
    <Container textAlign="center" fontSize="2xl" p="1em">
      <Fragment>
        <NavBar />
        <main>{children}</main>
      </Fragment>
    </Container>
  );
}

export default AppContainer;
