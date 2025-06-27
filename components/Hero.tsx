"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Target, Bot, Users, Rocket } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Typing animation state
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const titles = ["Marketing manager", "Automation specialist", "Event Planner & Management"]

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTextIndex]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(50)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(100)
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % titles.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, typingSpeed, titles])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#273F4F] via-[#90CAF9] to-[#FE7743] opacity-20 dark:opacity-10"
        style={{ y: y1 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #FE7743 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #90CAF9 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #273F4F 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #FE7743 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </motion.div>

      {/* Floating Marketing Icons */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ y: y2 }}>
        {[
          { icon: Bot, x: "10%", y: "20%" },
          { icon: Zap, x: "80%", y: "30%" },
          { icon: Users, x: "15%", y: "70%" },
          { icon: Rocket, x: "85%", y: "80%" },
          { icon: Target, x: "70%", y: "15%" },
          { icon: TrendingUp, x: "25%", y: "85%" },
        ].map((item, i) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: item.x, top: item.y }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            >
              <IconComponent className="w-8 h-8 text-[#FE7743] opacity-30" />
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div className="relative z-10 text-center max-w-5xl mx-auto" style={{ opacity }}>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-2 bg-[#FE7743]/10 text-[#FE7743] rounded-full text-sm font-semibold mb-4">
            AI-Powered Marketing Solutions
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-8xl font-bold text-[#273F4F] dark:text-[#EFEEEA] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Muhammed</span>
          <span className="block text-[#FE7743]">Mekky</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#90CAF9] mt-4 min-h-[3rem] flex items-center justify-center">
            {currentText}
            <motion.span
              className="inline-block w-1 h-8 bg-[#FE7743] ml-2 rounded-sm"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-[#273F4F] dark:text-[#90CAF9] mt-6 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Driving Business Growth through AI &amp; Automation | Replace employee gaps with AI
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("experience")}
            className="w-full sm:w-auto bg-[#FE7743] hover:bg-[#FE7743]/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 magnetic-hover"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto border-2 border-[#273F4F] dark:border-[#90CAF9] text-[#273F4F] dark:text-[#90CAF9] hover:bg-[#273F4F] hover:text-white dark:hover:bg-[#90CAF9] dark:hover:text-[#000000] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 magnetic-hover"
          >
            Let's Automate
          </Button>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "500+", label: "Youth Empowered" },
            { number: "213%", label: "Engagement Increase" },
            { number: "40%", label: "Efficiency Boost" },
            { number: "95%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="text-2xl sm:text-3xl font-bold text-[#FE7743] mb-1">{stat.number}</div>
              <div className="text-sm text-[#273F4F] dark:text-[#90CAF9]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#273F4F] dark:border-[#90CAF9] rounded-full mx-auto flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-3 bg-[#FE7743] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
          <p className="text-sm text-[#273F4F] dark:text-[#90CAF9] mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
