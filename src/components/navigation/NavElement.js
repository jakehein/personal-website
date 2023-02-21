import NextLink from "next/link";
import { ListItem, Link } from "@chakra-ui/react";

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
        width={"100%"}
        height={"100%"}
        textDecoration={"none"}
        padding={"0 .25em"}
        lineHeight={"2em"}
        display="inline-block"
        // animation specifics below
        backgroundImage="linear-gradient(to right, #54b3d6, #54b3d6 50%, #FFF 50%)"
        backgroundSize="200% 100%"
        backgroundPosition="-100%"
        position="relative"
        backgroundClip={"text"}
        textColor="transparent"
        transition="all 0.5s ease-in-out"
        _hover={{
          backgroundPosition: "0",
          "&::before": {
            width: "100%",
          },
        }}
        _before={{
          content: "''",
          background: "rgba(78,66,245,1)",
          display: "block",
          position: "absolute",
          bottom: "3px",
          left: "0",
          width: "0",
          height: "3px",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {routeName}
      </Link>
    </ListItem>
  );
}

export default NavElement;
