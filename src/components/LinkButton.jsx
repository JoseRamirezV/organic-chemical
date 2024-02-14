import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import { FaAngleRight } from "react-icons/fa";
import { secondaryColor } from "@/colorConstants.json";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import pageData from '../mocks/pageData.json';

export function LinkButton({ link, ...styles }) {
  const { language } = useContext(LanguageContext);

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
      <HStack gap={5} p={1.5}>
        <Text ml={2} w={'4.5rem'}>{pageData[language].linkButtonText}</Text>
        <Icon
          as={FaAngleRight}
          boxSize={7}
          p={"5px"}
          rounded={"full"}
          bg={secondaryColor}
          fill={"white"}
        />
      </HStack>
    </Button>
  );
}

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  styles: PropTypes.object,
};
