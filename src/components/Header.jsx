import { Button, Center, Flex, Image, Show, Spacer } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useScrollBackground } from "../hooks/useScrollBackground";
import sections from "../mocks/sections.json";

export function Header({ lan, toggleLan }) {
  const { changeStyle } = useScrollBackground();

  return (
    <Center
      as="header"
      w={"100%"}
      h={"15%"}
      position={"fixed"}
      zIndex={1}
      transition={"background 0.8s ease"}
      background={changeStyle && "gray.50"}
      boxShadow={changeStyle && "#56d152 0px 0px 2px 0px;"}
    >
      <Flex w={"80vw"} h={"100%"} p={1} alignItems={"center"} pos={"relative"}>
        <Image
          h="100%"
          py={2}
          objectFit="cover"
          rounded={"lg"}
          src="images/Logo.png"
          alt="Chemical-logo"
        />
        <Spacer />
        <Show above="sm">
          {sections &&
            sections[lan].map((section) => (
              <Button
                as={"a"}
                key={section}
                href={`#${section}`}
                variant={changeStyle ? "ghost" : "solid"}
                colorScheme={"WhiteAlpha"}
                color={changeStyle ? "green.600" : "white"}
              >
                {section}
              </Button>
            ))}
          <Button
            pos={"absolute"}
            right={"-4rem"}
            variant="solid"
            colorScheme={changeStyle ? "green" : "whiteAlpha"}
            rounded={"full"}
            onClick={() => toggleLan()}
          >
            {lan === "es" ? "en" : "es"}
          </Button>
        </Show>
        <Show></Show>
      </Flex>
    </Center>
  );
}

Header.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  toggleLan: PropTypes.func,
};
