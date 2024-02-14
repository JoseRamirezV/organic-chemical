import { Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export const DotButton = ({ ...props }) => {
  return (
    <Flex
      as="button"
      type="button"
      style={{ touchAction: "manipulation" }}
      cursor={"pointer"}
      boxSize={".5rem"}
      {...props}
    />
  );
};

const btnCommonStyles = {
  boxSize: "3rem",
  position: "absolute",
  h: "100%",
  justify: "center",
  align: "center",
  style: { touchAction: "manipulation" },
  cursor: "pointer",
  _disabled: { opacity: 0.3 },
};

export const PrevButton = ({ ...props }) => {
  return (
    <Flex
      as={"button"}
      type="button"
      {...btnCommonStyles}
      data-group
      {...props}
    >
      <Icon
        as={IoIosArrowForward}
        transition= "all 0.2s ease"
        transform={"rotate(0.5turn)"}
        boxSize={"3rem"}
        _groupHover={{ transform: "scale(1.3) rotate(0.5turn)" }}
      />
    </Flex>
  );
};

export const NextButton = ({ ...props }) => {
  return (
    <Flex as="button" type="button" {...btnCommonStyles} data-group {...props}>
      <Icon
        as={IoIosArrowForward}
        transition= "all 0.2s ease"
        boxSize={"3rem"}
        _groupHover={{ transform: "scale(1.3)" }}
      />
    </Flex>
  );
};
