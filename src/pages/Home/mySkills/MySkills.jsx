import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ProfessionalSkills from "./ProfessionalSkills";
import UseTool from "./UseTool";

const MySkills = () => {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="pt-12 sm:pt-24 space-y-12">
        <SectionTitle label="My Skills" />
        <ProfessionalSkills />
        <UseTool />
      </div>
    </>
  );
};

export default MySkills;
