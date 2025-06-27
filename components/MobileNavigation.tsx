"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Mail, Calendar, Facebook, Instagram, Linkedin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import type { ComponentType } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  // main links
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Career Journey", href: "/career-journey", icon: Calendar },
  { name: "Contact", href: "/#contact", icon: Mail },
]

// Social links used in the footer and mobile nav
type SocialLink = { name: string; icon: ComponentType<any>; url: string }

const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/muhammedmekky" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/muhammedm2kky" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/muhammedmekky/" },
  { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@muhammedm2kky" },
]

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 bg-white dark:bg-[#273F4F] rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-[#FE7743]" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-[#FE7743]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 w-80 h-full bg-white dark:bg-[#000000] z-50 lg:hidden shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-20">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-2">Ahmed Hassan</h2>
                  <p className="text-[#FE7743] font-medium">Marketing Automation Specialist</p>
                </motion.div>

                <nav className="space-y-2">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-[#FE7743] text-white"
                              : "text-[#273F4F] dark:text-[#90CAF9] hover:bg-[#FE7743]/10"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                <motion.div
                  className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm text-[#273F4F] dark:text-[#90CAF9] mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        className="w-10 h-10 bg-[#FE7743]/10 rounded-full flex items-center justify-center text-[#FE7743] hover:bg-[#FE7743] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                             )
          })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
