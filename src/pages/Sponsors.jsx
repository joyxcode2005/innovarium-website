import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { socailMediaPartners } from "../constants";

const Sponsors = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className="relative bg-gradient-to-b from-black via-[#14171d] via-[#111f35] to-[#112951] min-h-screen text-white">
      <div className="absolute top-0 left-0 right-0">
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

      <div className="relative py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center mt-12">
          <div className="font-extrabold text-white text-5xl [text-shadow:_0_0_30px_rgb(128,128,128)] mt-12">
            SPONSORS
          </div>
        </h1>
      </div>

      {/* Title Sponsor - Spotlight */}
      <div className="py-2 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-70 cursor-pointer">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">
              <span className="inline-block px-4 py-1 bg-red-600 rounded-full mb-4">
                TITLE SPONSOR
              </span>
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-8"></div>
          </div>

          <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl border border-yellow-500 transform hover:scale-105 transition-transform duration-300">
            {/* Spotlight Effect */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>

            {/* Star on top */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center border-4 border-yellow-500">
                  <span className="text-2xl font-bold">LOGO</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                  Title Sponsor Name
                </h3>
                <p className="text-gray-300 mb-4 max-w-2xl">
                  Our leading sponsor who made this spectacular tech fest
                  possible. Their generous contribution has helped us bring the
                  Hollywood magic to our campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Food Partner */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto cursor-pointer">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              <span className="inline-block px-4 py-1 bg-orange-600 rounded-full mb-4">
                FOOD PARTNER
              </span>
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-8"></div>
          </div>

          <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-orange-500 hover:shadow-orange-500/20 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                <div className="w-40 h-40 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-orange-400">
                  <span className="text-xl font-bold">LOGO</span>
                </div>
              </div>
              <div className="flex-1 md:pl-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">
                  Food Partner Name
                </h3>
                <p className="text-gray-300 mb-4">
                  Serving up delicious meals and snacks throughout the event,
                  our food partner ensures you enjoy the tech fest with a full
                  stomach and a satisfied palate.
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-2 text-sm">
                  <span className="px-2 py-1 bg-gray-800 rounded">
                    Gourmet Menu
                  </span>
                  <span className="px-2 py-1 bg-gray-800 rounded">
                    Fast Service
                  </span>
                  <span className="px-2 py-1 bg-gray-800 rounded">
                    Special Offers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Partners */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50 relative z-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              <span className="inline-block px-4 py-1 bg-green-600 rounded-full mb-4">
                Social Media Partners
              </span>
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Can be repeated for each stall partner */}
            {socailMediaPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-gray-800 rounded-lg shadow-md p-6 border-t-2 border-green-500 hover:shadow-green-500/40 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={partner.image}
                      alt=""
                      className="w-32 h-32 border-4 border-green-500 rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl uppercase font-bold text-white mb-2">
                    {partner.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-lg text-gray-400">
                      Social Media Partner #{partner.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stall Partners */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              <span className="inline-block px-4 py-1 bg-purple-600 rounded-full mb-4">
                STALL PARTNERS
              </span>
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Can be repeated for each stall partner */}
            {[1, 2, 3].map((stall) => (
              <div
                key={stall}
                className="bg-gray-800 rounded-lg shadow-md p-6 border-t-2 border-purple-500 hover:shadow-purple-500/20 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="font-bold">LOGO</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Stall Partner {stall}
                  </h3>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-xs text-gray-400">
                      Booth #{stall}02
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Associate Partners */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              <span className="inline-block px-4 py-1 bg-blue-600 rounded-full mb-4">
                ASSOCIATE PARTNERS
              </span>
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8"></div>
          </div>

          {/* Platinum Associates */}
          <div className="mb-16">
            <h3 className="text-center text-2xl font-bold mb-8">
              <span className="inline-block relative">
                PLATINUM ASSOCIATES
                <div className="absolute w-full h-1 bg-gradient-to-r from-gray-500 via-gray-100 to-gray-500 bottom-0"></div>
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((platinum) => (
                <div
                  key={platinum}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 border border-gray-300 hover:border-white transition-colors relative"
                >
                  {/* Platinum Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-full h-full"
                    >
                      <circle cx="12" cy="12" r="12" fill="#e5e7eb" />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#374151"
                        fontSize="10"
                      >
                        P
                      </text>
                    </svg>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">LOGO</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Platinum Partner {platinum}
                    </h3>
                    <p className="text-gray-300 text-center text-sm">
                      Premium support for our tech fest.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Associates */}
          <div className="mb-16">
            <h3 className="text-center text-2xl font-bold mb-8">
              <span className="inline-block relative">
                GOLD ASSOCIATES
                <div className="absolute w-full h-1 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 bottom-0"></div>
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((gold) => (
                <div
                  key={gold}
                  className="bg-gray-800 rounded-lg shadow-md p-5 border border-yellow-700 hover:border-yellow-500 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-3">
                      <span className="font-bold text-sm">LOGO</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Gold Partner {gold}
                    </h3>
                    <p className="text-gray-300 text-center text-xs">
                      Valuable contributors to our event.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Associates */}
          <div>
            <h3 className="text-center text-2xl font-bold mb-8">
              <span className="inline-block relative">
                SILVER ASSOCIATES
                <div className="absolute w-full h-1 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 bottom-0"></div>
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((silver) => (
                <div
                  key={silver}
                  className="bg-gray-800 bg-opacity-70 rounded-lg shadow-sm p-4 border border-gray-600 hover:border-gray-400 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                      <span className="font-bold text-xs">LOGO</span>
                    </div>
                    <h3 className="text-md font-bold text-white mb-1">
                      Silver {silver}
                    </h3>
                    <p className="text-gray-300 text-center text-xs">
                      Supporting partners.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
