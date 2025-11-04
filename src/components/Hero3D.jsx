import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#05060a] via-[#090a12] to-[#0b0d14] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + stars overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(9,10,18,0.2),rgba(5,6,10,0.8))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="text-xs text-white/80">Tech • Portfolio • Interactive</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
            Yethikrishna R
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
            Creative Frontend Developer crafting modern, playful, and immersive web experiences.
            I blend design, 3D, and code to build delightful interfaces that feel alive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-indigo-500"
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle gradient bottom fade to separate sections */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0d14] to-transparent" />
    </section>
  );
}
