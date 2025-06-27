"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useMemo } from "react"
import { TrendingUp, Target, Zap, Bot, Users, Calendar } from "lucide-react"

const services = [
  {
    title: "AI Automation Solutions",
    description:
      "Custom AI-driven workflows and automation systems that streamline operations and boost efficiency by up to 40%",
    icon: Bot,
    features: ["Custom GPT Agents", "Workflow Automation", "Process Optimization", "AI Integration"],
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Community Management",
    description:
      "Comprehensive community building and engagement strategies across multiple platforms with proven results",
    icon: Users,
    features: ["Multi-platform Management", "Engagement Strategies", "Growth Optimization", "Analytics & Insights"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Marketing Automation",
    description:
      "End-to-end marketing automation workflows that nurture leads and drive conversions through personalized journeys",
    icon: Zap,
    features: ["Lead Scoring", "Email Sequences", "Behavioral Triggers", "CRM Integration"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Event Planning & Management",
    description:
      "Strategic planning and execution of workshops and events with seamless logistics and high attendance rates",
    icon: Calendar,
    features: ["Workshop Planning", "Registration Systems", "Logistics Management", "Feedback Collection"],
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Social Media Strategy",
    description: "Data-driven social media campaigns that increase engagement and drive measurable business results",
    icon: TrendingUp,
    features: ["Content Strategy", "Engagement Growth", "Performance Analytics", "Brand Building"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Content Creation & SEO",
    description: "High-impact content creation and SEO optimization that drives traffic and enhances brand visibility",
    icon: Target,
    features: ["Content Development", "SEO Optimization", "Brand Storytelling", "Performance Tracking"],
    color: "from-red-500 to-pink-500",
  },
]

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#EFEEEA] dark:bg-[#273F4F] relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-[#FE7743] rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-[#90CAF9] rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-[#273F4F] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-4">
            My <span className="text-[#FE7743]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6 max-w-2xl mx-auto">
            Comprehensive AI automation and marketing solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#000000] p-6 rounded-3xl shadow-2xl group hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {useMemo(() => Array.from({ length: 8 }, (_, i) => i), []).map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FE7743]/30 rounded-full"
            style={{
              left: `${seededRandom(i) * 100}%`,
              top: `${seededRandom(i * 3) * 100}%`,
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: seededRandom(i * 5) * 3 + 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: seededRandom(i * 7) * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const IconComponent = service.icon

  return (
    <div className="relative overflow-hidden h-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl`} />
        <div className="absolute top-4 right-4 w-20 h-20 border border-[#FE7743] rounded-full" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#90CAF9] rounded-full" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FE7743] to-[#90CAF9] rounded-full mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-3 group-hover:text-[#FE7743] transition-colors duration-500">
            {service.title}
          </h3>

          <p className="text-[#273F4F] dark:text-[#90CAF9] leading-relaxed mb-4 text-sm">{service.description}</p>
        </div>

        <div className="space-y-3 flex-1">
          {service.features.map((feature: string, i: number) => (
            <div
              key={i}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#FE7743]/10 transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-[#FE7743] rounded-full flex-shrink-0" />
              <span className="text-[#273F4F] dark:text-[#90CAF9] font-medium text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
