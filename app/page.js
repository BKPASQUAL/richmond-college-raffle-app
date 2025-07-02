"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

export default function Home() {
 
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[url('/Richmond_1st_flag.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="relative z-10">
        <LandingPage />
      </div>
    </div>
  );
}
