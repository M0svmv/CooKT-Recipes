import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function PageLayout() {
  return (
    <>
      <NavBar />
      <div className="marginOutlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default PageLayout;
