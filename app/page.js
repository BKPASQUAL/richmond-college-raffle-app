"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/home/Navbar";
import LandingPage from "./components/home/LandingPage";
import Overview from "./components/home/Overview";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-[url('/Richmond_1st_flag.jpg')] bg-cover bg-center bg-no-repeat opacity-50"></div>
        <div className="relative z-20">
          <Navbar />
        </div>
        <div className="relative z-10">
          <LandingPage />
        </div>
      </div>
      <Overview/>
    </div>
  );
}
