import { MemberCard } from "./MemberCard";

export const TeamSection = ({ title, members }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">
      <span className="relative">
        {title}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00C37F]"></span>
      </span>
    </h2>
    <div className="flex items-center justify-center flex-wrap gap-8">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  </div>
);
