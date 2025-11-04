import { motion } from 'framer-motion';

const skills = [
  'React',
  'Spline 3D',
  'Framer Motion',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'Three.js',
  'UI/UX',
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#06070d] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I’m a creative developer focused on building playful, interactive web experiences.
              My work blends modern engineering with motion design — leveraging 3D, micro-interactions
              and delightful details to tell compelling stories on the web.
            </p>
            <p className="mt-4 text-white/70">
              Outside of code, I love experimenting with visual design, prototyping ideas, and
              exploring emerging tools that push the boundaries of what’s possible online.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Core Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
