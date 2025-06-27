import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import categoriesJson from "@/data/projects.json"
import Image from "next/image"
import Link from "next/link"

const educationCategory = (categoriesJson as any[]).find(cat => cat.name === "Education & Training")
const lectures = educationCategory ? educationCategory.projects : []

function LectureCard({ lecture, index, isInView }: { lecture: any; index: number; isInView: boolean }) {
  const slug = lecture.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <motion.div
      className="relative h-96 perspective-1000"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg">
          <Image src={lecture.image || "/placeholder.svg"} alt={lecture.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{lecture.title}</h3>
            {lecture.subtitle && <p className="text-sm opacity-80 mb-1">{lecture.subtitle}</p>}
            <div className="flex flex-wrap gap-2">
              {lecture.technologies?.slice(0, 3).map((tech: string) => (
                <span key={tech} className="px-2 py-1 bg-white/20 rounded-full text-xs">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-white dark:bg-[#000000] p-6 shadow-lg transform rotateY-180 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-1">{lecture.title}</h3>
            {lecture.subtitle && <h4 className="text-sm text-[#FE7743] mb-3">{lecture.subtitle}</h4>}
            <p className="text-[#273F4F] dark:text-[#90CAF9] mb-6 leading-relaxed">{lecture.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {lecture.technologies?.map((tech: string) => (
                <span key={tech} className="px-3 py-1 bg-[#FE7743]/10 text-[#FE7743] rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
          <Link href={`/lectures/${slug}`} className="mt-4 inline-block bg-[#FE7743] hover:bg-[#FE7743]/90 text-white px-4 py-2 rounded-full text-center transition-colors duration-300">
          Open Lesson 
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Lectures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] dark:bg-[#1A2633]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-4">
            Lectures
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lectures.map((lecture: any, index: number) => (
            <LectureCard key={index} lecture={lecture} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
} 