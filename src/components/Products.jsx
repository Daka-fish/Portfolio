import React from "react";
import { Works } from "./works";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="pt-16">
      <h1 className="text-center font-bold text-4xl m-8">Products</h1>
      <div className="products mx-5 py-4 px-5">
        <ul className="works flex gap-5 rounded-lg items-center justify-center">
          {Works.map((value, key) => {
            return (
              <Link to={value.link}>
                <li key={value.id}>
                  <div className="bg-white hover:bg-red-300 rounded-md shadow-xl w-80 px-5 py-7">
                    <img
                      src={value.image}
                      alt={value.alt}
                      className="h-56 w-56 mx-auto object-cover rounded-md"
                    />
                    <div className="">
                      <h3 className="text-center font-bold text-2xl my-2">
                        {value.title}
                      </h3>
                      <p className="mx-auto">{value.text}</p>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
