"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with this developer was an absolute pleasure. They delivered a high-quality product on time and exceeded our expectations. The attention to detail and technical expertise is outstanding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The level of professionalism and technical skill demonstrated throughout our project was impressive. They understood our requirements perfectly and delivered a solution that transformed our business.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Exceptional work quality and great communication throughout the project. The developer brought creative solutions to complex problems and delivered results that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder, WebSolutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Outstanding technical expertise combined with excellent project management skills. They delivered our project on time and within budget while maintaining the highest quality standards.",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-advance testimonials on desktop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#EFEEEA] dark:bg-[#273F4F]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-4">
            Client <span className="text-[#FE7743]">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6">What my clients say about working with me</p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#000000] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-[#273F4F] dark:text-[#90CAF9]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-[#000000] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-[#273F4F] dark:text-[#90CAF9]" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-[#FE7743] scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-[#FE7743]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white dark:bg-[#000000] p-8 sm:p-12 mx-4 rounded-2xl shadow-xl">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-[#FE7743] fill-current" />
          ))}
        </div>

        <blockquote className="text-lg sm:text-xl text-[#273F4F] dark:text-[#90CAF9] leading-relaxed mb-8 italic">
          "{testimonial.content}"
        </blockquote>

        <div className="flex items-center justify-center space-x-4">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={80}
            height={80}
            className="w-16 h-16 rounded-full object-cover border-4 border-[#FE7743]"
          />
          <div className="text-left">
            <h4 className="font-bold text-[#000000] dark:text-[#EFEEEA] text-lg">{testimonial.name}</h4>
            <p className="text-[#273F4F] dark:text-[#90CAF9]">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
