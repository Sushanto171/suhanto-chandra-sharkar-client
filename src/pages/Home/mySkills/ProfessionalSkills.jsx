import { AiOutlineJavaScript } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import SkillCard from "./SkillCard";

const ProfessionalSkills = () => {
  const icons = [
    { icon: <IoLogoHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <AiOutlineJavaScript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React JS" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ];
  return (
    <>
      <h3 className="text-2xl font-bold text-left  text-primary mb-8 flex items-center gap-2 justify-start ">
        Professional Skillset
      </h3>
      <div className="flex items-center flex-wrap gap-5 sm:gap-8 md:gap-12 lg:gap-20 justify-center ">
        {icons.map((icon, i) => (
          <SkillCard key={i} icon={icon} />
        ))}
      </div>
    </>
  );
};

export default ProfessionalSkills;
