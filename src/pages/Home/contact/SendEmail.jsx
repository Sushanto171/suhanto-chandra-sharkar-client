import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.user_name.value;
    const email = form.user_email.value;
    const message = form.message.value;
    console.log({ name, email, message });
    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      to_name: "Sushanto",
      subject: `You got a new message from ${name}`,
      message: `Hello, I hope this message finds you well. I wanted to reach out regarding ${message}. Please let me know if there’s any further information you require. Looking forward to your response.`,
    };
    emailjs
      .send(
        "service_4fnqjuh",
        "template_jxzsvcc",
        templateParams,
        "S3jIh9MlAJIo5woiy"
      )
      .then(
        () => {
          toast.success("Successfully email send!");
          form.reset();
        },
        () => {
          toast.error("Something went wrong. Please ty again.");
        }
      );
  };

  return (
    <div
      id="email"
      className=" bg-hover flex-col hover:bg-opacity-55 bg-opacity-30 flex justify-center  py-4 border border-opacity-40 hover:bg-hover transition-all duration-300 border-accent "
    >
      <div className="text-center mb-4 text-2xl md:text-3xl">
        <h3>
          Send Us a <span className="text-accent"> Message</span>
        </h3>
      </div>
      <form ref={form} className="w-10/12 mx-auto" onSubmit={sendEmail}>
        <div className="flex flex-col w-full gap-2">
          <label className="text-accent">Name *</label>
          <input
            className="p-2 outline-none  focus:outline-accent"
            type="text"
            name="user_name"
            required
          />
          <label className="text-accent">Email *</label>
          <input
            className="p-2 outline-none focus:outline-accent"
            type="email"
            name="user_email"
            required
          />
          <label className="text-accent ">Message *</label>
          <textarea
            className="outline-none focus:outline-accent p-2"
            name="message"
            rows={3}
          />
          <input
            className="btn mt-2 bg-accent font-medium text-lg text-primary"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default SendEmail;
