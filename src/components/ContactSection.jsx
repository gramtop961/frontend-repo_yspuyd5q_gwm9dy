import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0d14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold">Let’s build something great</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Open to freelance and full-time opportunities. If you have a project,
            idea, or just want to say hi — my inbox is always open.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:yethikrishnar@example.com?subject=Let’s%20work%20together"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-8 text-sm text-white/60">
            Prefer a quick note? DM me and I’ll reply within a day.
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-between text-white/60">
          <span>© {new Date().getFullYear()} Yethikrishna R</span>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-white">
            Back to top <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
}
