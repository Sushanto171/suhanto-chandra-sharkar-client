import { GoArrowDown } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const DownloadCV = ({ px, size }) => {
  return (
    <button
      className={`btn btn-${size} font-medium flex bg-accent hover:text-secondary hover:bg-hover text-white gap-0 items-center px-1 sm:px-${px}`}
    >
      Download CV
      <GoArrowDown size={18} />
    </button>
  );
};

export default DownloadCV;
