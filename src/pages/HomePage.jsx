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
      <div className="absolute top-0 left-0 right-0">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen py-5 text-center">
        <div className="text-lg md:text-xl text-white mt-20">
          <span className="text-white flex flex-col items-center justify-center -gap-4">
            <span className="college-font flex items-center justify-center gap-2">
              <img
                src="https://www.scottishchurch.ac.in/images/logo.png"
                className="w-8"
                alt="college logo"
              />
              Scottish Church College
            </span>
            <span className="text-xs sm:text-xl font-mono">
              Department of Computer Science
            </span>
          </span>
        </div>
      <h1 className="hollywood-font text-5xl lg:text-9xl text-white tracking-wider mt-12 sm:mt-8 [text-shadow:_0_0_30px_rgb(181,181,181)] flex flex-col items-center justify-center gap-2">
          INNOVARIUM
        </h1>

        {/* Event date */}
        <div className="text-lg md:text-3xl font-semibold calsans-font text-white mb-12 mt-8 sm:mt-4">
          <span className="text-[#00C37F] ">19th and 20th May</span> , 2025
        </div>
        {/* Countdown timer */}
        <CountdownTimer />
        {/* Call to action button */}
        <a href="/event_brochure.pdf" download={true}>
          <button className="mt-12 sm:mt-8 px-8 py-3 text-xl bg-gradient-to-r from-gray-800 to-[#00C37F] text-white font-bold rounded-full hover:from-[#00C37F] hover:to-blue-600 transform hover:scale-105 transition duration-300 shadow-lg">
            Download Brochure
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
