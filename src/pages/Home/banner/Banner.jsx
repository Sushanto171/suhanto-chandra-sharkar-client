import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="py-10">
          {/* banner content */}
          <BannerContent />
        </div>
        <div className="border"></div>
      </div>
    </>
  );
};

export default Banner;
