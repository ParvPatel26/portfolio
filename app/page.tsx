import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import { profile, experience, projects, skills, education, type Link } from "@/lib/data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <Reveal>
      <h2 className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">
        <span className="h-px w-8 bg-accent" />
        {title}
      </h2>
      </Reveal>
      {children}
    </section>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-700 dark:text-accent-soft"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Links({ links }: { links: Link[] }) {
  return (
    <div className="flex gap-4">
      {links.map((l) => (
        <a
          key={l.href + l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-900 underline decoration-accent/50 underline-offset-4 transition hover:decoration-accent dark:text-zinc-100"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            parv<span className="text-accent">.</span>dev
          </a>
          <nav className="flex items-center gap-5">
            <ul className="hidden gap-5 text-sm sm:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="pb-12 pt-20 sm:pt-28">
          <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl dark:text-zinc-50">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-zinc-600 sm:text-2xl dark:text-zinc-400">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{profile.tagline}</p>
          <p className="mt-3 text-sm text-zinc-500">📍 {profile.location}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-accent-soft"
            >
              View my work
            </a>
            <a
              href={profile.resume}
              target="_blank"
              className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-100"
            >
              Download résumé
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-3 text-sm font-semibold transition hover:text-accent"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-3 text-sm font-semibold transition hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
          </Reveal>
        </section>

        <Section id="about" title="About">
          <Reveal className="max-w-2xl space-y-4 text-lg leading-relaxed">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-12 border-l border-zinc-200 pl-6 dark:border-zinc-800">
            {experience.map((e, i) => (
              <li key={e.company} className="relative">
                <Reveal delay={i * 100}>
                <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-zinc-50 dark:ring-zinc-950" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {e.title} · <span className="text-accent">{e.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">
                  {e.summary} — {e.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <Tags items={e.tech} />
                  <Links links={e.links} />
                </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 120} className="flex">
              <article
                className="group flex w-full flex-col rounded-xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                {p.featured && (
                  <span className="mb-3 w-fit font-mono text-xs uppercase tracking-wider text-accent">Featured</span>
                )}
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{p.blurb}</p>
                <div className="mt-5 space-y-4">
                  <Tags items={p.tech} />
                  <Links links={p.links} />
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={(i % 2) * 100}>
                <h3 className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">{s.group}</h3>
                <Tags items={s.items} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <Reveal className="space-y-6">
            {education.map((ed) => (
              <div key={ed.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{ed.degree}</h3>
                  <p className="text-sm text-zinc-500">
                    {ed.school} · {ed.location}
                  </p>
                </div>
                <span className="font-mono text-xs text-zinc-500">{ed.period}</span>
              </div>
            ))}
          </Reveal>
        </Section>

        <Section id="contact" title="Contact">
          <Reveal>
          <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Let&apos;s work together</h3>
            <p className="mx-auto mt-4 max-w-md leading-relaxed">
              I&apos;m open to graduate and junior software engineering roles in Australia. My inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-zinc-950 transition hover:bg-accent-soft"
            >
              Say hello
            </a>
            <p className="mt-4 font-mono text-sm text-zinc-500">{profile.email}</p>
          </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js & Tailwind · Hosted on Vercel
      </footer>
    </>
  );
}
