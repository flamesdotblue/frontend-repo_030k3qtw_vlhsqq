import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to work & freelance projects
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Hi, I’m Alex — a web developer building delightful experiences
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-prose">
            I craft responsive, accessible, and performant web apps with React, TypeScript, and modern tooling. I love turning complex ideas into intuitive interfaces.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium shadow hover:bg-indigo-500 transition">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white px-5 py-3 font-medium shadow hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition">
              Contact Me
            </a>
          </div>
          <ul className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">React</li>
            <li className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">TypeScript</li>
            <li className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">Node</li>
            <li className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">Tailwind</li>
          </ul>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-zinc-950/60" />
        </div>
      </div>
    </section>
  );
}
