import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description:
      'A scalable chat platform with websockets, group rooms, and message reactions. Built with React, FastAPI, and MongoDB.',
    tech: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Dashboard',
    description:
      'Analytics dashboard showing sales, cohort retention, and inventory insights. Interactive charts and filters.',
    tech: ['Vite', 'Tailwind', 'Chart.js'],
    demo: '#',
    repo: '#',
  },
  {
    title: '3D Portfolio',
    description:
      'A playful, interactive 3D portfolio leveraging Spline and advanced scroll-driven animations.',
    tech: ['Spline', 'Framer Motion', 'React'],
    demo: '#',
    repo: '#',
  },
];

function ProjectCard({ title, description, tech, demo, repo }) {
  return (
    <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/40">
          <Folder className="w-5 h-5" />
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <li key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            {t}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a href={demo} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
          Live Demo <ExternalLink className="w-4 h-4" />
        </a>
        <a href={repo} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
          Code <Github className="w-4 h-4" />
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-indigo-200/80 dark:group-hover:ring-indigo-500/20 transition" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Selected Projects</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">A few highlights showing my focus on clean architecture, delightful UX, and performance.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
