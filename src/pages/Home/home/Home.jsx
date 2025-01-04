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
      <section id="about-me" className="">
        <AboutMe />
      </section>

      {/* my skills */}
      <section id="my-skills" className="">
        <MySkills />
      </section>

      {/* my project */}
      <section id="my-projects" className="">
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
