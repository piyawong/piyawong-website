"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects.json";
import { Meteors } from "@/components/ui/meteors";
import ProjectCard from "@/components/project-card";
import { SparklesText } from "@/components/ui/sparkle-text";

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding py-20 overflow-hidden relative">
        <Meteors number={30} />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <SparklesText>My Projects</SparklesText>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my curated portfolio of innovative digital experiences,
              where cutting-edge technology meets thoughtful design and creative
              problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pb-20">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
