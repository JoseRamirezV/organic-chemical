import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function Section({ children, bg = "gray.100", padding = 10, height='100vh'}) {
  return (
    <Flex
      as="section"
      bg={bg}
      minH={height}
      px={`${padding}%`}
      alignItems={"center"}
      justifyContent={'center'}
    >
      {children}
    </Flex>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  padding: PropTypes.number,
  height: PropTypes.string
};
