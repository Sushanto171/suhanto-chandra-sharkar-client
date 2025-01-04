import AboutMe from "../aboutMe/AboutMe";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import MyProjects from "./../myProjects/MyProjects";
import MySkills from "./../mySkills/MySkills";

const Home = () => {
  return (
    <>
      {/* banner */}
      <section id="/" className="">
        <Banner />
      </section>

      {/* about me */}
      <section id="about" className="">
        <AboutMe />
      </section>

      {/* my skills */}
      <section id="skills" className="">
        <MySkills />
      </section>

      {/* my project */}
      <section id="projects" className="">
        <MyProjects />
      </section>

      {/* contact  */}
      <section id="contact" className="">
        <Contact />
      </section>
    </>
  );
};

export default Home;
