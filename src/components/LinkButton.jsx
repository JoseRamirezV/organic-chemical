import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import { FaAngleRight } from "react-icons/fa";

export function LinkButton({ text = "Saber mas", link, ...styles }) {
  return (
    <Button
      as="a"
      w={"9rem"}
      h={"auto"}
      rounded="full"
      href={link}
      variant={"outline"}
      border={"2px solid"}
      {...styles}
    >
      <HStack gap={4} p={1.5}>
        <Text ml={2}>{text}</Text>
        <Icon
          as={FaAngleRight}
          boxSize={7}
          p={"5px"}
          rounded={"full"}
          bg="#009100"
          fill={"white"}
        />
      </HStack>
    </Button>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  styles: PropTypes.object,
};
