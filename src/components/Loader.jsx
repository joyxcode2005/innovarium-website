import { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [scene, setScene] = useState(1);
  const [frames, setFrames] = useState(0);

  const movieTerms = [
    "RENDERING SCENE",
    "PROCESSING FRAMES",
    "ENHANCING RESOLUTION",
    "APPLYING SPECIAL EFFECTS",
    "ADJUSTING COLOR GRADE",
    "SYNCING AUDIO",
    "FINALIZING CUT",
  ];

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = Math.max(0.65, (100 - prevProgress) / 10);
        return Math.min(99, prevProgress + increment);
      });

      setFrames((prev) => prev + Math.floor(Math.random() * 24));

      if (progress > 0 && progress % 12 === 0) {
        setScene((prev) => (prev % movieTerms.length) + 1);
      }
    }, 100);

    return () => clearInterval(loadingInterval);
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-blue-400 font-mono">
      <div className="w-full max-w-xl">
        {/* Title with Hollywood style */}
        <div className="mb-10 text-center">
          <h1 className="text-6xl mb-1 tracking-widest">DIRECTOR'S CUT</h1>
          <div className="flex items-center justify-center mb-2">
            <div className="border-t-2 border-blue-400 w-12"></div>
            <span className="mx-3 text-lg">LOADING PREVIEW</span>
            <div className="border-t-2 border-blue-400 w-12"></div>
          </div>
          <p className="text-sm opacity-70">
            TAKE {scene} • FRAME {frames}
          </p>
        </div>

        {/* Film strip style progress bar */}
        <div className="mb-4 relative">
          <div className="absolute -left-2 -right-2 top-0 h-4 flex justify-between overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-black border-2 border-blue-400"
              ></div>
            ))}
          </div>

          <div className="absolute -left-2 -right-2 bottom-0 h-4 flex justify-between overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-black border-2 border-blue-400"
              ></div>
            ))}
          </div>

          <div className="relative h-12 border-2 border-blue-400 my-4 overflow-hidden">
            {/* Hollywood clapperboard pattern */}
            <div className="absolute inset-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full bg-blue-400 opacity-10"
                  style={{
                    left: `${i * 10}%`,
                    width: "5%",
                  }}
                />
              ))}
            </div>

            <div
              className="absolute top-0 left-0 h-full bg-blue-400 bg-opacity-30"
              style={{ width: `${progress}%` }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="z-10 text-lg font-bold tracking-widest">
                {movieTerms[scene - 1]} {Math.floor(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Film countdown */}
        <div className="flex justify-center mt-6">
          <div className="w-24 h-24 border-4 border-blue-400 rounded-full flex items-center justify-center text-4xl font-bold relative">
            <div className="absolute top-0 h-8 w-4 bg-black -mt-2"></div>
            <div className="absolute bottom-0 h-8 w-4 bg-black -mb-2"></div>
            {progress < 33 ? "3" : progress < 66 ? "2" : "1"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
