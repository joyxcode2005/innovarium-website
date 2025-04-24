import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import { events } from "../constants";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { IoMdDownload } from "react-icons/io";
import Footer from "../components/Footer";

const Event = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className="bg-gradient-to-b from-black via-[#14171d] via-[#111f35] to-[#112951] overflow-hidden ">
      <div className="relative">
        <Navbar />
      </div>
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
                // You can experiment with "edge" or "star" too
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
      <div className="z-10">
        <div className="flex flex-col gap-6 items-center justify-center py-20 m-12">
          <span className="font-extrabold text-white text-5xl [text-shadow:_0_0_30px_rgb(128,128,128)]">
            EVENTS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-8 place-items-center z-30">
            {events.map((event) => {
              return (
                <div
                  className="w-[180px] h-[400px] sm:h-[580px] sm:w-[300px] cursor-pointer hover:scale-105 transition-all hover:border-2 border-blue-500 rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 shadow-lg"
                  key={event.title}
                >
                  <div className="h-[50%]">
                    <img
                      src={event.image}
                      className="w-full h-full rounded-t-xl rounded-bl-xl object-cover "
                      alt=""
                    />
                  </div>
                  <div className="h-[40%] text-white bg-slate-800 rounded-ee-xl rounded-es-xl py-4 flex flex-col justify-between">
                    <div className="flex flex-col items-start justify-center px-4">
                      <p className="sm:text-[1rem] text-[12px] uppercase font-semibold">
                        {event.title}
                      </p>
                      <span className="text-white opacity-80 text-xs sm:text-sm">
                        ({event.eventname})
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 mt-2">
                      <div className="flex flex-col items-center justify-center gap-1 mt-2">
                        <button className="px-5 sm:px-12 py-1 text-xl bg-gradient-to-r from-green-600 to-blue-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-600 shadow-lg self-center mb-1">
                          <a href={event.link} target="_blank">
                            REGISTER
                          </a>
                        </button>
                        <button className="text-sm font-semibold  self-start mb-1 flex items-center justify-center gap-2 px-4 py-1 text-blue-600 rounded-2xl">
                          <a
                            href="/event-brochure.pdf"
                            download={true}
                            className="flex items-center justify-center gap-2 text-white font-semibold text-[10px] sm:text-sm hover:text-blue-600"
                          >
                            <IoMdDownload />
                            Download Event Brochure
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
