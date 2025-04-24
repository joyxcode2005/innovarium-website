import { useCallback, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { CountdownTimer } from "../components/Countdown";
import SponsorScroller from "../components/SponsorScroller";
import Footer from "../components/Footer";

const HomePage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#14171d] via-[#111f35] to-[#112951]">
      {/* Particles component */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                enable: false, // Disable linking for cleaner shooting stars
              },
              move: {
                enable: true,
                direction: "bottom-left",
                speed: 30, // fast speed to simulate shooting
                straight: true,
                outModes: {
                  default: "out",
                },
              },
              number: {
                value: 30,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              opacity: {
                value: 0.9,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              shape: {
                type: "star", // You can experiment with "edge" or "star" too
              },
              size: {
                value: { min: 2, max: 3 },
                animation: {
                  enable: true,
                  speed: 10,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              trail: {
                enable: true,
                length: 5,
                fillColor: "transparent",
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Navigation */}
      <div className="relative">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen py-10 text-center">
        <SponsorScroller />
        <div className="text-lg md:text-xl text-white mt-3">
          <span className="text-white">
            <span className="college-font flex items-center justify-center gap-2">
              <img
                src="https://www.scottishchurch.ac.in/images/logo.png"
                className="w-8"
                alt="college logo"
              />
              Scottish Church College
            </span>
            <span className="text-sm">Department of Computer Science</span>
          </span>
        </div>
        <h1 className="hollywood-font text-4xl md:text-6xl lg:text-8xl font-extrabold text-white  tracking-wider mt-2 [text-shadow:_0_0_30px_rgb(128,128,128)]">
          INNOVARIUM
        </h1>
        <div className="text-lg md:text-xl font-bold text-white mb-3">
          Presented by
          <span className="flex items-center justify-center text-white uppercase gap-2">
            <img className="w-5" src="" alt="sponsor" />
            Title Sponsor
          </span>
        </div>

        {/* Event date */}
        <div className="text-lg md:text-3xl font-bold text-white mb-3">
          <span className="text-blue-600">10th May</span>, 2025
        </div>
        {/* Countdown timer */}
        <CountdownTimer />
        {/* Call to action button */}
        <button className="mt-4 px-8 py-3 bg-gradient-to-r from-gray-800 to-blue-500 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition duration-300 shadow-lg">
          Download Brochure
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
