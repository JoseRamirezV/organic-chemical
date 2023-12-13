import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function Section({ children, background = "grey" }) {
  return (
    <Flex
      as="section"
      bg={background}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={'center'}
    >
      {children}
    </Flex>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
};
