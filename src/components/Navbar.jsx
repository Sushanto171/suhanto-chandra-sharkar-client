import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdContactMail, MdManageAccounts } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { scrollToView } from "../utilis/utilis";
import DownloadCV from "./DownloadCV";
const Navbar = () => {
  const navigate = useNavigate();
  const [section, setSection] = useState("home");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const isScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", isScroll);
    return () => window.removeEventListener("scroll", isScroll);
  }, []);
  // section observer
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update URL when a section is in view
            navigate(`#${entry.target.id}`, { replace: true });
            setSection(`${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 60% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigate]);

  return (
    <>
      <nav className="sticky top-0.5 z-20 pb-1">
        <div
          className={`px-4 py-2 md:py-3 lg:py-5  border-opacity-40 hover:border-opacity-80 border-accent ${
            scroll > 200 ? "w-fit rounded-full border" : "w-full"
          }  hover:shadow-slate-500 hover:shadow-inner bg-[#] transition-all duration-300 ease-linear  mx-auto sm:px-6 lg:px-12 backdrop-blur-3xl`}
        >
          <ul className="max-w-screen-lg mx-auto flex gap-5 items-center font-medium">
            <li>
              <NavLink
                onClick={() => scrollToView("home")}
                className={`${
                  section === "" || section === "/" || section === "home"
                    ? "text-accent"
                    : ""
                } flex  justify-center gap-1 items-center`}
              >
                <IoHomeOutline />
                <span className="hidden sm:block"> Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollToView("about")}
                className={`${
                  section === "about" ? "text-accent" : ""
                } flex  justify-center gap-1 items-center`}
              >
                <CgProfile />
                <span className="hidden sm:block"> About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollToView("skills")}
                className={`${
                  section === "skills" ? "text-accent" : ""
                } flex  justify-center gap-1 items-center`}
              >
                <MdManageAccounts size={20} />
                <span className="hidden sm:block">Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollToView("projects")}
                className={`${
                  section === "projects" ? "text-accent" : ""
                } flex  justify-center gap-1 items-center`}
              >
                <GrProjects />
                <span className="hidden sm:block"> Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollToView("contact")}
                className={`${
                  section === "contact" ? "text-accent" : ""
                } flex  justify-center gap-1 items-center`}
              >
                <MdContactMail />
                <span className="hidden sm:block">Contact</span>
              </NavLink>
            </li>
            <li className="flex-1 text-right flex justify-end">
              <DownloadCV size={"navbar"} px={"4"} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
