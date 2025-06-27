"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awards = [
  {
    title: "Best AI Workshop Instructor",
    organization: "Next Academy",
    year: "2025",
    icon: Trophy,
    description: "Honored for leading the “Power of AI” workshop with 200+ participants and achieving a 4.8/5 satisfaction rating.",
  },
  {
    title: "Community Leader",
    organization: "Dev Community Egypt",
    year: "2025",
    icon: Award,
    description: "Awarded for organizing and leading monthly AI tools meetups.",
  },
  {
    title: "Certified Meta Ads Professional",
    organization: "Meta Blueprint ",
    year: "2024",
    icon: Star,
    description: "Recognized for delivering a 17× ROAS in a single month.",
  },
  {
    title: "No-Code Automation Excellence",
    organization: "Make.com Partner Program",
    year: "2025",
    icon: Medal,
    description: "Awarded as top partner for implementing no-code automation solutions for startups.",
  },
  {
    title: "Generative AI Specialization",
    organization: "DeepLearning.AI via LinkedIn Learning",
    year: "2025",
    icon: Trophy,
    description: "Completed the Generative AI Specialization course with distinction.",
  },
  {
    title: "Certified Marketing Automation Professional",
    organization: "Marketing Mark AI",
    year: "2025",
    icon: Award,
    description: "Completed an advanced automation course covering end-to-end marketing workflows and integration strategies.",
  },
]

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-4">
            Awards & <span className="text-[#FE7743]">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6 max-w-2xl mx-auto">
            Recognition for excellence in web development and community contributions
          </p>
        </motion.div>

        {/* Mobile: Single Column */}
        <div className="space-y-6 lg:hidden">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AwardCard({ award, index, isInView }: { award: any; index: number; isInView: boolean }) {
  const IconComponent = award.icon

  return (
    <motion.div
      className="bg-[#EFEEEA] dark:bg-[#273F4F] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="text-center">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-[#FE7743] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-2 group-hover:text-[#FE7743] transition-colors duration-300">
          {award.title}
        </h3>

        <p className="text-[#FE7743] font-semibold mb-1">{award.organization}</p>

        <p className="text-sm text-[#273F4F] dark:text-[#90CAF9] mb-4">{award.year}</p>

        <p className="text-[#273F4F] dark:text-[#90CAF9] leading-relaxed">{award.description}</p>
      </div>
    </motion.div>
  )
}
