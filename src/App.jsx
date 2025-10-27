import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold text-white">Abhishek Yadav</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#highlights">Highlights</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Highlights />

        {/* Contact CTA */}
        <section id="contact" className="relative mx-auto my-8 max-w-6xl scroll-mt-24 px-6 py-16">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 p-8 text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let’s build something great</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              I’m always excited to collaborate on new ideas. Reach out for internships,
              freelance work, or open-source projects.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:abhishek@example.com"
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Email Me
              </a>
              <a
                href="tel:+919076657084"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer inline to keep total components to 4 */}
      <footer className="border-t border-white/10 bg-slate-950/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Abhishek Yadav. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-emerald-400 hover:underline" href="#top">Portfolio</a>
            <a className="text-emerald-400 hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-emerald-400 hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
