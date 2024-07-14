import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="w-full bg-black py-4">
        <div className="container flex justify-between items-center">
          <div className="w-28">
            <h4 className="text-white">
              <img
                className="h-10 w-15 rounded bg-white"
                src="src/assets/logo.webp"
              />
            </h4>
          </div>
          <div className="w-4/5 mr-10">
            <ul className="flex items-center gap-x-4 text-white justify-end">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/taskView">Task View</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
