import React from 'react';

const HighlightCard = ({ title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="mt-3 text-sm text-slate-300">{children}</div>
  </div>
);

const Highlights = () => {
  return (
    <section id="highlights" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Highlights</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          Skills, certifications, and quick facts that represent my profile.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <HighlightCard title="Skills">
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git/GitHub'].map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {s}
              </span>
            ))}
          </div>
        </HighlightCard>

        <HighlightCard title="Certifications">
          <ul className="list-disc space-y-2 pl-5">
            <li>Oracle Cloud</li>
            <li>Deloitte</li>
            <li>Forage</li>
          </ul>
        </HighlightCard>

        <HighlightCard title="Contact">
          <ul className="space-y-2">
            <li>Email: <a className="text-emerald-400 hover:underline" href="mailto:abhishek@example.com">abhishek@example.com</a></li>
            <li>Phone: <a className="text-emerald-400 hover:underline" href="tel:+910000000000">+91 00000 00000</a></li>
            <li>Location: India</li>
          </ul>
        </HighlightCard>

        <HighlightCard title="Hackathon Experience">
          <p>
            CGC Hackathon 2025 — Top 20
          </p>
        </HighlightCard>

        <HighlightCard title="Education">
          <p>BCA, 2024–2027</p>
          <p>CGPA: 8.55</p>
        </HighlightCard>

        <HighlightCard title="Availability">
          <p>Open to internships, freelance projects, and collaborations.</p>
        </HighlightCard>
      </div>
    </section>
  );
};

export default Highlights;
