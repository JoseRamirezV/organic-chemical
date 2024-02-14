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

export function ContactUsForm({ initialFocusRef, onClose }) {
  
  const states = {
    normal: {
      text: "Send",
      icon: <IoSendSharp />,
    },
    success: {
      status: "success",
      text: "Sent!",
      description: "Your message was sent successfully",
      icon: <IoCheckmarkOutline />,
    },
    failed: {
      text: "Failed",
      icon: <IoCloseOutline />,
    },
    loading: {
      text: "Loading",
    },
  };
  const { emailReqState, sendEmail } = useEmailJs(states);
  
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    sendEmail(e);
  };

  return (
    <FormControl
      as={"form"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      onSubmit={handleSubmit}
    >
      <InputGroup flexDirection={"column"}>
        <FormLabel my={1}>Name</FormLabel>
        <Input
          type="text"
          name="user_name"
          id="user_name"
          required
          ref={initialFocusRef}
        />
      </InputGroup>
      <InputGroup flexDirection={"column"}>
        <FormLabel my={1}>E-mail</FormLabel>
        <Input type="email" name="user_email" id="user_email" required />
      </InputGroup>
      <InputGroup flexDirection={"column"}>
        <FormLabel my={1}>Message</FormLabel>
        <Textarea
          name="message"
          id="message"
          placeholder="Hola, me gustaría..."
          sx={{
            "&::-webkit-scrollbar-track": { bg: primaryFontColor },
            "&::-webkit-scrollbar-thumb": {
              borderColor: primaryFontColor,
            },
          }}
          resize={"none"}
          required
        />
      </InputGroup>
      <Input
        type="text"
        name="from_name"
        value={"Chemical Group Page"}
        hidden
        readOnly
      />
      <ButtonGroup justifyContent="end" size={"sm"}>
        {emailReqState === states.failed && (
          <Button
            as={"a"}
            variant={"solid"}
            colorScheme={"blackAlpha"}
            me={"auto"}
            href="mailto:jr.ramirez.varon@gmail.com"
          >
            Email
          </Button>
        )}
        <Button colorScheme="gray" onClick={onClose}>
          Cancel
        </Button>
        <Button
          colorScheme={emailReqState.text !== states.failed.text ? "green" : "red"}
          type="submit"
          isLoading={emailReqState.text === states.loading.text}
          loadingText={emailReqState.text === states.loading.text && emailReqState.text}
          isDisabled={
            emailReqState.text === states.success.text || emailReqState.text === states.failed.text
          }
          rightIcon={emailReqState.icon}
          spinnerPlacement="end"
        >
          {emailReqState.text}
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
};
