import SectionTitle from "../../../components/SectionTitle";
import ConnectWithSocial from "./ConnectWithSocial";
import SendEmail from "./SendEmail";

const Contact = () => {
  return (
    <>
      <div className="pt-24">
        <SectionTitle label="Contact with Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <ConnectWithSocial />
          <SendEmail />
        </div>
      </div>
    </>
  );
};

export default Contact;
