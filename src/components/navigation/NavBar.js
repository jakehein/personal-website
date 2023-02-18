import NavElement from "./NavElement";
import { UnorderedList } from "@chakra-ui/react";

function NavBar() {
  return (
    <UnorderedList
      display={"flex"}
      justifyContent={"center"}
      position={"sticky"}
      margin={"0 auto"}
      textAlign={"center"}
      paddingTop={".5em"}
      borderBottom={"solid 1px"}
    >
      <NavElement route="./" routeName="Home"></NavElement>
      <NavElement route="./about" routeName="About&nbsp;Me"></NavElement>
      <NavElement route="./portfolio" routeName="Portfolio"></NavElement>
      <NavElement route="./contact" routeName="Contact"></NavElement>
    </UnorderedList>
  );
}

export default NavBar;
