import React from "react";
import logo from "../static/astria2.jpg";
const Nav = () => {
  return (
    <nav className="bg-black flex justify-between ">
      <img src={logo} alt="" className="h-32 mt-5 mx-10" />
      <div className="text-white my-20 mx-5">Astria Finance Mvp</div>
      <button className="bg-white">d</button>
    </nav>
  );
};

export default Nav;
