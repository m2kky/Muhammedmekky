"use client"

import { motion } from "framer-motion"

interface SkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular"
  animation?: boolean
}

export function Skeleton({ className = "", variant = "rectangular", animation = true }: SkeletonProps) {
  const baseClasses = "bg-gray-200 dark:bg-gray-700"
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  }

  const shimmerAnimation = animation
    ? {
        backgroundPosition: ["200% 0", "-200% 0"],
      }
    : {}

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        background: animation ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" : undefined,
        backgroundSize: animation ? "200% 100%" : undefined,
      }}
      animate={shimmerAnimation}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <Skeleton className="h-16 w-96 mx-auto mb-6" />
        <Skeleton className="h-6 w-80 mx-auto mb-4" />
        <Skeleton className="h-6 w-72 mx-auto mb-8" />
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-[#273F4F] p-6 rounded-2xl shadow-lg">
      <Skeleton variant="circular" className="w-16 h-16 mx-auto mb-4" />
      <Skeleton className="h-6 w-32 mx-auto mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    </div>
  )
}
