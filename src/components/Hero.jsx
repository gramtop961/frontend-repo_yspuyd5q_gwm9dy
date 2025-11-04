import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden bg-[#06070d]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Decorative gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(192,132,252,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
            <Star className="h-3.5 w-3.5 text-yellow-300" />
            Inspired by Yethikrishna R • Interactive & Playful
          </div>
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Yethikrishna R — Creative Developer & Designer
          </h1>
          <p className="mx-auto max-w-2xl text-white/80">
            I craft immersive, animated experiences with React, Spline and Framer Motion.
            Explore my projects, skills and experiments in modern web design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium px-5 py-2.5 transition"
            >
              View Projects
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 transition"
            >
              GitHub <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
