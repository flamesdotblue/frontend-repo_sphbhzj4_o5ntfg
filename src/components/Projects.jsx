import React from 'react';

const projects = [
  {
    title: 'Modern Portfolio UI',
    desc: 'A sleek, responsive developer portfolio built with React, Tailwind, and Framer Motion.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'SaaS Landing Page',
    desc: 'Conversion-focused landing page with accessible components and dark mode support.',
    tech: ['React', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Dashboard Starter',
    desc: 'Admin dashboard starter with cards, charts, and responsive layout primitives.',
    tech: ['React', 'Tailwind'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Projects</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          A selection of React + Tailwind websites highlighting clean design,
          performance, and good developer ergonomics.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-lg backdrop-blur-md transition hover:shadow-emerald-500/20"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-emerald-500/20 blur-2xl transition duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={p.link}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Live Preview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
