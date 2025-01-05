import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, description, client_technologies, id, image, live_link } =
    project || {};

  return (
    <div className="relative card bg-hover shadow-accent overflow-hidden bg-opacity-30 border-accent border border-opacity-30 max-w-sm md:max-w-full mx-auto shadow-sm  ease-in-out transition-all duration-300  group">
      {/* Hover effect */}
      <div className="hidden absolute inset-0 sm:flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all duration-300 rounded">
        <div className="flex justify-center items-center space-x-4">
          <Link to={`project/${id}`}>
            <button className="btn btn-outline rounded-full text-accent hover:bg-hover hover:text-accent hover:border-accent transition-all duration-300">
              View Details
            </button>
          </Link>
          <a href={live_link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline rounded-full text-accent hover:bg-hover hover:text-accent hover:border-accent transition-all duration-300">
              Live Demo
            </button>
          </a>
        </div>
      </div>

      {/* Image */}
      <figure>
        <img src={image} alt={name} />
      </figure>

      {/* Card Body */}
      <div className="card-body space-y-4 pt-2">
        <h2 className="card-title text-accent text-3xl">{name}</h2>
        <p className="text-primary">{description.slice(0, 100)}...</p>

        {/* Technologies */}
        <div className="card-actions justify-center">
          {client_technologies.map((tech, i) => (
            <div
              key={i}
              className="badge border-accent bg-hover border-opacity-30 badge-outline"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* View Details Button */}
        <div className="text-center sm:hidden">
          <Link to={`project/${id}`}>
            <button className="btn btn-outline rounded-full text-accent hover:bg-hover hover:text-accent hover:border-accent transition-all duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
