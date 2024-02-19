import pageData from "@/mocks/pageData.json";
import { sendEmail as sendEmailService } from "@/services/sendEmail.js";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export const useEmailJs = ({ states, lan }) => {
  const toast = useToast();

  const [emailReqState, setEmailReqState] = useState(states.normal);

  const sendEmail = async (e) => {
    setEmailReqState(states.loading);
    if (window.localStorage.getItem("email-sent")) {
      const [title, description] = pageData[lan].emailAlreadySent.split(";");
      toast({
        title,
        status: "info",
        description,
        isClosable: true,
        duration: 10000,
      });
      setEmailReqState(states.failed);
      return;
    }
    const { status } = await sendEmailService(e);
    if (status === "success") {
      window.localStorage.setItem("email-sent", true);
      setEmailReqState(states.success);
    }
    if (status === "error") {
      window.localStorage.setItem("email-cant-send", true);
      setEmailReqState(states.failed);
    }
    const [title, description] =
      pageData[lan].emailRequestStates[`${status}Message`].split(";");
    toast({
      title,
      status,
      description,
      isClosable: true,
      duration: status === 'success' ? 3000 : 10000,
    });
  };

  return {
    emailReqState,
    sendEmail,
  };
};
