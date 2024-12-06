import React from "react";
import { Link } from "react-router";

const Card = ({ brands }) => {
  console.log("brands", brands);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {brands.map((brand) => (
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" key={brand.id}>
            <Link
              to={`/brand/${brand.id}`}
              className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-40 object-contain"
              />
              <div className="p-4">
                <h3 className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {brand.name}
                </h3>
                <p className="text-sm pt-2">{brand.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
