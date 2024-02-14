
import { sendEmail as sendEmailService } from "@/services/sendEmail.js";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export const useEmailJs = (states) => {
  const toast = useToast();

  const [emailReqState, setEmailReqState] = useState(states.normal);

  const sendEmail = async (e) => {
    setEmailReqState(states.loading);
    const { status, title, description } = await sendEmailService(e);
    if (status === "success") setEmailReqState(states.success);
    if (status === "error") setEmailReqState(states.failed);
    toast({
      title: title,
      status: status,
      description: description,
      isClosable: true,
      duration: 3000,
    });
  };

  return {
    emailReqState,
    sendEmail,
  };
};
