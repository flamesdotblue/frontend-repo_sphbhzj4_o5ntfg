import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16 text-slate-200">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About Me</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          I'm a BCA student (2024–2027) passionate about building fast, accessible, and
          beautiful web apps. My toolkit centers around React and Tailwind CSS, and I
          enjoy turning ideas into polished interfaces. I focus on clean code,
          component-driven development, and delightful interactions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <h3 className="text-lg font-semibold text-white">Hackathon Experience</h3>
          <p className="mt-2 text-sm text-slate-300">
            CGC Hackathon 2025 — Reached Top 20. Built a performant, responsive app
            under time constraints with a focus on UI/UX and teamwork.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <h3 className="text-lg font-semibold text-white">Education</h3>
          <p className="mt-2 text-sm text-slate-300">
            Bachelor of Computer Applications (BCA), 2024–2027
          </p>
          <p className="text-sm text-slate-300">CGPA: 8.55</p>
        </div>
      </div>
    </section>
  );
};

export default About;
