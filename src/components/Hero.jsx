import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for internships and projects
        </span>
        <h1 className="mt-4 bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Abhishek Yadav
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Frontend developer crafting responsive, modern web experiences with React
          and Tailwind CSS. I love building clean UIs and playful, interactive
          interfaces.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
