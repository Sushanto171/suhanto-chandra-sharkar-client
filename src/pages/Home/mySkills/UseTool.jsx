import { FaGitAlt } from "react-icons/fa";
import { RiFirebaseFill, RiVercelLine } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import SkillCard from "./SkillCard";

const UseTool = () => {
  const icons = [
    { icon: <VscVscodeInsiders />, name: "VS Code" },
    { icon: <RiFirebaseFill />, name: "Firebase" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <RiVercelLine />, name: "Vercel" },
  ];
  return (
    <div>
      <h3 className="text-2xl font-bold text-left  text-primary mb-8 flex items-center gap-2 justify-start text-opacity-80">
        Tools I Use:
      </h3>
      <div className="flex items-center flex-wrap gap-5 sm:gap-8 md:gap-12 lg:gap-20 justify-center ">
        {icons.map((icon, i) => (
          <SkillCard key={i} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default UseTool;
