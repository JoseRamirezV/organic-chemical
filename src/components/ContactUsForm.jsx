import { primaryFontColor } from "@/colorConstants";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEmailJs } from "@/hooks/useEmailJs.js";
import {
  IoCheckmarkOutline,
  IoCloseOutline,
  IoSendSharp,
} from "react-icons/io5";
import pageData from "@/mocks/pageData.json";

export function ContactUsForm({ initialFocusRef, onClose, lan }) {
  const { formData, emailRequestStates } = pageData[lan];
  const states = {
    normal: {
      status: "normal",
      text: emailRequestStates.normal,
      icon: <IoSendSharp />,
    },
    success: {
      status: "success",
      text: emailRequestStates.success,
      description: "Your message was sent successfully",
      icon: <IoCheckmarkOutline />,
    },
    failed: {
      status: "failed",
      text: emailRequestStates.failed,
      icon: <IoCloseOutline />,
    },
    loading: {
      status: "loading",
      text: emailRequestStates.loading,
    },
  };
  const { emailReqState, sendEmail } = useEmailJs({ states });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };

  const commonInputStyles = {
    bg: "gray.600",
    px: 4,
    py: 2,
    required: true,
  };
  return (
    <FormControl
      as={"form"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      onSubmit={handleSubmit}
    >
      <InputGroup flexDirection={"column"} variant="unstyled">
        <FormLabel my={1}>{formData.name}</FormLabel>
        <Input
          type="text"
          name="user_name"
          id="user_name"
          placeholder={formData.namePlaceholder}
          sx={{
            "&::-webkit-input-placeholder": {
              color: "gray.400",
            },
          }}
          {...commonInputStyles}
          ref={initialFocusRef}
        />
      </InputGroup>
      <InputGroup flexDirection={"column"} variant="unstyled">
        <FormLabel my={1}>{formData.email}</FormLabel>
        <Input
          type="email"
          name="user_email"
          id="user_email"
          sx={{
            "&::-webkit-input-placeholder": {
              color: "gray.400",
            },
          }}
          {...commonInputStyles}
          placeholder={formData.emailPlaceholder}
        />
      </InputGroup>
      <InputGroup flexDirection={"column"} variant="unstyled">
        <FormLabel my={1}>{formData.message}</FormLabel>
        <Textarea
          name="message"
          id="message"
          placeholder={formData.messagePlaceholder}
          sx={{
            "&::-webkit-scrollbar-track": { bg: primaryFontColor },
            "&::-webkit-scrollbar-thumb": {
              borderColor: primaryFontColor,
            },
            "&::-webkit-input-placeholder": {
              color: "gray.400",
            },
          }}
          resize={"none"}
          {...commonInputStyles}
        />
      </InputGroup>
      <Input
        type="text"
        name="from_name"
        value={"Chemical Group Page"}
        hidden
        readOnly
      />
      <ButtonGroup justifyContent="end" size={"sm"} mt={1}>
        {emailReqState === states.failed && (
          <Button
            as={"a"}
            variant={"solid"}
            colorScheme={"blackAlpha"}
            me={"auto"}
            href="mailto:jr.ramirez.varon@gmail.com"
          >
            {formData.email}
          </Button>
        )}
        <Button colorScheme="gray" onClick={onClose}>
          {formData.cancel}
        </Button>
        <Button
          colorScheme={
            emailReqState.text !== states.failed.text ? "green" : "red"
          }
          type="submit"
          isLoading={emailReqState.text === states.loading.text}
          loadingText={
            emailReqState.text === states.loading.text && emailReqState.text
          }
          isDisabled={
            emailReqState.text === states.success.text ||
            emailReqState.text === states.failed.text
          }
          rightIcon={emailReqState.icon}
          spinnerPlacement="end"
        >
          {states[emailReqState.status].text}
        </Button>
      </ButtonGroup>
    </FormControl>
  );
}

ContactUsForm.propTypes = {
  initialFocusRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onClose: PropTypes.func,
  lan: PropTypes.string,
};
