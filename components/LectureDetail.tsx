"use client"

import Link from "next/link"
import React from "react"

export type LectureDetailProps = {
  title: string
  subtitle?: string
  videoUrl?: string
  description?: string
  tags?: string[]
  resourcesUrl?: string
  learnPoints?: string[]
}

function transformVideoUrl(url?: string) {
  if (!url) return ""
  // Handle Google Drive share links
  if (url.includes("drive.google.com") && url.includes("/view")) {
    return url.replace("/view", "/preview")
  }
  // Handle YouTube watch links
  if (url.includes("youtube.com/watch")) {
    return url.replace("watch?v=", "embed/")
  }
  // Handle youtu.be short links
  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "www.youtube.com/embed/")
  }
  return url
}

export default function LectureDetail({
  title,
  subtitle,
  videoUrl,
  description,
  tags = [],
  resourcesUrl,
  learnPoints,
}: LectureDetailProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      {/* Title */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#FF7315] mb-2 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-xl text-gray-700 dark:text-gray-300">{subtitle}</h2>
        )}
      </header>

      {/* Video */}
      {videoUrl && (
        <div className="w-full max-w-[960px] mx-auto mb-10">
          <div className="aspect-video shadow-lg rounded-lg overflow-hidden">
            <iframe
              src={transformVideoUrl(videoUrl)}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              title={title}
            />
          </div>
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="bg-[#F9F9F9] dark:bg-[#1F1F1F] p-6 rounded-lg mb-10">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Topics Covered:
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#FFF3E6] text-[#FF7315] text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* What You'll Learn */}
      {learnPoints && learnPoints.length > 0 && (
        <section className="bg-[#F9F9F9] dark:bg-[#1F1F1F] p-6 rounded-lg mb-12">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            What You’ll Learn
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {learnPoints.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Resources */}
      {resourcesUrl && (
        <section className="mb-12 text-center">
          <a
            href={resourcesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF7315] text-white px-6 py-3 rounded-full shadow hover:bg-[#e56b13] transition-colors duration-300"
          >
            View Resources
          </a>
        </section>
      )}

      {/* Navigation */}
      <footer className="text-center mt-20">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Lectures
        </Link>
      </footer>
    </article>
  )
}
