import SectionTitle from "../../../components/SectionTitle";
import ProfessionalSkills from "./ProfessionalSkills";
import UseTool from "./UseTool";

const MySkills = () => {
  return (
    <>
      <div className="pt-24 space-y-8">
        <SectionTitle label="My Skills" />
        <ProfessionalSkills />
        <UseTool />
      </div>
    </>
  );
};

export default MySkills;
