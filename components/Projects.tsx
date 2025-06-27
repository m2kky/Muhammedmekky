"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"

// --------------------
// Project categories data (loaded from JSON)
// --------------------

type Project = {
  title: string;
  description: string;
  subtitle?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  resourcesUrl?: string;
  presentationUrl?: string;
  tryUrl?: string;
  githubUrl?: string;
}

type Category = {
  name: string;
  projects: Project[];
}

// Import project categories JSON data
import categoriesJson from "@/data/projects.json";

// Cast JSON to our Category[] type
const categories: Category[] = categoriesJson as Category[];

/* Legacy sample data (commented out)
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
      },
    





    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",

    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",

    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",

    description:
      "A comprehensive analytics platform for social media management with real-time data visualization and automated reporting.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Python", "FastAPI", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
*/

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentCategory, setCurrentCategory] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  const projects = categories[currentCategory]?.projects ?? []

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#EFEEEA] dark:bg-[#273F4F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-4">
            Featured <span className="text-[#FE7743]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentCategory(idx);
                  setCurrentProject(0);
                }}
                className={`px-4 py-1 rounded-full border transition-colors duration-300 ${
                  idx === currentCategory
                    ? "bg-[#FE7743] text-white border-transparent"
                    : "border-[#FE7743] text-[#273F4F] dark:text-[#90CAF9] hover:bg-[#FE7743]/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <ProjectCard project={project} index={index} isInView={isInView} />
                </div>
              ))}
            </motion.div>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#000000] p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-[#273F4F] dark:text-[#90CAF9]" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#000000] p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-[#273F4F] dark:text-[#90CAF9]" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? "bg-[#FE7743]" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-96 perspective-1000"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            {project.subtitle && (
              <p className="text-sm opacity-80 mb-1">{project.subtitle}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <span key={tech} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-white dark:bg-[#000000] p-6 shadow-lg transform rotateY-180">
          <h3 className="text-xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-1">{project.title}</h3>
            {project.subtitle && (
              <h4 className="text-sm text-[#FE7743] mb-3">{project.subtitle}</h4>
            )}
          <p className="text-[#273F4F] dark:text-[#90CAF9] mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="px-3 py-1 bg-[#FE7743]/10 text-[#FE7743] rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
                    <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <Button
                asChild
                size="sm"
                className="bg-[#FE7743] hover:bg-[#FE7743]/90 text-white"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Site
                </a>
              </Button>
            )}
                        {project.tryUrl && (
              <Button
                asChild
                size="sm"
                className="bg-[#FE7743] hover:bg-[#FE7743]/90 text-white"
              >
                <a
                  href={project.tryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Try it
                </a>
              </Button>
            )}
            {project.resourcesUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-[#273F4F] dark:border-[#90CAF9] text-[#273F4F] dark:text-[#90CAF9]"
              >
                <a
                  href={project.resourcesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Resources
                </a>
              </Button>
            )}
            {project.presentationUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-[#273F4F] dark:border-[#90CAF9] text-[#273F4F] dark:text-[#90CAF9]"
              >
                <a
                  href={project.presentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Presentation
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
