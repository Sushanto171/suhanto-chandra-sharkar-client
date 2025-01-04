import { PropTypes } from "prop-types";
const SkillCard = ({ icon }) => {
  return (
    <div className={` relative h-32 w-32 flex items-center justify-center`}>
      <div
        title={icon.name}
        className="hover:scale-105 rounded-sm absolute h-32 w-32 mx-auto flex justify-center items-center text-5xl bg-opacity-30 bg-hover shadow-accent shadow-sm hover:shadow-md hover:shadow-accent transition-all ease-in-out duration-300"
      >
        {icon.icon}
      </div>
    </div>
  );
};
SkillCard.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

export default SkillCard;
