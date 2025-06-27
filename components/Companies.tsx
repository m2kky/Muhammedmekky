"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const companies = [
  { name: "Company 1", logo: "/companies/1.svg" },
  { name: "Company 2", logo: "/companies/2.svg" },
  { name: "Company 3", logo: "/companies/3.svg" },
  { name: "Company 4", logo: "/companies/4.svg" },
  { name: "Company 5", logo: "/companies/5.svg" },
  { name: "Company 6", logo: "/companies/6.svg" },
  { name: "Company 7", logo: "/companies/7.svg" },
  { name: "Company 8", logo: "/companies/8.svg" },
  { name: "Company 9", logo: "/companies/9.svg" },
]

export default function Companies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#EFEEEA] dark:bg-[#273F4F] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-4">
            Trusted by <span className="text-[#FE7743]">Companies</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6">
            Companies that have trusted me with their digital transformation
          </p>
        </motion.div>

        {/* Marquee Effect */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-12 sm:space-x-16"
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-2 min-w-[160px] h-20"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter dark:invert"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#EFEEEA] dark:from-[#273F4F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#EFEEEA] dark:from-[#273F4F] to-transparent z-10" />
        </div>

        {/* Second row with reverse direction */}
        <div className="relative mt-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-12 sm:space-x-16"
              animate={{ x: [-1920, 0] }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...companies.slice().reverse(), ...companies.slice().reverse(), ...companies.slice().reverse()].map(
                (company, index) => (
                  <motion.div
                    key={`reverse-${company.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center p-2 min-w-[160px] h-20"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter dark:invert"
                    />
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#EFEEEA] dark:from-[#273F4F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#EFEEEA] dark:from-[#273F4F] to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
