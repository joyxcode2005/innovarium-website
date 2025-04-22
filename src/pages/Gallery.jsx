import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { photos } from "../constants";
import Footer from "../components/Footer";

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-[#14171d] via-[#111f35] to-[#112951] min-h-screen text-white">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

      <Navbar />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <div className="font-extrabold text-white text-5xl [text-shadow:_0_0_30px_rgb(128,128,128)] mt-12">
            GALLERY
          </div>
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
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition duration-300"></div>
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
