import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import { photos } from "../constants";
import Footer from "../components/Footer";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-[#14171d] via-[#111f35] to-[#112951] min-h-screen text-white">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-5">
          <div className="font-extrabold text-white text-5xl [text-shadow:_0_0_30px_rgb(128,128,128)] mt-12">
            GALLERY
          </div>
          <br />
          <span className="text-xl italic text-white">Relive the Unforgettable Highlights and Cherished Memories of Innovarioum 1.0 (2022)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openLightbox(photo)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-54 object-cover"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00C37F] rounded-xl transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="bg-black bg-opacity-70 p-6 rounded-b-lg"></div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
