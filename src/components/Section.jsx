import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function Section({
  children,
  bg = "gray.100",
  px = '10%',
  py = '0',
  height = "100vh",
  id
}) {
  return (
    <Flex
      as="section"
      minH={height}
      px={px}
      py={py}
      alignItems={"center"}
      justifyContent={"center"}
      overflowX={"hidden"}
      bg={bg}
      id={id}
    >
      {children}
    </Flex>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  height: PropTypes.string,
  id: PropTypes.string,
};
