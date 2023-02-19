import NextLink from "next/link";
// ("use client");
//import Link from 'next/link';
import { ListItem, Link } from "@chakra-ui/react";
//import { Link } from "@chakra-ui/next-js";
function NavElement(props) {
  const route = props.route;
  const routeName = props.routeName;

  return (
    <ListItem
      display={"inline-block"}
      listStyleType={"none"}
      padding={"0 0"}
      margin={"0"}
    >
      <Link
        as={NextLink}
        replace
        href={route}
        display={"block"}
        width={"100%"}
        height={"100%"}
        textDecoration={"none"}
        padding={"0 .25em"}
        lineHeight={"3.5em"}
      >
        {routeName}
      </Link>
    </ListItem>
  );
}

export default NavElement;
