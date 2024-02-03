import { Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export const DotButton = ({ ...props }) => {
  return (
    <Flex
      as="button"
      type="button"
      align={"center"}
      style={{ touchAction: "manipulation" }}
      cursor={"pointer"}
      boxSize={"3rem"}
      {...props}
    />
  );
};

export const PrevButton = ({ ...props }) => {
  return (
    <Flex as={"button"} type="button" data-group {...props}>
      <Icon
        as={IoIosArrowForward}
        boxSize={"3rem"}
        transition={"all 0.2s ease"}
        _groupHover={{ transform: "scale(1.3) rotate(0.5turn)" }}
        transform={"rotate(0.5turn)"}
      />
    </Flex>
  );
};

export const NextButton = ({ ...props }) => {
  return (
    <Flex as="button" type="button" data-group {...props}>
      <Icon
        as={IoIosArrowForward}
        boxSize={"3rem"}
        transition={"all 0.2s ease"}
        _groupHover={{ transform: "scale(1.3)" }}
      />
    </Flex>
  );
};
