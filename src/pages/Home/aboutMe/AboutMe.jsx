import SectionTitle from "./../../../components/SectionTitle";
import AboutMeContent from "./AboutMeContent";
const AboutMe = () => {
  return (
    <>
      <div className="pt-24">
        <SectionTitle label="About Me" />
        <div className="mt-12">
          <AboutMeContent />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
