"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";

export const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-brand-light text-charcoal flex flex-col items-center justify-center px-fluid pt-32 pb-20">
      {/* Responsive Background Video */}
      {showVideo && (
        <div className="absolute inset-0 w-full h-full z-[-1] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/assets/runway.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="font-display text-4xl md:text-6xl text-center max-w-4xl leading-tight tracking-tight"
      >
        A Season of <span className="text-olive">Refinement</span><br />
        <span className="text-accent">Style, Powered by AI.</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 text-lg text-center max-w-xl"
      >
        Discover fashion curated by intelligent algorithms and human taste.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10"
      >
        <Button className="bg-charcoal text-white hover:bg-olive rounded-xl px-6 py-3 text-base shadow-soft transition-all">
          Explore Collection
        </Button>
      </motion.div>
    </section>
  );
};
