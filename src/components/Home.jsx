import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="pt-16 h-screen w-screen">
      <section className="myself m-2 px-auto flex justify-center items-center">
        <div className="info_div px-4">
          <div>
            <h3 className="mb-2 text-lg">エンジニア</h3>
            <h1 className="text-6xl font-bold mb-5">H!Daka</h1>
            <h4>Java/React/Tailwind css</h4>
          </div>
        </div>
        <div className="img_div w-1/3 h-1/3">
          <img src="src\images\Kyudo_back.png" alt="私の画像" />
        </div>
      </section>
      <section className="sns text-center">
        <h1 className="text-4xl font-bold py-6">SNS</h1>
        <ul className="flex justify-center items-center gap-10">
          <li className="p-5 rounded-lg shadow-lg">
            <a href="#">
              <FaXTwitter className="w-16 h-16" />
            </a>
          </li>
          <li className="p-5 rounded-lg shadow-lg">
            <a href="#">
              <FaGithubSquare className="w-16 h-16" />
            </a>
          </li>
          <li className="p-5 rounded-lg shadow-lg">
            <a href="#">
              <FaYoutube className="w-16 h-16" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
