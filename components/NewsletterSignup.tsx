"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubscribed(true)
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive marketing insights and automation tips.",
      })

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-r from-[#FE7743] to-[#90CAF9] p-8 rounded-2xl text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-6">
        <motion.div
          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <Mail className="w-8 h-8" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="opacity-90">Get the latest marketing automation insights and tips delivered to your inbox</p>
      </div>

      {isSubscribed ? (
        <motion.div
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Welcome aboard!</h4>
          <p className="opacity-90">Check your email for a confirmation message.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-white text-[#FE7743] hover:bg-white/90 font-semibold"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#FE7743] border-t-transparent rounded-full animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>

          <p className="text-xs opacity-75 text-center">No spam, unsubscribe at any time. We respect your privacy.</p>
        </form>
      )}
    </motion.div>
  )
}
