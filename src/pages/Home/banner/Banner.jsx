import me from "../../../assets/sushanto.png";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <>
      <div className="md:flex justify-between gap-2 ">
        <div className="">
          {/* banner content */}
          <BannerContent />
        </div>
        <div className="flex justify-center items-center flex-1 ">
          <div className="relative bg-white/30 sm:w-80 sm:h-80 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-full border-4 -bottom-1 border-accent"></div>
            <img
              className="rounded-full w-72 h-72 sm:w-80 object-center sm:h-80 object-cover  "
              src={me}
              alt="Sushanto's photo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
