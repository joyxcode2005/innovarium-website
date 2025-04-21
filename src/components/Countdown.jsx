import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const eventDate = new Date(2025, 7, 15, 18, 0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time remaining
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="border-2 border-white text-white rounded-lg p-3 md:p-4 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-bold text-white">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-gray-300 mt-2 uppercase">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};
