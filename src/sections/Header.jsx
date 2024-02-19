import { primaryColor } from "@/colorConstants.json";
import useScrollBackground from "@/hooks/useScrollBackground";
import pageData from "@/mocks/pageData.json";
import {
  Button,
  Center,
  Flex,
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
      h={{base: "10%", sm: "15%"}}
      position={"fixed"}
      zIndex={1}
      transition={"background 0.8s ease"}
      background={changeStyle && "gray.50"}
      boxShadow={changeStyle && `${primaryColor} 0px 0px 2px 0px`}
    >
      <Flex w={{base: "90%", sm: "80vw"}} h={"100%"} p={1} alignItems={"center"} pos={"relative"}>
        <Image
          h={{ base: "90%", sm: "100%" }}
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
            pos={"absolute"}
            right={"-4rem"}
            variant="solid"
            colorScheme={changeStyle ? "green" : "whiteAlpha"}
            pb={0.5}
            rounded={"full"}
            onClick={() => toggleLan()}
          >
            {lan === "es" ? "en" : "es"}
          </Button>
        </Show>
        <Show below="sm">
          <Suspense fallback={<Spinner color="gray.50" />}>
            <NavSideBar sections={sections} lan={lan} toggleLan={toggleLan} />
          </Suspense>
        </Show>
      </Flex>
    </Center>
  );
}

Header.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  toggleLan: PropTypes.func,
};
