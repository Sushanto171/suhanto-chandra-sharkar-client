import AboutMe from "../aboutMe/AboutMe";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import MyProjects from "./../myProjects/MyProjects";
import MySkills from "./../mySkills/MySkills";

const Home = () => {
  return (
    <>
      {/* banner */}
      <section id="/">
        <Banner />
      </section>

      {/* about me */}
      <section id="about-me" className="h-[1200px]">
        <AboutMe />
      </section>

      {/* my skills */}
      <section id="my-skills" className="h-[1200px]">
        <MySkills />
      </section>

      {/* my project */}
      <section id="my-projects" className="h-[1200px]">
        <MyProjects />
      </section>

      {/* contact  */}
      <section id="contact" className="h-[1200px]">
        <Contact />
      </section>
    </>
  );
};

export default Home;
