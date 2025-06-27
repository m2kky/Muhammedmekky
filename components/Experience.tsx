"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, FileText, ExternalLink } from "lucide-react"

const MekkyCVButton = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (isClicked) {
      window.open("https://drive.google.com/file/d/1BlYDPAfjdP48FY5zY9kOqM_hnbOZCEvP/view?usp=sharing", "_blank")
      return
    }

    setIsLoading(true)
    setIsClicked(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`px-8 py-4 rounded-full font-semibold transition-all duration-500 flex items-center gap-2 ${
        isClicked ? "bg-[#FE7743] text-white" : "bg-[#FE7743]/10 text-[#FE7743] hover:bg-[#FE7743]/20"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Loading...
        </>
      ) : isClicked ? (
        <>
          <ExternalLink className="w-5 h-5" />
          Open CV
        </>
      ) : (
        <>
          <FileText className="w-5 h-5" />
          Mekky CV
        </>
      )}
    </motion.button>
  )
}

const experiences = [
  {
    title: "AI & Automation Specialist",
    company: "Qudraat",
    period: "Dec 2024 — Feb 2025",
    location: "Dokki",
    type: "Internship",
    description:
      "Designed and implemented AI-driven workflows to automate content creation and workshop management, increasing operational efficiency by over 40%.",
    achievements: [
      "Designed AI-driven workflows increasing operational efficiency by 40%",
      "Developed custom GPT agents for educational and branding purposes",
      "Integrated automation tools (Make.com, Google Sheets, WhatsApp API)",
      "Conducted hands-on training for team members on AI automation workflows",
    ],
    technologies: ["Make.com", "Google Sheets", "WhatsApp API", "Custom GPT", "AI Tools"],
  },
  {
    title: "Community Manager",
    company: "Qudraat",
    period: "Oct 2024 — Present",
    location: "Dokki",
    type: "Current Role",
    description:
      "Led internal team coordination and managed Qudraat's community across multiple platforms, ensuring continuous engagement with over 500 youth participants.",
    achievements: [
      "Organized tasks and streamlined workflows with automation tools",
      "Managed community across WhatsApp, Facebook Groups, and offline meetups",
      "Ensured continuous engagement with 500+ youth participants",
      "Delivered peer learning sessions and interactive micro-workshops",
    ],
    technologies: ["WhatsApp", "Facebook Groups", "Community Management Tools", "Analytics"],
  },
  {
    title: "Marketing Operation Manager",
    company: "Scarpe",
    period: "Apr 2024 — Oct 2024",
    location: "Giza - Onsite",
    type: "Full-time",
    description:
      "Led daily marketing operations and developed growth-focused strategies, increasing social media engagement by 45% and improving website functionality.",
    achievements: [
      "Increased social media engagement by 45%",
      "Enhanced website functionality improving user experience",
      "Optimized e-commerce site resulting in 25% increase in sales",
      "Managed SEO enhancements increasing traffic to 13,000 monthly visitors",
    ],
    technologies: ["Shopify", "Liquid Framework", "SEO Tools", "Analytics", "E-commerce Platforms"],
  },
  {
    title: "Social Media Specialist",
    company: "Curva - Sports Wear",
    period: "May 2022 — Jun 2024",
    location: "Giza - Hybrid",
    type: "Full-time",
    description:
      "Managed comprehensive social media strategies for sports wear brand, creating engaging content and implementing customer service protocols.",
    achievements: [
      "Created and executed social media campaigns increasing sales and loyalty",
      "Strengthened audience engagement through creative storytelling",
      "Collaborated with design team to align visuals with marketing objectives",
      "Implemented customer service protocols across social media platforms",
    ],
    technologies: ["Social Media Management", "Content Creation", "Customer Service Tools"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#000000]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-6">
            Professional <span className="text-[#FE7743]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full mb-8" />

          <p className="text-xl sm:text-2xl text-[#273F4F] dark:text-[#90CAF9] mb-8 font-medium leading-relaxed">
            Transforming businesses through AI automation and strategic marketing operations
          </p>

          {/* Current Positions */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FE7743]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#FE7743] rounded-full animate-pulse" />
              <span className="text-[#FE7743] font-semibold">Currently</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <motion.div
                className="bg-[#EFEEEA] dark:bg-[#273F4F] p-4 rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-bold text-[#000000] dark:text-[#EFEEEA] mb-1">Co-Founder</h3>
                <p className="text-[#FE7743] font-semibold mb-2">Green Studio 9</p>
                <p className="text-[#273F4F] dark:text-[#90CAF9] text-sm">Leading innovative AI-driven solutions</p>
              </motion.div>

              <motion.div
                className="bg-[#EFEEEA] dark:bg-[#273F4F] p-4 rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-bold text-[#000000] dark:text-[#EFEEEA] mb-1">AI Automation Specialist</h3>
                <p className="text-[#FE7743] font-semibold mb-2">Qudraat</p>
                <p className="text-[#273F4F] dark:text-[#90CAF9] text-sm">Community management initiatives</p>
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MekkyCVButton />
            <motion.a
              href="/career-journey"
              className="px-8 py-4 bg-transparent border-2 border-[#FE7743] text-[#FE7743] rounded-full font-semibold hover:bg-[#FE7743] hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Career Journey
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
