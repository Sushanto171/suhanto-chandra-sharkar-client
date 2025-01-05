import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  const { name, description, client_technologies, id, image } = project || {};

  return (
    <div className="card bg-base-100 max-w-sm md:max-w-full mx-auto shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{name}</h2>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-center">
          {client_technologies.map((tech, i) => (
            <div key={i} className="badge badge-outline">
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className=" p-10 pt-0">
        <Link to={`project/${id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
