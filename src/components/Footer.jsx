import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

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
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/innovarium.scc/"
            target="_blank"
            className="text-xl cursor-pointer z-12 relative"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-xl cursor-pointer z-12 relative"
          >
            <FaLinkedinIn />
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
              <Link to={to} className="flex items-center hover:text-blue-400 relative">
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
          <li>
            1&3, Urquhart Square, Manicktala, Azad Hind Bag
            <br />
            Kolkata, West Bengal 700006
          </li>
          <li>+91 9999999999</li>
          <li>innovarium.scc@gmail.com</li>
        </ul>
      </section>
    </div>
  </footer>
);

export default Footer;
