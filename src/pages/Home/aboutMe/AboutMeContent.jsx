import Highlights from "./Highlights";
const AboutMeContent = () => {
  return (
    <div className="text-secondary">
      {/* Content */}
      <p className=" sm:text-lg md:text-xl leading-relaxed mb-4">
        Hello! I’m
        <span className="font-bold text-accent">
          {" "}
          Sushanto Chandra Sharkar{" "}
        </span>
        from{" "}
        <span className="font-medium text-primary opacity-80">
          Dhaka, Bangladesh
        </span>
        . My academic background is in{" "}
        <span className="font-medium text-primary opacity-80">
          BSc in Botany
        </span>
        , but along the way, I discovered a passion for
        <span className="font-medium text-primary opacity-80"> coding</span> and
        <span className="font-medium text-primary opacity-80">
          {" "}
          web development
        </span>
        .
      </p>
      <p className="sm:text-lg md:text-xl leading-relaxed mb-4">
        What started as curiosity soon turned into a deep interest in creating
        <span className="font-medium text-primary opacity-80">
          {" "}
          intuitive{" "}
        </span>{" "}
        and{" "}
        <span className="font-medium text-primary opacity-80">
          dynamic user experiences
        </span>
        . I enjoy
        <span className="font-medium text-primary opacity-80">
          {" "}
          learning to code
        </span>
        , exploring new technologies, and finding innovative ways to implement
        them creatively in real-world projects. Each line of code I write feels
        like building a bridge between{" "}
        <span className="italic">imagination and reality</span>.
      </p>
      <p className="sm:text-lg md:text-xl leading-relaxed mb-4">
        I thrive on solving
        <span className="font-medium text-primary opacity-80">
          {" "}
          complex problems{" "}
        </span>{" "}
        through clean and efficient code, focusing on building
        <span className="font-medium text-primary opacity-80">
          {" "}
          responsive
        </span>{" "}
        and
        <span className="font-medium text-primary opacity-80">
          {" "}
          visually appealing web applications
        </span>
        . My journey in development is driven by a love for
        <span className="font-medium text-primary opacity-80">
          {" "}
          continuous learning{" "}
        </span>{" "}
        and staying updated with the latest technologies.
      </p>
      <p className="sm:text-lg md:text-xl leading-relaxed mb-6">
        When I’m not coding, you’ll find me experimenting with new frameworks,
        diving into tech blogs, or refining my skills to deliver even better
        solutions.
      </p>
      {/* highlights */}
      <Highlights />
      {/* Quote */}
      <div className="text-left text-accent text-xl italic ">
        &ldquo;Every pixel matters, every interaction counts.&ldquo;
      </div>
      {/* Call-to-Action */}
      <div className="text-left mt-8">
        <p>
          If you&lsquo;re looking to collaborate on exciting projects or just
          want to chat tech, feel free to Let’s{" "}
          <a href="#contact" className="text-accent">
            Connect!
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMeContent;
