import NextLink from "next/link";
import { ListItem, Link } from "@chakra-ui/react";
function NavElement(props) {
  const route = props.route;
  const routeName = props.routeName;

  return (
    <ListItem listStyleType={"none"} padding={"0 1em"} margin={"0"}>
      <Link
        as={NextLink}
        replace
        href={route}
        display={"block"}
        width={"100%"}
        height={"100%"}
        textDecoration={"none"}
        padding={"0 .5em"}
        lineHeight={"3.5em"}
      >
        {routeName}
      </Link>
    </ListItem>
  );
}

export default NavElement;
