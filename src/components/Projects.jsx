import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Keyboard (Spline)',
    desc:
      'A 3D interactive keyboard where each keycap reveals a skill on hover. Built with Spline and Framer Motion.',
    tags: ['Spline', 'Framer Motion', 'React'],
    link: '#',
  },
  {
    title: 'Cosmic Portfolio',
    desc:
      'Space-themed personal site with particles and smooth scroll interactions.',
    tags: ['Tailwind', 'Animations', 'Design'],
    link: '#',
  },
  {
    title: 'Realtime Showcase',
    desc:
      'Experiments with websockets and presence for collaborative cursors and interactions.',
    tags: ['WebSocket', 'UX', 'React'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#05060c] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Projects</h2>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(600px_200px_at_var(--x,50%)_0%,rgba(56,189,248,0.15),transparent)]" />
              <div className="relative">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-cyan-300">
                  <span className="text-sm">Preview</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
