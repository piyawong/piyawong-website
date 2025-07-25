"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", logo: "/public/javascript_logo.png" },
  { name: "TypeScript", logo: "/public/typescript_logo.png" },
  { name: "React", logo: "/public/react_logo.png" },
  { name: "Next.js", logo: "/public/next.svg" },
  { name: "Node.js", logo: "/public/node_js_logo.png" },
  { name: "Python", logo: "/public/python_logo.png" },
  { name: "Docker", logo: "/public/docker_logo.png" },
  { name: "AWS", logo: "/public/aws_logo.png" },
  { name: "MongoDB", logo: "/public/mongo_db_logo.png" },
  { name: "PostgreSQL", logo: "/public/postgres_sql_logo.png" },
  { name: "Express", logo: "/public/express_logo.png" },
  { name: "Django", logo: "/public/django_logo.png" },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "GraphQL",
  "REST APIs",
];

const experiences = [
  {
    title: "Software Engineer (Django)",
    company: "Cloudtronics",
    location: "Remote",
    period: "Jan 2023 - Present (2 years 6 months)",
    description:
      "Led backend development using Django, designing and maintaining robust APIs, authentication systems, and database schemas for various web applications.",
    achievements: [
      "Built and optimized CI/CD pipelines to automate testing, deployment, and environment provisioning, ensuring fast and reliable delivery across projects.",
      "Occasionally contributed to front-end development (React, Next.js), ensuring full-stack alignment and seamless integration.",
      "Designed and implemented real-time features using WebSocket and async architecture for instant updates (e.g., chat systems, live dashboards).",
      "Worked closely with cross-functional teams to define system architecture, ensure scalability, and improve overall developer workflow.",
    ],
  },
  {
    title: "Software Developer (Electron + Next.js)",
    company: "Snocko-tech",
    location: "Remote",
    period: "Jan 2023 - Jan 2025 (2 years 1 month)",
    description:
      "Developed a cross-platform desktop chat application using Next.js and Electron, focusing on seamless performance, real-time communication, and intuitive user experience.",
    achievements: [
      "Implemented core features including multi-room messaging, real-time updates, and local data persistence.",
      "Designed and built a complete CI/CD pipeline to automate build, test, and deployment for macOS and Windows.",
      "Integrated auto-update functionality using Electron’s update system for smooth delivery of new versions.",
      "Handled code signing and certificate management for Windows (SignTool) and macOS (Apple Developer ID), ensuring security and compliance.",
      "Collaborated across teams to ensure development best practices, consistent versioning, and secure release management.",
    ],
  },
  {
    title: "Junior Software Developer (Internship – React.js)",
    company: "Customix.co",
    location: "Bangkok, Thailand",
    period: "Oct 2021 - Mar 2022 (6 months)",
    description:
      "Contributed to the development of a WYSIWYG website builder tailored for client use, enabling non-technical users to create and customize web pages.",
    achievements: [
      "Focused on front-end development using React.js, building dynamic components and enhancing user interaction within the page editor.",
      "Collaborated with senior developers to implement drag-and-drop features, real-time previews, and reusable UI components.",
      "Gained experience in component-based architecture, responsive design, and modern front-end development workflows.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Kasetsart University, Thailand",
    year: "2022",
    details:
      "Graduated with a Bachelor of Computer Engineering degree from Kasetsart University, Thailand. GPA: 3.03",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I’m a passionate and driven software engineer with a strong love
              for learning and problem-solving. With experience across
              full-stack development—ranging from backend systems and CI/CD
              pipelines to desktop and web applications—I bring adaptability,
              perseverance, and a solution-oriented mindset to every project I
              work on.
              <br />
              <br />I am currently seeking new opportunities in Australia as I
              transition to living there permanently. I strongly believe in my
              ability to learn anything required to deliver high-quality results
              and thrive in fast-paced environments. My strengths lie in
              analytical thinking, consistent improvement, and the determination
              to overcome challenges, no matter how complex.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills & Technologies
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Skill Levels */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 hover:scale-105 transition-transform"
                    >
                      {skill.logo.endsWith(".svg") ||
                      skill.logo.endsWith(".png") ? (
                        <img
                          src={skill.logo.replace("/public", "")}
                          alt={skill.name + " logo"}
                          className="w-12 h-12 mb-2 object-contain"
                        />
                      ) : (
                        <span className="text-4xl mb-2">{skill.logo}</span>
                      )}
                      <span className="font-medium text-center text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Technologies I Work With
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="tech-tag">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding py-16">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Work Experience
            </h2>

            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />
                  <div className="card p-6">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {exp.location}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card p-8 max-w-2xl mx-auto"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Class of {edu.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
