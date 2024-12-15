import React from "react";
import { Works } from "./works";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="pt-16">
      <h1 className="text-center font-bold text-4xl m-8">Products</h1>
      <div className="products mx-5 py-4 px-5">
        <div className="works grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*gridを中央に揃えたい*/}
          {Works.map((value, key) => {
            return (
              <Link to={value.link}>
                <div key={key}>
                  <div className=" hover:bg-red-300 rounded-md shadow-xl px-3 py-5 justify-center items-center">
                    <img
                      src={value.image}
                      alt={value.alt}
                      className="h-56 w-56 mx-auto object-cover rounded-md"
                    />
                    <div className="">
                      <h3 className="text-center font-bold text-2xl my-2">
                        {value.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
