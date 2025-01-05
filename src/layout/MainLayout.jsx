import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "../pages/shared/Container";

import { MdOutlineArrowCircleUp } from "react-icons/md";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
const MainLayout = () => {
  const [top, setTop] = useState(false);
  useEffect(() => {
    if (top) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setTop(false);
      }, 1000);
    }
  }, [top]);
  return (
    <Container>
      <span className="fixed bottom-5 right-4">
        <button
          onClick={() => setTop(true)}
          className="btn rounded-full btn-sm p-0 hover:bg-accent text-3xl hover:scale-110 duration-200 "
        >
          <MdOutlineArrowCircleUp />
        </button>
      </span>
      <div id="home">
        {/* navbar */}
        <Navbar />

        {/* dynamic route */}
        <div className="min-h-[calc(100vh-131px)] mb-12">
          <Outlet />
        </div>

        {/* footer */}
        <Footer />
      </div>
    </Container>
  );
};

export default MainLayout;
