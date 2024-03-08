import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function Section({ id, fullW, children, ...props }) {
  return (
    <Flex
      as={"section"}
      id={id}
      w={"100"}
      align={"center"}
      justify={"center"}
      {...props}
    >
      <Flex
        align={"center"}
        justify={"center"}
        w='100%'
        maxW={fullW ?? { base: "100%", md: "90%" ,lg: "67.5rem", "2xl": "90%", "3xl": "75%" }}
        overflowX={"clip"}
      >
        {children}
      </Flex>
    </Flex>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  fullW: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
