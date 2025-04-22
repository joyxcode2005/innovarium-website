import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import { events } from "../constants";
import { loadSlim } from "tsparticles-slim";
import { IoMdDownload } from "react-icons/io";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <div className="bg-black overflow-hidden">
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
                          <a href={event.link} target="_blank">
                            REGISTER
                          </a>
                        </button>
                        <button className="text-sm font-semibold  self-start mb-1 flex items-center justify-center gap-2 px-4 py-1 text-blue-600 rounded-2xl">
                          <a
                            href="/event-brochure.pdf"
                            download={true}
                            className="flex items-center justify-center gap-2 text-white font-semibold text-sm hover:text-blue-600"
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
