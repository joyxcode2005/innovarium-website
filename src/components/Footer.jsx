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
        <h3 className="text-2xl font-bold mb-6 text-white">Follow Us</h3>
        <div className="flex space-x-4 text-gray-300 z-100">
          <a
            href="https://m.facebook.com/profile.php?id=100092566091057&name=xhp_nt__fb__action__open_user"
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
            href=""
            target="_blank"
            className="text-xl cursor-pointer z-12 relative"
          >
            <img src="twitter.avif" alt="instagram" className="w-8 rounded-sm" />
          </a>

        </div>
      </section>

      {/* -------- QUICK LINKS -------- */}
      <section>
        <h3 className="text-xl font-semibold mb-6 border-b border-[#00C37F] pb-2">
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
                className="flex items-center hover:text-[#00C37F] relative"
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
        <h3 className="text-xl font-semibold mb-6 border-b border-[#00C37F] pb-2">
          Contact Info
        </h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center gap-2">
            <a
              href="https://www.google.com/maps/dir//Scottish+Church+College+Comp.+Sc+Dept,+3,+Urquhart+Square,+Manicktala,+Hedua,+Kolkata,+West+Bengal+700006/@22.5869415,88.3647069,17z/data=!4m18!1m8!3m7!1s0x3a027649c496b37f:0x406d4623bacc1643!2sScottish+Church+College+Comp.+Sc+Dept!8m2!3d22.5869415!4d88.369213!15sChdzY290dGlzaCBjaHVyY2ggY29sbGVnZZIBEWNocmlzdGlhbl9jb2xsZWdlqgE_EAEyHhABIhrigV2BDyW_lPazuDhzdxJFUYqEUGOIKGVwZDIbEAIiF3Njb3R0aXNoIGNodXJjaCBjb2xsZWdl4AEA!16s%2Fg%2F11f3s1z672!4m8!1m0!1m5!1m1!1s0x3a027649c496b37f:0x406d4623bacc1643!2m2!1d88.369231!2d22.586936!3e3?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
            >
              <IoLocation className="w-6 h-6" />
              <div>
                1&3, Urquhart Square,Manicktala,Azad Hind Bag, Kolkata, West
                Bengal 700006
              </div>
            </a>
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <FaPhoneAlt />
            +91 79809 77604
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
