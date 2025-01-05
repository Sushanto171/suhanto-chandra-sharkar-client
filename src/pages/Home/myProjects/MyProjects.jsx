import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <>
      <div className="pt-24">
        <SectionTitle label="My Projects" />
        <div className="grid md:grid-cols-2 mt-16 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyProjects;
