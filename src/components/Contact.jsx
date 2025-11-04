import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#06070d] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_center,rgba(192,132,252,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let’s build something stellar
        </motion.h2>
        <motion.p
          className="mt-3 text-white/75"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          I’m available for freelance work, collaborations, and creative experiments.
          Reach out and let’s bring ideas to life.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:yethikrishnar@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 px-5 py-2.5 font-medium text-black hover:bg-cyan-400 transition"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>

      <footer className="relative mt-16 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Yethikrishna R. Built with React, Tailwind & Spline.
      </footer>
    </section>
  );
}
