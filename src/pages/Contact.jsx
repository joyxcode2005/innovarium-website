import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import { TeamSection } from "../components/TeamSection";
import { teamMembers } from "../constants";
import Footer from "../components/Footer";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

const Contact = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <div className="bg-gradient-to-b from-black via-[#14171d] via-[#111f35] to-[#112951]  min-h-screen text-white">
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
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="font-extrabold text-white text-5xl [text-shadow:_0_0_30px_rgb(128,128,128)] mt-16 z-10">
            CONTACTS
          </div>
        </div>

        <TeamSection title="Event Heads" members={teamMembers.heads} />
        <TeamSection title="Team Leads" members={teamMembers.teamLeads} />
        <TeamSection title="Volunteers" members={teamMembers.volunteers} />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
