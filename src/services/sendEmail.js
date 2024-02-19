import emailjs from "@emailjs/browser";

export const sendEmail = async (e) => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const form = e.currentTarget;
  // return {
  //   status: 'error'
  // }
  
  try {
    const emailReq = await emailjs.sendForm(serviceId, templateId, form, {
      publicKey: publicId,
    });
    form.reset()
    if (emailReq.status !== 200) throw new Error();
    return {
      status: "success",
    };
  } catch (error) {
    return {
      status: "failed",
    };
  }
};
