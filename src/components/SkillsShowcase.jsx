import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Sparkles, Layers } from 'lucide-react';

const skills = [
  {
    icon: <Code className="h-5 w-5" />, 
    title: 'Frontend Engineering',
    desc: 'React, Next.js, TypeScript, Tailwind — building fast, accessible UIs.',
    hue: 'from-indigo-500/20 to-indigo-500/0',
  },
  {
    icon: <Cpu className="h-5 w-5" />, 
    title: '3D & Motion',
    desc: 'Spline, Framer Motion, GSAP — interactive visuals that feel alive.',
    hue: 'from-purple-500/20 to-purple-500/0',
  },
  {
    icon: <Globe className="h-5 w-5" />, 
    title: 'Web Experience',
    desc: 'SEO, performance, and responsive design across all devices.',
    hue: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    icon: <Layers className="h-5 w-5" />, 
    title: 'Design Systems',
    desc: 'Shadcn, Radix UI, and component libraries for scalable products.',
    hue: 'from-amber-500/20 to-amber-500/0',
  },
];

export default function SkillsShowcase() {
  return (
    <section id="skills" className="relative w-full bg-[#0b0d14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-2 text-white/90">
          <Sparkles className="h-5 w-5 text-indigo-400" />
          <h2 className="text-xl font-semibold tracking-wide">Core Skills</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-b ${s.hue} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
