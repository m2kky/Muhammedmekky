"use client"

import Image from "next/image"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/data/blogPosts"

export default function BlogDetail({ post }: { post: BlogPost }) {
  return (
    <article className="max-w-3xl mx-auto px-4 lg:px-0 py-16">
      {/* Hero Image */}
      <div className="relative w-full h-60 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg mb-12">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#FE7743]/10 text-[#FE7743] font-medium">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 leading-tight text-[#273F4F] dark:text-[#EFEEEA]">
        {post.title}
      </h1>

      {/* Content */}
      <section className="prose lg:prose-lg max-w-none dark:prose-invert prose-headings:text-[#273F4F] dark:prose-headings:text-[#EFEEEA] prose-a:text-[#FE7743]">
        {post.content.map((block, idx) => (
          <div key={idx} dangerouslySetInnerHTML={{ __html: block }} />
        ))}
      </section>

      {/* Back Link */}
      <div className="mt-12">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FE7743] font-semibold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </div>
    </article>
  )
}
