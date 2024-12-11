import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white fixed w-screen z-10 h-16">
      <nav className="flex px-8 py-4">
        <h1 className="text-xl font-bold mr-auto">ポートフォリオ</h1>
        <ul className="flex justify-center items-center gap-6 mr-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/#"}>News</Link>
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
