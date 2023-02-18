import NavElement from "./NavElement";
import { UnorderedList } from "@chakra-ui/react";

function NavBar() {
  return (
    <UnorderedList display={"flex"} margin={"1em"} textAlign={"center"}>
      <NavElement route="./" routeName="Home"></NavElement>
      <NavElement route="./about" routeName="About Me"></NavElement>
      <NavElement route="./contact" routeName="Contact"></NavElement>
      <NavElement route="./portfolio" routeName="Portfolio"></NavElement>
    </UnorderedList>
  );
}

export default NavBar;
