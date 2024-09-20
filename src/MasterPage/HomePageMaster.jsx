import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../page/Footer";

const HomePageMaster = () => {
  return (
    <div>
      <>
        <HeaderMenu />
        <div className="content" style={{ minHeight: 650 }}>
          <Outlet />
        </div>
        <footer className="bg-dark text-white text-center p-3">Footer</footer>
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default HomePageMaster;
