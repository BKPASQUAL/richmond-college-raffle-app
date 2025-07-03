"use client";

import { useState, useEffect } from "react";
export default function LandingPage() {
 const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date: December 31, 2026 at 11:59 PM
      const targetDate = new Date('2026-12-31T23:59:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 sm:mt-28 md:mt-40 px-4 sm:px-6 lg:px-8">
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
            <p className="text-[8px] sm:text-[9px] lg:text-[10px] h-1/4">
              DAYS
            </p>
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
            <p className="text-[8px] sm:text-[9px] lg:text-[10px] h-1/4">
              HOURS
            </p>
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
      <div className="flex gap-2 sm:gap-6 lg:gap-8 justify-end sm:justify-end px-4 sm:px-6 lg:px-10 mt-6 sm:mt-8 lg:mt-10">
        <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 border-8 sm:border-10 border-[#0000009C] border-t-transparent rounded-full flex justify-center items-center mx-auto sm:mx-0">
          <div className="flex flex-col items-center">
            <div className="font-semibold text-sm sm:text-base lg:text-lg leading-[1.2]">
              Tickets
            </div>
            <div className="font-bold text-lg sm:text-xl lg:text-xl leading-[1.2]">
              150
            </div>
            <div className="font-semibold text-xs sm:text-sm lg:text-base text-center leading-[1.2]">
              Tickets Sold
            </div>
          </div>
        </div>
        <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 border-8 sm:border-10 border-[#0000009C] border-t-transparent rounded-full flex justify-center items-center mx-auto sm:mx-0">
          <div className="flex flex-col items-center">
            <div className="font-semibold text-sm sm:text-base lg:text-lg leading-[1.2]">
              LKR
            </div>
            <div className="font-bold text-lg sm:text-xl lg:text-xl leading-[1.2]">
              1,000,000
            </div>
            <div className="font-semibold text-xs sm:text-sm lg:text-base text-center leading-[1.2]">
              Funds Raised
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
