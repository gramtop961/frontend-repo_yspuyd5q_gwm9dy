import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Playground',
    desc: 'A Spline-powered 3D scene with dynamic interactions and motion choreography.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Socket-driven analytics with gorgeous, responsive charts and micro-interactions.',
    tags: ['Next.js', 'Socket.io', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System Starter',
    desc: 'Shadcn + Radix primitives with theming, tokens, and accessible components.',
    tags: ['Shadcn', 'Radix', 'TypeScript'],
    live: '#',
    repo: '#',
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0d14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-2 text-white/90">
          <Globe className="h-5 w-5 text-indigo-400" />
          <h2 className="text-xl font-semibold tracking-wide">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 transition hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
