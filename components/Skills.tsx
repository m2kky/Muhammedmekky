"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, TrendingUp, Users, PenTool, Target, BarChart3, ShoppingCart, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "AI & Automation",
    icon: Bot,
    skills: ["AI Tools", "Custom GPT Agents", "Workflow Automation", "Process Optimization", "N8N", "Make.com"],
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Marketing & Strategy",
    icon: TrendingUp,
    skills: [
      "Marketing Automation",
      "Campaign Management",
      "Growth Strategies",
      "Brand Development",
      "Market Analysis",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Community Management",
    icon: Users,
    skills: [
      "Community Building",
      "Engagement Strategies",
      "Event Planning",
      "Workshop Management",
      "Youth Development",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Content & Media",
    icon: PenTool,
    skills: [
      "Content Creation",
      "Social Media Management",
      "SEO Copywriting",
      "Video Production",
      "Brand Storytelling",
    ],
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Digital Advertising",
    icon: Target,
    skills: ["Meta Ads", "TikTok Ads", "LinkedIn Ads", "Google Ads", "Media Buying", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Analytics & Data",
    icon: BarChart3,
    skills: ["Data Analysis", "Performance Tracking", "Google Analytics", "Conversion Optimization", "ROI Analysis"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "E-commerce & Development",
    icon: ShoppingCart,
    skills: ["Shopify Development", "WooCommerce", "Liquid Framework", "Landing Pages", "User Experience"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Project Management",
    icon: Zap,
    skills: ["Team Leadership", "Event Coordination", "Process Improvement", "Quality Assurance", "Time Management"],
    color: "from-red-500 to-pink-500",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Skills & <span className="text-[#FE7743]">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6 max-w-2xl mx-auto">
            Comprehensive expertise across AI automation, marketing, and community management
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-[#000000] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="text-center mb-4">
                  <motion.div
                    className="mb-3 flex justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    <category.icon className="w-10 h-10 text-[#FE7743]" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#000000] dark:text-[#EFEEEA] mb-2 group-hover:text-[#FE7743] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#FE7743]/5 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="w-1.5 h-1.5 bg-[#FE7743] rounded-full flex-shrink-0" />
                      <span className="text-sm text-[#273F4F] dark:text-[#90CAF9] font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-[#FE7743] rounded-full flex items-center justify-center text-white text-xs font-bold"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                >
                  {category.skills.length}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: "8", label: "Skill Categories" },
              { number: "40+", label: "Core Skills" },
              { number: "5+", label: "Years Experience" },
              { number: "500+", label: "People Impacted" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#FE7743] mb-1">{stat.number}</div>
                <div className="text-sm text-[#273F4F] dark:text-[#90CAF9]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
