import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Show,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { TiThMenu } from "react-icons/ti";
import { useScrollBackground } from "../hooks/useScrollBackground";
import pageData from "../mocks/pageData.json";
import { primaryColor } from '@/colorConstants.json';

export function Header({ lan, toggleLan }) {
  const { changeStyle } = useScrollBackground();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center
      as="header"
      w={"100%"}
      h={"15%"}
      position={"fixed"}
      zIndex={1}
      transition={"background 0.8s ease"}
      background={changeStyle && "gray.50"}
      boxShadow={changeStyle &&  `${primaryColor} 0px 0px 2px 0px`}
    >
      <Flex w={"80vw"} h={"100%"} p={1} alignItems={"center"} pos={"relative"}>
        <Image
          h={{ base: "60%", sm: "100%" }}
          py={2}
          objectFit="cover"
          src="images/Logo.png"
          alt="Chemical-logo"
        />
        <Spacer />
        <Show above="sm">
          {pageData[lan].sections.map((section) => (
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
            rounded={"full"}
            onClick={() => toggleLan()}
          >
            {lan === "es" ? "en" : "es"}
          </Button>
        </Show>
        <Show below="sm">
          <IconButton
            onClick={onOpen}
            color={changeStyle ? primaryColor : "white"}
            icon={
              <TiThMenu
                transition={"all 0.5s ease"}
              />
            }
            colorScheme={"green"}
            variant={"unstyled"}
            fontSize={"2xl"}
            p={0}
          >
            Open
          </IconButton>
          <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px" display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                <Image
                  h={"4rem"}
                  objectFit="cover"
                  src="images/Logo.png"
                  alt="Chemical-logo"
                  loading="lazy"
                />
                <Button
                  variant="solid"
                  colorScheme={changeStyle ? "green" : "whiteAlpha"}
                  rounded={"full"}
                  onClick={() => toggleLan()}
                >
                  {lan === "es" ? "en" : "es"}
                </Button>
              </DrawerHeader>
              <DrawerBody display={"flex"} flexDirection={"column"}>
                {pageData[lan].sections.map((section) => (
                    <Button
                      as={"a"}
                      key={section}
                      href={`#${section}`}
                      variant={"ghost"}
                      color={primaryColor}
                      fontSize={"xl"}
                      size={"lg"}
                      onClick={onClose}
                    >
                      {section}
                    </Button>
                  ))}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
      </Flex>
    </Center>
  );
}

Header.propTypes = {
  lan: PropTypes.oneOf(["es", "en"]),
  toggleLan: PropTypes.func,
};
