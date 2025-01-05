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
      <nav className="sticky top-2 z-20">
        <div className="py-2 px-4 md:py-3 lg:py-5 border border-opacity-40 hover:border-opacity-80 border-accent w-fit hover:shadow-slate-500 hover:shadow-inner bg-[#] transition-all duration-200 ease-linear  mx-auto sm:px-6 lg:px-12 rounded-full backdrop-blur-3xl">
          <ul className="flex gap-5 items-center font-medium">
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
              <DownloadCV size={"sm"} px={"4"} />
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="flex justify-end">
        <nav className=" sm:hidden fixed top-20 z-20 ">
          <div className="relative py-5shadow-inner hover:bg-[#3436487e] transition-all duration-200 ease-linear max-w-fit  px-6 rounded backdrop-blur-3xl">
            <ul className="flex flex-col gap-5">
              <li>
                <NavLink>Home </NavLink>
              </li>
              <li>
                <NavLink>About me </NavLink>
              </li>
              <li>
                <NavLink>My Skills </NavLink>
              </li>
              <li>
                <NavLink>My Projects </NavLink>
              </li>
              <li>
                <NavLink>Contact </NavLink>
              </li>
            </ul>
            <div className="absolute rotate-[90deg] -z-2 h-96 bottom-0- w-full divider"></div>
          </div>
        </nav>
      </div> */}

      {/* <div className="sm:hidden  fixed bottom-20 -right-10 z-10">
        <ul className="timeline timeline-vertical px-0 w-32">
          <li>
            <div className="timeline-start timeline-box">Home</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">iMac</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">iPod</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">iPhone</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">Apple Watch</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default Navbar;
