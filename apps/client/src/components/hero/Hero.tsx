"use client";
import React, { useEffect, useState } from "react";

export const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // 0.5 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Welcome Text */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <h1
          className={`text-white text-4xl md:text-6xl font-bold transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Welcome to Luminalogix
        </h1>
      </div>
    </section>
  );
};
