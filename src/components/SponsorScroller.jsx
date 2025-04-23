import React from "react";

const sponsors = [
  "/sponsor.png",
  "/sponsor1.png",
  "/sponsor2.png",
  "/sponsor3.png",
  "/sponsor4.png",
  "/sponsor5.png",
  "/sponsor6.png",
];

const SponsorScroller = () => {
  return (
    <div className="w-[85%] py-8 mt-16 overflow-y-hidden">
      <div className="relative w-full overflow-y-hidden">
        <div className="flex space-x-12 animate-scroll-sponsors whitespace-nowrap">
          {sponsors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="h-9 w-auto object-contain"
            />
          ))}
          {/* Duplicate for infinite loop effect */}
          {sponsors.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src}
              alt={`Sponsor Duplicate ${index + 1}`}
              className="h-9 w-auto object-contain"
            />
          ))}
          {sponsors.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src}
              alt={`Sponsor Duplicate ${index + 1}`}
              className="h-9 w-auto object-contain"
            />
          ))}
          {sponsors.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src}
              alt={`Sponsor Duplicate ${index + 1}`}
              className="h-9 w-auto object-contain"
            />
          ))}
          {sponsors.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src}
              alt={`Sponsor Duplicate ${index + 1}`}
              className="h-9 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorScroller;
