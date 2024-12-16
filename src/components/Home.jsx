import React from "react";
import Sns from "./Sns";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16 pb-14">
      <div className="main-image mb-8">
        <img
          src="src\images\Portfolio.png"
          alt="main-image"
          className="mx-auto h-96"
        />
      </div>

      <section className="main mb-10">
        <h2 className="text-4xl font-bold py-2 text-center">About</h2>
        <div className="text-center">
          <p>
            Javaを用いたMinecraftプラグイン、ReactとTailwincssを使ったWeb開発を行っています。
          </p>
        </div>
      </section>

      <section className="Works text-center mb-10">
        <h2 className="text-4xl font-bold py-2">Works</h2>
        <div className="shadow-lg rounded-lg w-80 mx-auto mt-4 mb-8">
          <a href="#" className="hover:opacity-80 duration-300">
            <img
              src="src\images\ito.png"
              alt=""
              className="object-cover mx-auto rounded-md"
            />
          </a>
        </div>
        <Link
          to={"/products"}
          className="my-5 py-2 px-7 rounded-lg font-bold text-lg duration-300 hover:bg-green-300 border-2 border-black"
        >
          View more
        </Link>
      </section>
      <Sns />
    </div>
  );
};

export default Home;
