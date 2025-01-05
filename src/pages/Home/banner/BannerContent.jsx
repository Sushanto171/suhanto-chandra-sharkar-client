import { BsDashLg } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import Typewriter from "typewriter-effect";
import DownloadCV from "../../../components/DownloadCV";
import { scrollToView } from "../../../utilis/utilis";

const BannerContent = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center md:text-left md:items-start px-4 pb-6 h-fit sm:py-12 bg-gradient-to-r  min-h-[70vh]">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight text-primary">
        Hello, I’m <span className="text-accent">Sushanto</span>
      </h1>

      {/* Subtitle */}
      <p className="flex items-center gap-2 mt-4 text-lg text-secondary opacity-80">
        <BsDashLg className="text-accent text-xl hidden sm:block" />
        <span className="text-sm sm:text-base">
          A Developer Committed to Vision and Excellence
        </span>
      </p>

      {/* Dynamic Typewriter Effect */}
      <div className="relative mt-4 text-lg text-gray-700 font-medium h-10">
        <span className="text-accent">I am </span>
        <span className="text-accent font-semibold inline-block">
          <Typewriter
            options={{
              strings: [
                "An Aspiring Developer",
                "A Passionate Learner",
                "A Creative Thinker",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </span>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => scrollToView("email")}
          className="btn btn-outline transition-all duration-300 flex justify-center items-center hover:bg-accent text-accent hover:border-hover"
        >
          Send Email <SiMinutemailer className="" size={20} />
        </button>
        <span>
          <DownloadCV size={"md"} px={"2"} bg={"accent"} />
        </span>
      </div>
    </section>
  );
};
export default BannerContent;
