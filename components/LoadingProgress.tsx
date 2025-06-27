"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const handleStart = useCallback(() => {
    setIsVisible(true)
    setProgress(0)
  }, [])

  const handleComplete = useCallback(() => {
    setProgress(100)
    const timeoutId = setTimeout(() => {
      setIsVisible(false)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [])

  const handleProgress = useCallback(() => {
    setProgress((prev) => Math.min(prev + Math.random() * 30, 90))
  }, [])

  useEffect(() => {
    // Handle route changes
    handleStart()
    const timer = setTimeout(() => {
      handleComplete()
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname, handleStart, handleComplete])

  useEffect(() => {
    if (!isVisible) return

    // Simulate loading progress
    const progressInterval = setInterval(handleProgress, 200)

    return () => clearInterval(progressInterval)
  }, [isVisible, handleProgress])

  useEffect(() => {
    // Handle page load events
    const handleLoad = () => {
      handleComplete()
    }

    const handleBeforeUnload = () => {
      handleStart()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad)
      window.addEventListener("beforeunload", handleBeforeUnload)

      return () => {
        window.removeEventListener("load", handleLoad)
        window.removeEventListener("beforeunload", handleBeforeUnload)
      }
    }
  }, [handleStart, handleComplete])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#FE7743] via-[#90CAF9] to-[#FE7743] shadow-lg"
        style={{
          background: `linear-gradient(90deg, 
            #FE7743 0%, 
            #90CAF9 50%, 
            #FE7743 100%)`,
        }}
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Glowing effect */}
      <motion.div
        className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#FE7743]/50 to-transparent blur-sm"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </motion.div>
  )
}
