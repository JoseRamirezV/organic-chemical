import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Image,
  Button,
} from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import { primaryColor } from "@/colorConstants";
import PropTypes from 'prop-types';

export default function NavSideBar({sections, lan, toggleLan}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        color={primaryColor}
        icon={<TiThMenu transition={"all 0.5s ease"} />}
        colorScheme={"green"}
        variant={"unstyled"}
        fontSize={"2xl"}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image
              h={"3rem"}
              objectFit="cover"
              src="images/Logo.webp"
              alt="Chemical-logo"
              loading="lazy"
            />
            <Button
              variant="solid"
              colorScheme={"green"}
              rounded={"full"}
              pb={0.5}
              mr={4}
              onClick={() => toggleLan()}
            >
              {lan === "es" ? "en" : "es"}
            </Button>
          </DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"}>
            {sections.map((section) => (
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
    </>
  );
}

NavSideBar.propTypes = {
    sections: PropTypes.array,
    lan: PropTypes.string,
    toggleLan: PropTypes.func
}