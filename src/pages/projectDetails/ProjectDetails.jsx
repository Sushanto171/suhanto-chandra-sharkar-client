import { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  useEffect(() => {
    const pro = projects.filter((project) => project.id == id);
    setProject(pro[0]);
    setLoading(false);
  }, [id, projects]);
  const { name, title, description, client_repo, server_repo, live_link } =
    project[0] || [];
  if (loading) return <h1>Loading</h1>;
  return (
    <div className="container mx-auto p-6">
      {/* Project Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>

      {/* Project Image */}
      <div className="flex justify-center my-8">
        <img
          referrerPolicy="no-referrer"
          src={project?.image}
          alt={name}
          className="rounded-lg shadow-lg max-w-md w-full"
        />
      </div>

      {/* Key Features */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6">
          {project?.key_features.map((feature, index) => (
            <li key={index} className="text-lg text-gray-800 mb-2">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            {project?.client_technologies.join(", ")}
          </span>
          <span className="bg-green-500 text-white py-2 px-4 rounded-lg">
            {project?.backend_technologies?.join(", ")}
          </span>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <a
          href={live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          <FaLink className="mr-2" /> Live Demo
        </a>
        <a
          href={client_repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          <FaGithub className="mr-2" /> Client Repo
        </a>
        <a
          href={server_repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          <FaGithub className="mr-2" /> Server Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
