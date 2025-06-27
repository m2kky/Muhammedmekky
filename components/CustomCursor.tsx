"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring } from "framer-motion"

interface CursorState {
  x: number
  y: number
  isHovering: boolean
  isClicking: boolean
  cursorType: "default" | "hover" | "text" | "drag" | "view" | "magnetic"
  text?: string
}

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    cursorType: "default",
  })
  const [isMobile, setIsMobile] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const trailIdRef = useRef(0)
  const magneticElements = useRef<Set<HTMLElement>>(new Set())

  // Smooth cursor movement with springs
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })
  const trailX = useSpring(0, { stiffness: 150, damping: 15 })
  const trailY = useSpring(0, { stiffness: 150, damping: 15 })

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const newX = e.clientX
        const newY = e.clientY

        setCursorState((prev) => ({ ...prev, x: newX, y: newY }))

        // Handle magnetic effect
        const target = e.target as HTMLElement
        const magneticElement = target.closest(".magnetic-hover") as HTMLElement

        if (magneticElement && !magneticElements.current.has(magneticElement)) {
          magneticElements.current.add(magneticElement)

          const rect = magneticElement.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const distance = Math.sqrt(Math.pow(newX - centerX, 2) + Math.pow(newY - centerY, 2))

          if (distance < 100) {
            const strength = Math.max(0, 1 - distance / 100)
            const deltaX = (newX - centerX) * strength * 0.3
            const deltaY = (newY - centerY) * strength * 0.3

            magneticElement.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${1 + strength * 0.1})`
            setCursorState((prev) => ({ ...prev, cursorType: "magnetic" }))
          }
        } else if (!magneticElement) {
          // Reset all magnetic elements
          magneticElements.current.forEach((el) => {
            el.style.transform = "translate(0px, 0px) scale(1)"
          })
          magneticElements.current.clear()
        }

        cursorX.set(newX)
        cursorY.set(newY)
        trailX.set(newX)
        trailY.set(newY)

        // Add to trail
        setTrail((prev) => {
          const newTrail = [...prev, { x: newX, y: newY, id: trailIdRef.current++ }]
          return newTrail.slice(-12) // Keep more trail points
        })

        // Detect cursor type based on element
        let newCursorType: CursorState["cursorType"] = "default"
        let text = ""

        if (target.tagName === "A" || target.closest("a")) {
          newCursorType = "hover"
          text = "CLICK"
        } else if (
          target.tagName === "BUTTON" ||
          target.closest("button") ||
          target.getAttribute("role") === "button"
        ) {
          newCursorType = "hover"
          text = "CLICK"
        } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
          newCursorType = "text"
          text = "TYPE"
        } else if (target.closest(".service-card") || target.closest('[data-cursor="view"]')) {
          newCursorType = "view"
          text = "VIEW"
        } else if (target.closest('[data-cursor="drag"]')) {
          newCursorType = "drag"
          text = "DRAG"
        } else if (target.closest(".magnetic-hover")) {
          newCursorType = "magnetic"
          text = "HOVER"
        }

        setCursorState((prev) => ({
          ...prev,
          cursorType: newCursorType,
          text: text,
        }))
      }

      const handleMouseDown = () => {
        setCursorState((prev) => ({ ...prev, isClicking: true }))
      }

      const handleMouseUp = () => {
        setCursorState((prev) => ({ ...prev, isClicking: false }))
      }

      const handleMouseEnter = () => {
        setCursorState((prev) => ({ ...prev, isHovering: true }))
      }

      const handleMouseLeave = () => {
        setCursorState((prev) => ({ ...prev, isHovering: false }))
        // Reset all magnetic elements when leaving
        magneticElements.current.forEach((el) => {
          el.style.transform = "translate(0px, 0px) scale(1)"
        })
        magneticElements.current.clear()
      }

      // Add event listeners to interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .service-card, .magnetic-hover',
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mouseup", handleMouseUp)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mouseup", handleMouseUp)
        window.removeEventListener("resize", checkMobile)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile, cursorX, cursorY, trailX, trailY])

  if (isMobile) return null

  const getCursorSize = () => {
    switch (cursorState.cursorType) {
      case "hover":
        return { main: 6, trail: 40 }
      case "text":
        return { main: 2, trail: 20 }
      case "view":
        return { main: 8, trail: 50 }
      case "drag":
        return { main: 10, trail: 60 }
      case "magnetic":
        return { main: 8, trail: 60 }
      default:
        return { main: 4, trail: 32 }
    }
  }

  const getCursorColor = () => {
    switch (cursorState.cursorType) {
      case "hover":
        return "#FE7743"
      case "text":
        return "#90CAF9"
      case "view":
        return "#273F4F"
      case "drag":
        return "#FE7743"
      case "magnetic":
        return "#FE7743"
      default:
        return "#FE7743"
    }
  }

  const sizes = getCursorSize()
  const color = getCursorColor()

  return (
    <>
      {/* Enhanced trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-40 rounded-full"
          style={{
            backgroundColor: color,
            opacity: ((index + 1) / trail.length) * 0.4,
            width: 2 + index * 0.5,
            height: 2 + index * 0.5,
            x: point.x - (1 + index * 0.25),
            y: point.y - (1 + index * 0.25),
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          backgroundColor: color,
          width: sizes.main * 2,
          height: sizes.main * 2,
          x: cursorState.x - sizes.main,
          y: cursorState.y - sizes.main,
        }}
        animate={{
          scale: cursorState.isClicking ? 0.8 : cursorState.cursorType === "magnetic" ? 1.2 : 1,
          rotate: cursorState.cursorType === "drag" ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Enhanced trailing cursor with text */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border-2 flex items-center justify-center"
        style={{
          borderColor: color,
          width: sizes.trail,
          height: sizes.trail,
          x: cursorState.x - sizes.trail / 2,
          y: cursorState.y - sizes.trail / 2,
        }}
        animate={{
          scale: cursorState.isHovering ? 1.2 : 1,
          opacity: cursorState.isHovering ? 1 : 0.7,
          borderWidth: cursorState.cursorType === "magnetic" ? 3 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        {cursorState.text && cursorState.isHovering && (
          <motion.span
            className="text-xs font-bold"
            style={{ color }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>

      {/* Magnetic field effect */}
      {cursorState.cursorType === "magnetic" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-30 rounded-full border border-dashed"
          style={{
            borderColor: `${color}40`,
            width: 120,
            height: 120,
            x: cursorState.x - 60,
            y: cursorState.y - 60,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
        />
      )}

      {/* Enhanced click ripple effect */}
      {cursorState.isClicking && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-45 rounded-full border-2"
            style={{
              borderColor: color,
              x: cursorState.x - 25,
              y: cursorState.y - 25,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 50, height: 50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-44 rounded-full border"
            style={{
              borderColor: `${color}60`,
              x: cursorState.x - 35,
              y: cursorState.y - 35,
            }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 70, height: 70, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
        </>
      )}
    </>
  )
}
