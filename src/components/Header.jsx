import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-screen z-10 h-16 bg-white">
      <nav className="flex px-8 py-4">
        <Link to={"/"} className="text-2xl font-bold mr-auto">
          <h1>H!daka</h1>
        </Link>
        <ul className="flex justify-center items-center mr-4 gap-10">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
