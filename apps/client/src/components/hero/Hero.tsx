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
    <section className="relative w-full min-h-screen">
      {/* Video Wrapper */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
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
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      </div>

      {/* Below Video Content */}
      <div className="relative z-20 bg-white py-12 px-6 text-center flex flex-col items-center justify-center">
        <h1
          className={`text-charcoal text-3xl md:text-5xl font-bold transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          Welcome to Luminalogix
        </h1>
        {/* Optional paragraph or CTA here in future */}
      </div>
    </section>
  );
};
