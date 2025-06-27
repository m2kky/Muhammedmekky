"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
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
            About <span className="text-[#FE7743]">Muhammed</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-lg text-[#273F4F] dark:text-[#90CAF9] mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Dynamic Marketing Manager & AI Automation Specialist with a proven track record of developing compelling
              strategies that drive measurable business growth. Currently serving as Community Manager at Qudraat, I've
              successfully managed and grown communities with over 500 participants while leveraging AI tools to boost
              engagement by 213%.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div>
                <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA] mb-2">Community Growth</h4>
                <p className="text-[#FE7743] font-bold text-xl">500+ Participants</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA] mb-2">Engagement Boost</h4>
                <p className="text-[#FE7743] font-bold text-xl">213% Increase</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA] mb-2">Automation Efficiency</h4>
                <p className="text-[#FE7743] font-bold text-xl">40% Improvement</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA] mb-2">Satisfaction Rate</h4>
                <p className="text-[#FE7743] font-bold text-xl">95% Achieved</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[#FE7743] shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Mekky1.svg"
                  alt="Muhammed Mekky Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements around profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#90CAF9] rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-white font-bold">AI</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#273F4F] rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <span className="text-white font-bold">📊</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-6 w-10 h-10 bg-[#FE7743] rounded-full flex items-center justify-center shadow-lg"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              >
                <span className="text-white font-bold">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
