import emailjs from "@emailjs/browser";

export const sendEmail = async (e) => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const form = e.currentTarget;
  return {
    status: "error",
    title: "Oops!",
    description: "Something went wrong",
  };
  try {
    const emailReq = await emailjs.sendForm(serviceId, templateId, form, {
      publicKey: publicId,
    });
    form.reset()
    if (emailReq.status !== 200) throw new Error();
    return {
      status: "success",
      title: "Success",
      description: "Your message was sent successfully",
    };
  } catch (error) {
    return {
      status: "error",
      title: "Oops!",
      description: "Something went wrong",
    };
  }
};
