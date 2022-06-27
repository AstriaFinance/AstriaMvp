import React from "react";
import logo from "../static/astria2.jpg";
const Nav = () => {
  return (
    <nav className="bg-black flex justify-between ">
      <img src={logo} alt="" className="h-32 mt-5 mx-10" />
      <div>
        <div className="text-white my-20 mx-5">Astria Finance Mvp</div>
        <div className="bg-white h-10 w-72 rounded my-4 mr-5 sm:w-full"></div>
      </div>
    </nav>
  );
};

export default Nav;
