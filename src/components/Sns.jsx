import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Sns = () => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold py-6">SNS</h2>
      <ul className="flex justify-center items-center gap-10">
        <li className="p-5 rounded-lg shadow-lg hover:bg-green-300 duration-300">
          <a href="#">
            <FaXTwitter className="w-16 h-16" />
          </a>
        </li>
        <li className="p-5 rounded-lg shadow-lg hover:bg-green-300 duration-300">
          <a href="#">
            <FaGithubSquare className="w-16 h-16" />
          </a>
        </li>
        <li className="p-5 rounded-lg shadow-lg hover:bg-green-300 duration-300">
          <a href="#">
            <FaYoutube className="w-16 h-16" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sns;
