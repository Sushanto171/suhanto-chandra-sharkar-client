import { useEffect } from "react";
import SectionTitle from "./../../../components/SectionTitle";
import AboutMeContent from "./AboutMeContent";
const AboutMe = () => {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="pt-12 sm:pt-16">
        <SectionTitle label="About Me" />
        <div className="mt-6 sm:mt-12">
          <AboutMeContent />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
