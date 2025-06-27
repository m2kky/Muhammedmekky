"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/components/ThemeProvider"
import { Moon, Sun } from "lucide-react"

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-14 h-14 bg-white dark:bg-[#273F4F] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    >
      <motion.div
        className="relative w-8 h-8"
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: theme === "dark" ? 0 : 1,
            scale: theme === "dark" ? 0.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-6 h-6 text-[#FE7743]" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-6 h-6 text-[#90CAF9]" />
        </motion.div>
      </motion.div>

      {/* BB8-style indicator */}
      <motion.div
        className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FE7743] rounded-full"
        animate={{
          backgroundColor: theme === "dark" ? "#90CAF9" : "#FE7743",
          scale: [1, 1.2, 1],
        }}
        transition={{
          backgroundColor: { duration: 0.3 },
          scale: { duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 },
        }}
      />
    </motion.button>
  )
}
