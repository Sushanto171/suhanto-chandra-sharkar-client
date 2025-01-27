import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "../pages/shared/Container";

import { MdOutlineArrowCircleUp } from "react-icons/md";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
const MainLayout = () => {
  const [top, setTop] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    if (top) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setTop(false);
      }, 1000);
    }
  }, [top]);

  useEffect(() => {
    const isScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", isScroll);
    return () => window.removeEventListener("scroll", isScroll);
  }, []);
  return (
    <>
      <span
        className={`${
          scroll <= 200 ? "hidden" : ""
        } z-20 fixed bottom-5 right-4`}
      >
        <button
          onClick={() => setTop(true)}
          className="btn rounded-full btn-sm p-0 hover:bg-accent text-3xl hover:scale-110 duration-200 "
        >
          <MdOutlineArrowCircleUp />
        </button>
      </span>
      {/* navbar */}
      <div id="home">
        <Navbar />

        <Container>
          {/* dynamic route */}
          <div className="min-h-[calc(100vh-131px)] pb-12">
            <Outlet />
          </div>
        </Container>
      </div>

      {/* footer */}
      <>
        <Footer />
      </>
    </>
  );
};

export default MainLayout;
