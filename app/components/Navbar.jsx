"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    'Home',
    'Buy Ticket',
    'Prizes',
    'Leader-board',
    'FAQs',
    'Contact Us'
  ];

  const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  // Close X Icon Component
  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="h-16 flex justify-between items-center px-4 sm:px-6 lg:px-10 z-10  relative">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img
          src="Richmond_logo.png"
          alt="Richmond Logo"
          className="h-8 sm:h-10 lg:h-12 w-auto"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-4 xl:gap-6 justify-center flex-1">
        {navItems.map((item, index) => (
          <p
            key={index}
            className="text-[#29245C] font-semibold cursor-pointer relative group transition-colors duration-300 hover:text-[#1e1a4a] text-sm xl:text-base"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#29245C] transition-all duration-300 ease-out group-hover:w-full"></span>
          </p>
        ))}
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden lg:flex justify-end flex-shrink-0">
        <button className="bg-[#29245C] px-4 py-2 xl:px-6 xl:py-2 text-white rounded text-sm xl:text-base font-medium hover:bg-[#1e1a4a] transition-colors duration-300">
          Buy Ticket
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 text-[#29245C] hover:bg-gray-100 rounded-md transition-colors duration-200"
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-20">
          <div className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <p
                key={index}
                className="text-[#29245C] font-semibold cursor-pointer px-6 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </p>
            ))}
            <div className="px-6 py-4">
              <button 
                className="bg-[#29245C] w-full py-3 text-white rounded font-medium hover:bg-[#1e1a4a] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// export default function Navbar() {
//   return (
//     <div className="h-16 flex justify-between bg- items-center px-10 z-10 ">
//       <div className="w-1/3">
//         <img
//           src="Richmond_logo.png"
//           alt="Richmond Logo"
//           className="h-12 w-auto"
//         />
//       </div>

//       <div className="flex gap-6 w-1/3 justify-center">
//         <p className="text-[#29245C] font-semibold cursor-pointer relative group transition-colors duration-300 hover:text-[#1e1a4a]">
//           Home
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#29245C] transition-all duration-300 ease-out group-hover:w-full"></span>
//         </p>
//         <p className="text-[#29245C] font-semibold cursor-pointer relative group transition-colors duration-300 hover:text-[#1e1a4a]">
//           Buy Ticket
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#29245C] transition-all duration-300 ease-out group-hover:w-full"></span>
//         </p>
//         <p className="text-[#29245C] font-semibold cursor-pointer relative group transition-colors duration-300 hover:text-[#1e1a4a]">
//           Prizes
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#29245C] transition-all duration-300 ease-out group-hover:w-full"></span>
//         </p>
//         <p className="text-[#29245C] font-semibold cursor-pointer relative group transition-colors duration-300 hover:text-[#1e1a4a]">
//           Leader-board
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#29245C] transition-all duration-300 ease-out group-hover:w-full"></span>
//         </p>
//         <p className="text-[#29245C] font-semibold cursor-pointer relative group transition-colors duration-300 hover:text-[#1e1a4a]">
//           FAQs
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#29245C] transition-all duration-300 ease-out group-hover:w-full"></span>
//         </p>
//         <p className="text-[#29245C] font-semibold cursor-pointer relative group transition-colors duration-300 hover:text-[#1e1a4a]">
//           Contact Us
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#29245C] transition-all duration-300 ease-out group-hover:w-full"></span>
//         </p>
//       </div>

//       <div className="w-1/3 flex justify-end">
//         <button className="bg-[#29245C] w-28 h-7 text-white rounded">Buy Ticket</button>
//       </div>
//     </div>
//   );
// }
