"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Ripple } from "@/components/ui/ripple";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";

import ProjectCard from "@/components/project-card";

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative section-padding py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-30"
          )}
        />

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi,test I'm{" "}
                <AnimatedGradientText className="text-4xl lg:text-6xl font-bold">
                  Piyawong Mahattanasawat
                </AnimatedGradientText>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                <TypingAnimation
                  text="Full-Stack Developer building modern web apps and AI solutions for real-world problems."
                  duration={50}
                />
                <p className="mt-4">
                  Currently, I am a "permanent resident of Australia" who is
                  "looking for a full-time Software Developer job" .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/projects">
                  <ShimmerButton
                    className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                    background="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                    shimmerColor="#ffffff"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    View My Work
                  </ShimmerButton>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/piyawong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://th.linkedin.com/in/piyawong-mahattanasawat-2b63161b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative ">
                {/* Ripple Effect Behind Profile */}
                <div className="absolute inset-0 -z-10 rounded-full w-96 h-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Ripple
                    mainCircleSize={120}
                    numCircles={6}
                    mainCircleOpacity={0.1}
                    className="rounded-full"
                  />
                </div>

                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 relative z-10">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-4">
                    <Image
                      src="/profile.png?height=300&width=300"
                      alt="Piyawong Mahattanasawat"
                      width={300}
                      height={300}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for creating innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <ShimmerButton
                className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                background="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                shimmerColor="#ffffff"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                View All Projects
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
