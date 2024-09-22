import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePageMaster = () => {
  return (
    <div>
      <>
        <Header />
        {/* <HeaderMenu /> */}
        <div className="content" style={{ minHeight: 650 }}>
          <Outlet />
        </div>
        <Footer />
      </>
    </div>
  );
};

export default HomePageMaster;
