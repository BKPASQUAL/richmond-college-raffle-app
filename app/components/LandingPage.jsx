"use client";

import { useState, useEffect } from "react";
export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-32 sm:mt-32 md:mt-40 px-4 sm:px-6 lg:px-8">
      <h1 className="text-[20px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#29245C] text-center leading-tight">
        Richmond College 150th Anniversary Raffle Draw
      </h1>
      <h2 className="text-[16px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#5C2434] mt-3 sm:mt-4 lg:mt-5 text-center">
        Win Big. Support Bigger.
      </h2>
      <p className="text-sm sm:text-base lg:text-lg font-bold text-[#29245C] tracking-[2px] sm:tracking-[3px] mt-20 sm:mt-20 lg:mt-24 text-center">
        DRAW BEGINS IN
      </p>
      <div className="grid grid-flow-col gap-2 sm:gap-3 lg:gap-5 text-center auto-cols-max mt-3 sm:mt-4">
        <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-white/20 backdrop-blur-sm text-[#29245C] rounded">
          <div className="h-3/4 flex flex-col justify-center">
            <span className="countdown font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[700]">
              <span
                style={{ "--value": timeLeft.days }}
                aria-live="polite"
                aria-label={`${timeLeft.days} days`}
              >
                {timeLeft.days}
              </span>
            </span>
          </div>
          <p className="text-[8px] sm:text-[9px] lg:text-[10px] h-1/4">DAYS</p>
        </div>
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl lg:text-3xl">:</span>
        </div>
        <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-white/20 backdrop-blur-sm text-[#29245C] rounded">
          <div className="h-3/4 flex flex-col justify-center">
            <span className="countdown font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span
                style={{ "--value": timeLeft.hours }}
                aria-live="polite"
                aria-label={`${timeLeft.hours} hours`}
              >
                {timeLeft.hours}
              </span>
            </span>
          </div>
          <p className="text-[8px] sm:text-[9px] lg:text-[10px] h-1/4">HOURS</p>
        </div>
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl lg:text-3xl">:</span>
        </div>
        <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-white/20 backdrop-blur-sm text-[#29245C] rounded">
          <div className="h-3/4 flex flex-col justify-center">
            <span className="countdown font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span
                style={{ "--value": timeLeft.minutes }}
                aria-live="polite"
                aria-label={`${timeLeft.minutes} minutes`}
              >
                {timeLeft.minutes}
              </span>
            </span>
          </div>
          <p className="text-[8px] sm:text-[9px] lg:text-[10px] h-1/4">
            MINUTES
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl lg:text-3xl">:</span>
        </div>
        <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] bg-white/20 backdrop-blur-sm text-[#29245C] rounded">
          <div className="h-3/4 flex flex-col justify-center">
            <span className="countdown font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span
                style={{ "--value": timeLeft.seconds }}
                aria-live="polite"
                aria-label={`${timeLeft.seconds} seconds`}
              >
                {timeLeft.seconds}
              </span>
            </span>
          </div>
          <p className="text-[8px] sm:text-[9px] lg:text-[10px] h-1/4">
            SECONDS
          </p>
        </div>
      </div>
      <button className="bg-white backdrop-blur w-28 h-7 sm:w-32 sm:h-8 text-black font-semibold rounded mt-12 sm:mt-12 lg:mt-14 text-sm sm:text-base">
        Buy Ticket
      </button>
    </div>
  );
}
