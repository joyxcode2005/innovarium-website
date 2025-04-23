import React from "react";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const arrow = (
  <svg
    className="w-4 h-4 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Footer = () => (
  <footer className="bg-gradient-to-b from-black to-blue-950 text-white py-16">
    <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {/* -------- SOCIAL MEDIA -------- */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-blue-400">Follow Us</h3>
        <div className="flex space-x-4 text-gray-300 z-100">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="text-xl  cursor-pointer z-12 relative"
          >
            <img src="/Facebook.png" alt="facebook logo" className="w-8" />
          </a>
          <a
            href="https://www.instagram.com/innovarium.scc/"
            target="_blank"
            className="text-xl cursor-pointer z-12 relative"
          >
            <img src="insta.png" alt="instagram" className="w-8" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-xl cursor-pointer z-12 relative"
          >
            <img src="linkedin.ico" alt="LinkedIn icon" className="w-8" />
          </a>
        </div>
      </section>

      {/* -------- QUICK LINKS -------- */}
      <section>
        <h3 className="text-xl font-semibold mb-6 border-b border-blue-500 pb-2">
          Quick Links
        </h3>
        <ul className="space-y-3 text-gray-300">
          {[
            ["Home", "/"],
            ["Events", "/events"],
            ["Sponsors", "/sponsors"],
            ["Gallery", "/gallery"],
            ["Contact Us", "/contact"],
          ].map(([label, to]) => (
            <li key={to}>
              <Link
                to={to}
                className="flex items-center hover:text-blue-400 relative"
              >
                {arrow}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* -------- CONTACT INFO -------- */}
      <section>
        <h3 className="text-xl font-semibold mb-6 border-b border-blue-500 pb-2">
          Contact Info
        </h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center gap-2">
            <IoLocation className="w-6 h-6" />
            <div>
              1&3, Urquhart Square,Manicktala,Azad Hind Bag, Kolkata, West
              Bengal 700006
            </div>
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <FaPhoneAlt />
            +91 9999999999
          </li>
          <li className="flex items-center gap-2">
            <MdEmail />
            innovarium.scc@gmail.com
          </li>
        </ul>
      </section>
    </div>
  </footer>
);

export default Footer;
