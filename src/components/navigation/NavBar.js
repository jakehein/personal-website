import NavElement from "./NavElement";
import { Container, UnorderedList } from "@chakra-ui/react";

function NavBar() {
  return (
    <Container display={"flex"} justifyContent={"center"}>
      <UnorderedList
        boxSizing="border-box"
        margin={"0 auto"}
        textAlign={"center"}
        borderBottom={"solid 1px"}
      >
        <NavElement route="./" routeName="Home"></NavElement>
        <NavElement route="./about" routeName="About&nbsp;Me"></NavElement>
        <NavElement route="./portfolio" routeName="Portfolio"></NavElement>
        <NavElement route="./contact" routeName="Contact"></NavElement>
      </UnorderedList>
    </Container>
  );
}

export default NavBar;
