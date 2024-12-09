import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black fixed w-screen z-10 h-16">
      <nav className="flex px-8 py-4 text-white">
        <h3 className="text-xl font-bold mr-auto">ポートフォリオ</h3>
        <ul className="flex justify-center items-center gap-6 mr-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
