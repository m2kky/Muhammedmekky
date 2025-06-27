"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/data/blogPosts"

export default function Blog() {
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
            Blog & <span className="text-[#FE7743]">Insights</span>
          </h2>
          <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full" />
          <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mt-6 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development, technology trends, and best practices.
          </p>
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: `${blogPosts.length * 280}px` }}>
              {blogPosts.map((post, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <BlogCard post={post} index={index} isInView={isInView} />
                </div>
              ))}
            </div>
          </div>

          {/* View All Blogs Button - Mobile */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => (window.location.href = "/blogs")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FE7743] text-white font-semibold rounded-full hover:bg-[#FE7743]/90 transition-all duration-300 hover:scale-105"
            >
              View All Blogs
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} isInView={isInView} />
            ))}
          </div>

          {/* View All Blogs Button - Desktop */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => (window.location.href = "/blogs")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FE7743] text-white font-semibold rounded-full hover:bg-[#FE7743]/90 transition-all duration-300 hover:scale-105"
            >
              View All Blogs
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post, index, isInView }: { post: any; index: number; isInView: boolean }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="block group">
      <motion.article
        className="group bg-[#EFEEEA] dark:bg-[#273F4F] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="relative overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#FE7743] text-white text-xs font-semibold rounded-full">{post.category}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-[#273F4F]" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-[#273F4F] dark:text-[#90CAF9] mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-3 group-hover:text-[#FE7743] transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-[#273F4F] dark:text-[#90CAF9] leading-relaxed">{post.excerpt}</p>
        </div>
      </motion.article>
    </Link>
  )
}
