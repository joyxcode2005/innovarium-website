import React from "react";
import Navbar from "../components/Navbar";
import { TeamSection } from "../components/TeamSection";
import { teamMembers } from "../constants";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="font-extrabold text-white text-5xl [text-shadow:_0_0_30px_rgb(128,128,128)] mt-16">
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
