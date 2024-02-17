import { primaryColor, primaryFontColor } from "@/colorConstants.json";
import pageData from "@/mocks/pageData.json";
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
import PropTypes from "prop-types";
import { Suspense, lazy, useRef, useState } from "react";
import { AiFillMessage } from "react-icons/ai";

const ContactUsForm = lazy(() =>
  import("@/components/ContactUsForm").then((module) => ({
    default: module.ContactUsForm,
  }))
);

export function FormPopover({ lan }) {
  const initialFocusRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const { onClose, isOpen, onOpen } = useDisclosure();

  const greeting = pageData[lan].formData.greeting;

  return (
    <Box position={"fixed"} bottom="20px" right={"20px"}>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="left-start"
        closeOnBlur={false}
        isOpen={isOpen}
        onOpen={() => setShowForm(true)}
        onClose={() => {
          onClose();
          setShowForm(false);
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
              isDisabled={showForm}
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
          w={{ base: "15rem", sm: "auto" }}
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
