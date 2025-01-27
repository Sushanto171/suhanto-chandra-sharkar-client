import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../../assets/original-555c43ce059be58b864d3c917e0254d4.gif";

const ConnectWithSocial = () => {
  return (
    <div className="flex-col group bg-hover hover:bg-opacity-55 bg-opacity-30 flex justify-center items-center py-12 border border-opacity-40 hover:bg-hover transition-all duration-300 border-accent ">
      <div className="overflow-hidden mb-4 relative">
        <div className="absolute h-full w-full bg-accent bg-opacity-40 group-hover:bg-opacity-20 rounded-full "></div>
        <img className="rounded-full w-40" src={img} alt="" />
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl">
          Connect with <span className="text-accent">Social</span>
        </h3>
        <div className="flex gap-8 justify-center my-8 text-2xl">
          <a href="https://github.com/Sushanto171" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sushanto-kumar171/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://web.facebook.com/Sushantochandrasharkar.me/"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithSocial;
