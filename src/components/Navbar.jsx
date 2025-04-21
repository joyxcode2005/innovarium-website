import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-[50%] z-20 absolute top-2 left-1/4 mx-auto bg-transparent border-white border-2 rounded-[50px]  my-5 px-8 py-4">
      <ul className="flex justify-center gap-4 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.name} className="text-white text-lg font-semibold">
            <Link
              to={link.path}
              className="hover:text-gray-500 transition duration-300 p-1 uppercase"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
