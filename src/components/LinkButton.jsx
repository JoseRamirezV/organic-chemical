import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import { BsArrowRightCircleFill } from "react-icons/bs";

export function LinkButton({
  text = "Saber mas",
  link,
  inverted = false,
  invertedHover = false,
}) {
  const hoverStyles = { color: "rgb(56, 197, 68)", bg: "white" };
  const invertedHoverStyles = { color: "white", bg: "rgb(56, 197, 68)" };

  return (
    <Button
      as="a"
      w={"9rem"}
      rounded="full"
      href={link}
      variant={"outline"}
      color={inverted ? "rgb(56, 197, 68)" : "white"}
      border={`2px solid ${inverted ? "rgb(56, 197, 68)" : "white"}`}
      _hover={invertedHover ? invertedHoverStyles : hoverStyles}
    >
      <HStack h="100%" gap={4} ml={1}>
        <Text ml={2}>{text}</Text>
        <Icon
          as={BsArrowRightCircleFill}
          boxSize={"1.8rem"}
          rounded={"full"}
          bg="white"
          fill={"#009100"}
        />
      </HStack>
    </Button>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  invertedHover: PropTypes.bool,
};
