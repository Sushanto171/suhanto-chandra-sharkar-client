import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-hover ">
        <div className="max-w-screen-lg mx-auto footer transition-all duration-400 ease-in-out !backdrop-blur-3xl text-neutral-content items-center py-4">
          <aside className="grid-flow-col items-center text-center">
            <p>
              Copyright © {new Date().getFullYear()} | Sushanto - All rights
              reserved
            </p>
          </aside>
          <div className="flex gap-8 justify-center md:justify-end  w-full text-2xl">
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
      </footer>
    </>
  );
};

export default Footer;
