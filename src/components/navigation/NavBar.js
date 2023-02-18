import NavElement from "./NavElement";
import { UnorderedList } from "@chakra-ui/react";

function NavBar() {
  return (
    <UnorderedList
      display={"flex"}
      margin={"1em 10em"}
      textAlign={"center"}
      paddingBottom={"1em"}
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
