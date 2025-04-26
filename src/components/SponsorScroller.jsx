import React from "react";

const sponsors = [
  // "/sponsors/sponsor1.png",
  // "/sponsors/sponsor1.png",
  // "/sponsors/sponsor1.png",
  // "/sponsors/sponsor1.png",
  // "/sponsors/sponsor1.png",
  // "/sponsors/sponsor1.png",
  // "/sponsors/sponsor1.png",
];

const SponsorScroller = () => {
  return (
    <div className="w-[85%] h-full mt-16 overflow-y-hidden ">
      <div className="w-full overflow-y-hidden">
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
