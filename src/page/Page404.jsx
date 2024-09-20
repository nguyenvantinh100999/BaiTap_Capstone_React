import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      Page404
      <NavLink to="./" className="btn btn-dark">
        Back to Home
      </NavLink>
    </div>
  );
};

export default Page404;
