"use client"

import { useEffect, useState, Suspense } from "react"
import { AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import Loader from "@/components/Loader"
import { HeroSkeleton } from "@/components/SkeletonLoader"
import MobileNavigation from "@/components/MobileNavigation"
import DarkModeToggle from "@/components/DarkModeToggle"

import LoadingProgress from "@/components/LoadingProgress"
import PageTransition from "@/components/PageTransition"
import LiveChat from "@/components/LiveChat"
import { ThemeProvider } from "@/components/ThemeProvider"

// Lazy load components for better performance
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <HeroSkeleton />,
})
const About = dynamic(() => import("@/components/About"))
const Skills = dynamic(() => import("@/components/Skills"))
const Experience = dynamic(() => import("@/components/Experience"))
const Projects = dynamic(() => import("@/components/Projects"))

const Services = dynamic(() => import("@/components/Services"))
const Blog = dynamic(() => import("@/components/Blog"))
const Testimonials = dynamic(() => import("@/components/Testimonials"))
const Internships = dynamic(() => import("@/components/Internships"))
const Companies = dynamic(() => import("@/components/Companies"))
const Awards = dynamic(() => import("@/components/Awards"))
const Contact = dynamic(() => import("@/components/Contact"))
const Footer = dynamic(() => import("@/components/Footer"))

const Lectures = dynamic(() => import("@/components/Lectures"))

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Preload critical resources
    const preloadImages = ["/og-image.jpg", "/icon-192x192.png", "/icon-512x512.png"]

    preloadImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })

        // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#EFEEEA] dark:bg-[#000000] transition-colors duration-300">
        <LoadingProgress />
        
        <DarkModeToggle />
        <MobileNavigation />
        <LiveChat />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" onComplete={() => setIsLoading(false)} />
          ) : (
            <PageTransition key="main">
              <main className="relative">
                <Suspense fallback={<HeroSkeleton />}>
                  <Hero />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <About />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Skills />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Experience />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Lectures />
                </Suspense>
                
                <Suspense fallback={<div className="h-96" />}>
                  <Services />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Blog />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Testimonials />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Internships />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Companies />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Awards />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Contact />
                </Suspense>
                <Suspense fallback={<div className="h-96" />}>
                  <Footer />
                </Suspense>
              </main>
            </PageTransition>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
