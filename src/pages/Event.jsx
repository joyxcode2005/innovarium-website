import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import { events } from "../constants";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { IoMdDownload } from "react-icons/io";

const Event = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="bg-black overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent", // Use transparent to show gradient background
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              glow: {
                enable: true,
                mode: "soft",
              },

              move: {
                direction: "outside",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 12 },
              },
            },
            detectRetina: true,
          }}
        />
      </div> */}
      <div className="relative">
        <Navbar />
      </div>
      <div>
        <div className="flex flex-col gap-6 items-center justify-center flex-wrap py-20 m-12">
          <span className="font-extrabold text-white text-5xl [text-shadow:_0_0_30px_rgb(128,128,128)]">
            EVENTS
          </span>
          <div className="flex flex-wrap gap-8 items-center justify-center ">
            {events.map((event) => {
              return (
                <div
                  className="h-[580px] w-[300px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                  key={event.title}
                >
                  <div className="h-[50%]">
                    <img
                      src={event.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="h-[40%] text-white bg-slate-800 rounded-ee-xl rounded-es-xl py-4 flex flex-col justify-between">
                    <div className="flex flex-col items-start justify-center px-4">
                      <p className="text-[1rem] uppercase font-semibold">
                        {event.title}
                      </p>
                      <span className="text-white opacity-80">
                        ({event.eventname})
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 mt-2">
                      <div className="flex flex-col items-center justify-center gap-1 mt-2">
                        <button className="px-12 py-1 text-xl bg-gradient-to-r from-green-600 to-blue-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-600 shadow-lg self-center mb-1">
                          REGISTER
                        </button>
                        <button className="text-sm font-semibold  self-start mb-1 flex items-center justify-center gap-2 px-4 py-1 text-blue-600 rounded-2xl">
                          <a href="/event-brochure.pdf" download={true} className="flex items-center justify-center gap-2 text-white font-semibold text-sm hover:text-blue-600"> 
                            <IoMdDownload />
                            Download Brochure
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
    </div>
  );
};

export default Event;
