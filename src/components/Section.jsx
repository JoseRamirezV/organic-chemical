import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function Section({ children, background = "#ffff", padding = 10}) {
  return (
    <Flex
      as="section"
      bg={background}
      h={"95vh"}
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
  background: PropTypes.string,
  padding: PropTypes.number
};
