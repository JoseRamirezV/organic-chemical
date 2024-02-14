import {
  Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import { ContactUsForm } from "./ContactUsForm";

export function FormPopover() {
  const initialFocusRef = useRef();
  const [disableTooltip, setDisableTooltip] = useState(false);
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <Box position={"fixed"} bottom="20px" right={"20px"}>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="left-start"
        isOpen={isOpen}
        onOpen={() => setDisableTooltip(true)}
        onClose={() => {
          onClose()
          setDisableTooltip(false)
        }}
      >
        <PopoverTrigger>
          <Box bg={"none"}>
            <Tooltip
              as={"button"}
              label={"Contact"}
              hasArrow
              rounded={"lg"}
              py={1}
              px={3}
              isDisabled={disableTooltip}
            >
              <IconButton
                variant={"unstyled"}
                size={"lg"}
                icon={<AiFillMessage size={"80%"} style={{ margin: "auto" }} />}
                color={"gray.200"}
                p={1}
                bg={primaryColor}
                isRound
                _hover={{
                  bg: "gray.200",
                  color: primaryColor,
                  transform: "scale(1.1)",
                  border: `2px solid ${primaryColor}`,
                }}
                onClick={onOpen}
              ></IconButton>
            </Tooltip>
          </Box>
        </PopoverTrigger>
        <PopoverContent
          color="white"
          bg={primaryFontColor}
          borderColor={primaryFontColor}
        >
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            Hola! En que podemos ayudarte?
          </PopoverHeader>
          <PopoverArrow bg={primaryFontColor} shadow={"none"} />
          <PopoverCloseButton/>
          <PopoverBody>
            <ContactUsForm onClose={onClose} initialFocusRef={initialFocusRef}/>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
