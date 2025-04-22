export const MemberCard = ({ member }) => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
    <div className="p-6 flex flex-col items-center">
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-blue-400 mb-3">{member.role}</p>
      <p className="text-gray-300 text-center text-sm mb-1">{member.phone}</p>
      <p className="text-gray-400 text-center text-sm">{member.email}</p>
    </div>
  </div>
);
