import { GoArrowDown } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const DownloadCV = ({ px, size }) => {
  return (
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1oQntZHahET8dZCmaVC59PJbHcnhVOPme/view?usp=sharing"
      className={`btn font-medium ${
        size === "navbar" ? "btn-sm sm:btn-md" : ""
      }  tracking-wider flex gap-0 rounded-full bg-accent hover:border-accent hover:text-secondary hover:bg-hover text-white md:gap-3 items-center px-2 sm:px-${px} md:px-5`}
    >
      Resume
      <GoArrowDown size={18} />
    </a>
  );
};

export default DownloadCV;
