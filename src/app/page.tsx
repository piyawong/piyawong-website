import Image from "next/image";
import type { ReactNode } from "react";

const accent = "#0070f3"; // Next.js blue

// Mocking data
const profile = {
  name: "Piyawong Mahattanasawat test",
  title: "Full Stack Developer",
  description:
    "Passionate about building scalable web applications and delightful user experiences.",
  avatar: "/logo-small.png", // คุณสามารถเปลี่ยน path หรือเพิ่มไฟล์จริงภายหลัง
  contact: {
    email: "piyawong@example.com",
    github: "https://github.com/piyawong",
    linkedin: "https://linkedin.com/in/piyawong",
  },
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "AWS",
  ],
  projects: [
    {
      name: "Personal Portfolio",
      description:
        "A minimal portfolio website built with Next.js 15 and Tailwind CSS.",
      link: "#",
    },
    {
      name: "E-commerce Platform",
      description: "A scalable e-commerce platform with modern stack.",
      link: "#",
    },
  ],
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="w-full max-w-3xl mx-auto mb-24 px-4">
      <h2 className="text-4xl font-extrabold mb-10 text-neutral-900 dark:text-neutral-100 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col items-center font-sans overflow-x-hidden">
      {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-120px] -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-400/20 blur-3xl animate-bg-move" />
        <div className="absolute right-[-200px] bottom-[-200px] w-[400px] h-[400px] rounded-full bg-blue-200/30 blur-2xl animate-bg-move2" />
      </div>
      {/* Hero */}
      <div
        className="flex flex-col items-center mb-28 mt-16 px-4 w-full"
        id="hero"
      >
        <div className="pointer-events-none fixed inset-0 -z-20 w-full h-full">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.08"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              className="text-black dark:text-white animate-grid-move"
            />
          </svg>
        </div>
        <Image
          src={profile.avatar}
          alt="avatar"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full mb-8 border-4 border-neutral-200 dark:border-neutral-800 object-cover shadow-lg"
        />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight text-center leading-tight">
          {profile.name}
        </h1>
        <p className="text-2xl sm:text-3xl text-neutral-600 dark:text-neutral-300 mb-4 font-semibold text-center">
          {profile.title}
        </p>
        <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl text-center">
          {profile.description}
        </p>
      </div>

      {/* About */}
      <Section title="About">
        <div id="about">
          <p className="text-neutral-700 dark:text-neutral-300 text-xl leading-relaxed">
            Hi! I am {profile.name}. I love building web apps that are fast,
            accessible, and user-friendly. I enjoy learning new technologies and
            collaborating with others to create impactful products.
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div id="skills">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="bg-neutral-100 dark:bg-neutral-800 px-5 py-2 rounded-lg text-lg border border-neutral-200 dark:border-neutral-700 font-semibold shadow-sm text-center"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div id="projects">
          <ul className="grid sm:grid-cols-2 gap-8">
            {profile.projects.map((project) => (
              <li
                key={project.name}
                className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 bg-white dark:bg-neutral-950 shadow-md transition hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 group flex flex-col"
              >
                <a
                  href={project.link}
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 transition-colors"
                  style={{ color: accent }}
                >
                  {project.name}
                </a>
                <p className="text-neutral-500 dark:text-neutral-400 text-base mt-1 flex-1">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact">
        <div id="contact">
          <ul className="flex flex-col gap-4 text-xl">
            <li>
              <span className="font-bold">Email:</span>{" "}
              <a
                href={`mailto:${profile.contact.email}`}
                className="hover:underline text-blue-600 dark:text-blue-400 font-semibold"
              >
                {profile.contact.email}
              </a>
            </li>
            <li>
              <span className="font-bold">GitHub:</span>{" "}
              <a
                href={profile.contact.github}
                className="hover:underline text-blue-600 dark:text-blue-400 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.contact.github}
              </a>
            </li>
            <li>
              <span className="font-bold">LinkedIn:</span>{" "}
              <a
                href={profile.contact.linkedin}
                className="hover:underline text-blue-600 dark:text-blue-400 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.contact.linkedin}
              </a>
            </li>
          </ul>
        </div>
      </Section>

      <footer className="w-full max-w-3xl mx-auto text-center text-neutral-400 text-base py-12 border-t border-neutral-100 dark:border-neutral-800 mt-16">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
