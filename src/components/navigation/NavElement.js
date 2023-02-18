import Link from "next/link";
import { ListItem } from "@chakra-ui/react";
function NavElement(props) {
  const route = props.route;
  const routeName = props.routeName;

  return (
    <ListItem flex={"auto"} listStyleType={"none"}>
      <Link replace href={route}>
        {routeName}
      </Link>
    </ListItem>
  );
}

export default NavElement;
