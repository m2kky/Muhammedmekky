"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPlane, setShowPlane] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setShowPlane(true)

    // Hide plane after animation
    setTimeout(() => setShowPlane(false), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#000000] relative overflow-hidden"
    >
      {/* Flying Plane Animation */}
      {showPlane && (
        <motion.div
          className="fixed top-1/2 -left-20 z-50 pointer-events-none"
          initial={{ x: -100, y: 0 }}
          animate={{ x: window.innerWidth + 100, y: -50 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <div className="relative">
            <div className="text-4xl">✈️</div>
            <motion.div
              className="absolute -right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-[#273F4F] px-4 py-2 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-[#FE7743] font-semibold whitespace-nowrap">Your message has been sent! 🚀</p>
            </motion.div>
            {/* Smoke trail */}
            <motion.div
              className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 2 }}
            />
          </div>
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-4">
            Get In <span className="text-[#FE7743]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-6">Let's Start a Conversation</h3>
              <p className="text-[#273F4F] dark:text-[#90CAF9] leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                specific project in mind or just want to explore possibilities, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 p-4 bg-[#EFEEEA] dark:bg-[#273F4F] rounded-xl"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#FE7743] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA]">Email</h4>
                  <p className="text-[#273F4F] dark:text-[#90CAF9]">Muhammedmekky4@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-[#EFEEEA] dark:bg-[#273F4F] rounded-xl"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#FE7743] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA]">Phone</h4>
                  <p className="text-[#273F4F] dark:text-[#90CAF9]">+201098620547</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-[#EFEEEA] dark:bg-[#273F4F] rounded-xl"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#FE7743] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA]">Location</h4>
                  <p className="text-[#273F4F] dark:text-[#90CAF9]">Caito, Egypt</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#000000] dark:text-[#EFEEEA] mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#FE7743] focus:ring-0 bg-white dark:bg-[#273F4F] text-[#000000] dark:text-[#EFEEEA]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#000000] dark:text-[#EFEEEA] mb-2">Last Name</label>
                  <Input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#FE7743] focus:ring-0 bg-white dark:bg-[#273F4F] text-[#000000] dark:text-[#EFEEEA]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#000000] dark:text-[#EFEEEA] mb-2">Email</label>
                <Input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#FE7743] focus:ring-0 bg-white dark:bg-[#273F4F] text-[#000000] dark:text-[#EFEEEA]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#000000] dark:text-[#EFEEEA] mb-2">Subject</label>
                <Input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#FE7743] focus:ring-0 bg-white dark:bg-[#273F4F] text-[#000000] dark:text-[#EFEEEA]"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#000000] dark:text-[#EFEEEA] mb-2">Message</label>
                <Textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#FE7743] focus:ring-0 bg-white dark:bg-[#273F4F] text-[#000000] dark:text-[#EFEEEA] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FE7743] hover:bg-[#FE7743]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
