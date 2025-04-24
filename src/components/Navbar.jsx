import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if clicking outside both the menu AND the button
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="w-[50%] z-20 absolute top-2 left-1/4 mx-auto bg-transparent border-white border-2 rounded-[50px] my-5 px-8 py-4 hidden md:block">
        <ul className="flex justify-center gap-4 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name} className="text-white text-lg font-semibold">
              <Link
                to={link.path}
                className="hover:text-blue-500 transition duration-300 p-1 uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Button with its own ref */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-50 text-white p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile menu with its own ref */}
        {isOpen && (
          <nav
            ref={menuRef}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-white text-xl font-semibold"
                >
                  <Link
                    to={link.path}
                    className="hover:text-blue-500 transition duration-300 p-1 uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
