"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#000000] to-[#273F4F]"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isComplete ? 0 : 1,
        scale: isComplete ? 1.2 : 1,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="loading flex justify-center items-center">
        <div className="loading-wide w-[150px] h-[150px] flex justify-center items-center relative">
          {/* Main animated bars */}
          <motion.div
            className="l1 w-[15px] h-[65px] absolute bg-[#FE7743]"
            animate={{
              y: ["-75px", "45px", "150px"],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          />

          <motion.div
            className="l2 w-[15px] h-[60px] absolute bg-[#90CAF9] rotate-90"
            animate={{
              x: ["-75px", "67px", "150px"],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          />

          {/* Decorative elements */}
          <motion.div
            className="e1 w-[1px] h-[40px] absolute top-0 left-[8%] bg-[#FE7743] opacity-30"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <motion.div
            className="e2 w-[60px] h-[1px] absolute top-[8%] left-0 bg-[#90CAF9] opacity-80"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <motion.div
            className="e3 absolute top-[10%] left-[12%] text-[18px] font-black text-[#FE7743]"
            animate={{ rotate: [0, 180, 360] }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          >
            ✦
          </motion.div>

          <motion.div
            className="e4 w-[1px] h-[40px] absolute top-[90%] right-[10%] bg-[#EFEEEA] opacity-30"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.2,
              delay: 0.1,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <motion.div
            className="e5 w-[40px] h-[1px] absolute top-full right-0 bg-[#273F4F] opacity-30"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <motion.div
            className="e6 absolute top-full right-0 text-[32px] text-[#90CAF9]"
            animate={{ scale: [1, 1.9, 1] }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          >
            ★
          </motion.div>

          <motion.div
            className="e7 w-[1px] absolute bottom-0 left-0 rotate-45 bg-[#FE7743]"
            animate={{
              height: ["0px", "90px", "90px", "0px", "0px"],
              y: ["0%", "-100%", "-100%", "0%", "0%"],
              x: ["0%", "100%", "100%", "0%", "0%"],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          />

          <motion.div
            className="e8 h-[1px] absolute bottom-1/2 left-0 bg-[#90CAF9]"
            animate={{
              width: ["0px", "90px", "0px"],
              x: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          />
        </div>
      </div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-bold text-[#EFEEEA] tracking-wider mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          MEKKY'S PORTFOLIO
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#FE7743] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
