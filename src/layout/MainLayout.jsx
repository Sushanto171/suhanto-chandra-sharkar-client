import { Outlet } from "react-router-dom";
import Container from "../pages/shared/Container";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
const MainLayout = () => {
  return (
    <Container>
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
