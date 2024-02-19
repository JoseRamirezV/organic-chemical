import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import {
  Box,
  Highlight,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { Suspense, lazy, useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import PropTypes from "prop-types";
import pageData from "@/mocks/pageData.json";

const ContactUsForm = lazy(() => import("@/components/ContactUsForm"));

export default function FormPopover({ lan }) {
  const initialFocusRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const { onClose, isOpen, onOpen } = useDisclosure();

  const greeting = pageData[lan].formData.greeting;
  const tooltipText = pageData[lan].formBtnTooltip;

  const closePopover = () => {
    onClose();
    setTimeout(() => {
      setShowForm(false);
    }, 500);
  };

  return (
    <Box position={"fixed"} bottom="20px" right={"20px"}>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="left-start"
        closeOnBlur={false}
        isOpen={isOpen}
        onOpen={() => setShowForm(true)}
        onClose={() => closePopover()}
      >
        <PopoverTrigger>
          <Box bg={"none"}>
            <Tooltip
              as={"button"}
              label={tooltipText}
              rounded={"lg"}
              mb={1}
              py={1}
              px={2}
              isDisabled={showForm}
              hasArrow
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
          w={{ base: "75vw", sm: "20rem" }}
          p={2}
        >
          <PopoverHeader fontWeight="bold" border="0">
            <Text pt={4} pb={0} w={"95%"} fontSize={"lg"}>
              <Highlight
                query={greeting.split(" ")[0]}
                styles={{ color: "green.400" }}
              >
                {greeting}
              </Highlight>
            </Text>
          </PopoverHeader>
          <PopoverArrow bg={primaryFontColor} shadow={"none"} />
          <PopoverCloseButton />
          <PopoverBody>
            <Suspense fallback={<Spinner />}>
              {showForm && (
                <ContactUsForm
                  onClose={onClose}
                  initialFocusRef={initialFocusRef}
                  lan={lan}
                />
              )}
            </Suspense>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

FormPopover.propTypes = {
  lan: PropTypes.string,
};
