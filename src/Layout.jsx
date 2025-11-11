import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="container">
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
