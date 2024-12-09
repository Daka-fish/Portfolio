import React from "react";

const Header = () => {
  return (
    <div className="bg-black">
      <nav className="flex px-8 py-4 text-white">
        <h3 className="text-xl font-bold mr-auto">ポートフォリオ</h3>
        <ul className="flex justify-center items-center gap-6 mr-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
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
