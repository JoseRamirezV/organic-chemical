import { primaryFontColor } from "@/colorConstants";
import { useEmailJs } from "@/hooks/useEmailJs.js";
import pageData from "@/mocks/pageData.json";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  Tooltip
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  IoCheckmarkOutline,
  IoCloseOutline,
  IoSendSharp,
} from "react-icons/io5";

export default function ContactUsForm({ initialFocusRef, onClose, lan }) {
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

  const { emailReqState, sendEmail } = useEmailJs({ states, lan });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(window.localStorage.getItem('email-cant-send')) return
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
        {emailReqState.status === states.failed.status && (
          <Tooltip label={`${pageData[lan].emailRequestStates.normal} email`}>
            <Button
            as={"a"}
            variant={"solid"}
            colorScheme={"blackAlpha"}
            me={"auto"}
            href="mailto:jr.ramirez.varon@gmail.com"
          >
            {formData.email}
          </Button>
          </Tooltip>
        )}
        <Button colorScheme="gray" onClick={onClose}>
          {formData.cancel}
        </Button>
        <Button
          colorScheme={
            emailReqState.status !== states.failed.status ? "green" : "red"
          }
          type="submit"
          isLoading={emailReqState.status === states.loading.status}
          loadingText={
            emailReqState.status === states.loading.status && emailReqState.text
          }
          isDisabled={
            emailReqState.status === states.success.status ||
            emailReqState.status === states.failed.status
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
