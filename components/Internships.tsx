"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { collaborations } from "@/data/collaborations"



export default function Internships() {
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
            Internships & <span className="text-[#FE7743]">Collaborations</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6 max-w-2xl mx-auto">
            Proud to have worked with and learned from industry-leading companies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
          {collaborations.map((company, index) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center p-6 bg-[#EFEEEA] dark:bg-[#273F4F] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-[#FE7743]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parallax floating elements */}
        <div className="relative mt-16 overflow-hidden">
          <motion.div
            className="flex justify-center items-center space-x-8 opacity-20"
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {collaborations.slice(0, 4).map((company, index) => (
              <motion.div
                key={`floating-${index}`}
                className="w-16 h-16 bg-[#FE7743]/20 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              >
                <span className="text-[#FE7743] font-bold text-xs">{company.name.charAt(0)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
