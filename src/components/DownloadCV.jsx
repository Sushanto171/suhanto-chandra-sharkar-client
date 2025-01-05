import { GoArrowDown } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const DownloadCV = ({ px, size }) => {
  return (
    <a
      target="_blank"
      href="https://docs.google.com/document/d/1Vop6F21_VKgMG3TZcv-XFyuCnOJPPd1IU6kQEl4dTHQ/edit?usp=sharing"
      className={`btn font-medium btn-${size} font-medium tracking-wider flex gap-0 rounded-full bg-accent hover:border-accent hover:text-secondary hover:bg-hover text-white md:gap-3 items-center px-2 sm:px-${px} md:px-5`}
    >
      Resume
      <GoArrowDown size={18} />
    </a>
  );
};

export default DownloadCV;
