import {
  FaBookOpen,
  FaCode,
  FaGraduationCap,
  FaHandPointRight,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const Highlights = () => {
  const highlights = [
    { icon: <FaGraduationCap />, text: "BSc in Botany - Academic Background" },
    { icon: <FaCode />, text: "Passionate about Web Development & Coding" },
    {
      icon: <FaLightbulb />,
      text: "Focus on Intuitive & Dynamic User Experiences",
    },
    {
      icon: <FaRocket />,
      text: "Strengths in Problem-Solving & Responsive Design",
    },
    { icon: <FaBookOpen />, text: "Continuous Learner & Tech Explorer" },
  ];

  return (
    <section className="py-12 md:px-12 text-secondary">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-left  text-primary mb-8 flex items-center gap-2 justify-start ">
        Here are a Few Highlights:
        <FaHandPointRight className="" />
      </h2>
      <div className="max-w-xl ">
        {/* Highlights List */}
        <ul className="">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-4  rounded-md shadow-sm hover:shadow-hover hover:shadow-md transition duration-300"
            >
              <div className="text-accent text-lg">{highlight.icon}</div>
              <p className="text-lg text-secondary">{highlight.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
