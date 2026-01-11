import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovarium 2.0 | Coming Soon</title>
      </Head>

      {/* Main Container */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#130315] text-white font-sans relative overflow-hidden p-5">
        {/* --- ANIMATED BACKGROUND LAYERS --- */}

        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b0d40_0%,#0f0212_100%)] z-0"></div>

        {/* Moving Blobs for "More Gradient" feel */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-700/30 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-fuchsia-800/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-violet-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

        {/* Grid Pattern Overlay (Moving slowly) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 animate-pulse-slow"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* --- CONTENT --- */}
        <div className="z-10 flex flex-col items-center text-center space-y-6">
          {/* College Name - Fade In Down */}
          <p className="uppercase tracking-widest text-xs md:text-sm opacity-70 font-semibold animate-fade-in-down">
            Scottish Church College Presents
          </p>

          {/* Coming Soon with Lines - Fade In */}
          <div
            className="flex items-center gap-6 animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="h-px w-12 md:w-24 bg-linear-to-r from-transparent to-white"></div>
            <h2 className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase text-purple-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Coming Soon
            </h2>
            <div className="h-px w-12 md:w-24 bg-linear-to-l from-transparent to-white"></div>
          </div>

          {/* Title - Scale Up */}
          <h1
            className="text-4xl md:text-7xl font-extrabold tracking-widest uppercase drop-shadow-2xl animate-scale-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Innovarium 2.0
          </h1>

          {/* Year - Gradient & Glow */}
          <div
            className="relative animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <h1 className="text-8xl md:text-[10rem] font-black bg-linear-to-b from-white via-purple-200 to-gray-600 bg-clip-text text-transparent leading-none drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              2026
            </h1>
          </div>

          {/* Instagram Link Section - Fade In Up */}
          <div
            className="mt-12 animate-fade-in-up opacity-0"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <p className="text-sm md:text-base font-light tracking-wide opacity-90 mb-2">
              Stay tuned for updates
            </p>
            <a
              href="https://www.instagram.com/innovarium.scc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 justify-center px-6 py-2 border border-white/20 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400"
            >
              <span className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold tracking-wider group-hover:brightness-125">
                Check our Insta
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-pink-400 group-hover:text-pink-300 transition-colors"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.486-.276a2.478 2.478 0 0 1-.919-.598 2.48 2.48 0 0 1-.599-.92c-.11-.281-.24-.704-.275-1.485-.038-.843-.047-1.096-.047-3.232 0-2.136.009-2.388.047-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.919-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
