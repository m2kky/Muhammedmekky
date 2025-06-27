"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Linkedin, Instagram, Heart } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/muhammedmekky" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/muhammedm2kky" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/muhammedmekky/" },
  { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@muhammedm2kky" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Name */}
          <motion.h3
            className="text-2xl sm:text-3xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[#EFEEEA]">Muhammed</span>
            <span className="text-[#FE7743]">Mekky</span>
          </motion.h3>

          <p className="text-[#90CAF9] mb-8 max-w-md mx-auto">
            Crafting digital experiences that make a difference. Let's build something amazing together.
          </p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 bg-[#273F4F] rounded-full flex items-center justify-center hover:bg-[#FE7743] transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  <IconComponent className="w-5 h-5 text-[#90CAF9] group-hover:text-white transition-colors duration-300" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {["About", "Skills", "Experience", "Projects", "Blog", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#90CAF9] hover:text-[#FE7743] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.6 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#273F4F] to-transparent mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Copyright */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-[#90CAF9]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>© {new Date().getFullYear()} Muhammed Mekky. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-[#FE7743] fill-current" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
