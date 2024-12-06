import React from "react";
import { routeText } from "../routes/RouteText";
import { Link } from "react-router";
const navRoutes = [{ label: "Home", url: routeText.HOME }];
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 transition-all duration-300">
      <div className="container max-auto px-4 flex justify-between  item-center">
        <div className="flex item-center">
          <h1 className="text-xl font-bold">Car Brands</h1>
        </div>
        <div className="">
          <ul>
            {navRoutes.map((itr) => (
              <Link to={itr.url} key={itr.url}>
                <span>{itr.label}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
