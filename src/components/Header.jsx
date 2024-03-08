import { primaryColor } from "@/colorConstants.json";
import useScrollBackground from "@/hooks/useScrollBackground";
import pageData from "@/mocks/pageData.json";
import {
  Button,
  Center,
  Flex,
  Hide,
  Image,
  Show,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";

const NavSideBar = lazy(() => import("@/components/NavSideBar"));

export default function Header({ lan, toggleLan }) {
  const { changeStyle } = useScrollBackground();
  const { sections } = pageData[lan];

  return (
    <Center
      as="header"
      w={"100%"}
      position={"fixed"}
      zIndex={1}
      transition={"background 0.8s ease"}
      background={changeStyle && "gray.50"}
      boxShadow={changeStyle && `${primaryColor} 0px 0px 2px 0px`}
      py={{ base: 2, xl: 1, "2xl": 2 }}
    >
      <Flex
        w={"100%"}
        maxW={{ base: "90%" ,lg: "67.5rem", "2xl": "80%", "3xl": "75%" }}
        mx={"auto"}
        alignItems={"center"}
        pos={"relative"}
      >
        <Image
          h={"5rem"}
          py={2}
          objectFit="cover"
          src="images/Logo.webp"
          alt="Chemical-logo"
        />
        <Spacer />
        <Show above="sm">
          {sections.map((section) => (
            <Button
              as={"a"}
              key={section}
              href={`#${section}`}
              variant={changeStyle ? "ghost" : "solid"}
              colorScheme={"WhiteAlpha"}
              color={changeStyle ? primaryColor : "white"}
            >
              {section}
            </Button>
          ))}
          <Button
            variant="solid"
            colorScheme={changeStyle ? "green" : "whiteAlpha"}
            rounded={"full"}
            pb={0.5}
            onClick={() => toggleLan()}
          >
            {lan === "es" ? "en" : "es"}
          </Button>
        </Show>
        <Hide above="sm">
          <Suspense fallback={<Spinner color="gray.50" />}>
            <NavSideBar sections={sections} lan={lan} toggleLan={toggleLan} />
          </Suspense>
        </Hide>
      </Flex>
    </Center>
  );
}

Header.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  toggleLan: PropTypes.func,
};
