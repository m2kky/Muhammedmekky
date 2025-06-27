"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Award, TrendingUp, Building } from "lucide-react"
import Link from "next/link"
import PageTransition from "@/components/PageTransition"
import LoadingProgress from "@/components/LoadingProgress"
import CustomCursor from "@/components/CustomCursor"
import DarkModeToggle from "@/components/DarkModeToggle"
import MobileNavigation from "@/components/MobileNavigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import { ThemeProvider } from "@/components/ThemeProvider"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const careerJourney = [
  {
    title: "AI & Automation Specialist",
    company: "Qudraat",
    period: "Dec 2024 — Feb 2025",
    location: "Dokki",
    type: "Internship",
    description:
      "Designed and implemented AI-driven workflows to automate content creation and workshop management, increasing operational efficiency by over 40%.",
    achievements: [
      "Designed AI-driven workflows increasing operational efficiency by 40%",
      "Developed custom GPT agents for educational and branding purposes",
      "Integrated automation tools (Make.com, Google Sheets, WhatsApp API)",
      "Conducted hands-on training for team members on AI automation workflows",
      "Contributed to 7+ AI-powered workshops attended by 350+ youth participants",
      "Achieved 95% satisfaction rate through automated feedback systems",
    ],
    technologies: ["Make.com", "Google Sheets", "WhatsApp API", "Custom GPT", "AI Tools", "N8N"],
  },
  {
    title: "Community Manager",
    company: "Qudraat",
    period: "Oct 2024 — Present",
    location: "Dokki",
    type: "Current Role",
    description:
      "Led internal team coordination and managed Qudraat's community across multiple platforms, ensuring continuous engagement with over 500 youth participants.",
    achievements: [
      "Organized tasks and streamlined workflows with automation tools",
      "Managed community across WhatsApp, Facebook Groups, and offline meetups",
      "Ensured continuous engagement with 500+ youth participants",
      "Delivered peer learning sessions and interactive micro-workshops",
      "Acted as communication bridge between teams and participants",
      "Fostered culture of collaboration contributing to high participant retention",
    ],
    technologies: ["WhatsApp", "Facebook Groups", "Community Management Tools", "Analytics"],
  },
  {
    title: "Social Media Specialist",
    company: "Qudraat",
    period: "Oct 2024 — Present",
    location: "Dokki",
    type: "Current Role",
    description:
      "Developed and executed tailored content strategies across Meta, TikTok, and LinkedIn to promote Qudraat's educational initiatives and youth programs.",
    achievements: [
      "Developed content strategies across Meta, TikTok, and LinkedIn",
      "Created high-impact Reels boosting engagement rates by 60%",
      "Collaborated with video editors and graphic designers",
      "Monitored performance metrics to optimize content calendars",
      "Led digital communication for workshops and courses",
    ],
    technologies: ["Meta", "TikTok", "LinkedIn", "Content Creation Tools", "Analytics"],
  },
  {
    title: "Event Planner",
    company: "Youth Qudraat",
    period: "Nov 2024 — Present",
    location: "Giza",
    type: "Current Role",
    description:
      "Led planning and execution of weekly workshops delivering high-impact learning experiences for over 500 participants across diverse topics.",
    achievements: [
      "Led planning and execution of weekly workshops for 500+ participants",
      "Coordinated logistics, venue setup, and facilitator briefs",
      "Designed multi-step registration workflows achieving 90% attendance rates",
      "Implemented automated systems for check-in and feedback collection",
      "Successfully delivered 13 workshops in Season 1",
      "Maintained consistent engagement and operational excellence",
    ],
    technologies: ["Google Forms", "Google Sheets", "Notion", "WhatsApp API", "Event Management"],
  },
  {
    title: "Ai Specialist",
    company: "Qudraat",
    period: "Sep 2024 — Present",
    location: "Giza - Remotely",
    type: "Current Role",
    description:
      "Developed automation solutions and AI-driven systems that autonomously perform complex tasks with minimal human intervention.",
    achievements: [
      "Developed automation solution identifying and resolving system outages",
      "Implemented best practices for automation development",
      "Created AI-driven system performing complex tasks autonomously",
      "Developed AI-assisted decision support system",
      "Improved operational efficiency and cost savings",
    ],
    technologies: ["AI Tools", "Automation Systems", "Decision Support Systems", "Process Optimization"],
  },
  {
    title: "Automation Specialist",
    company: "Ausrah",
    period: "Nov 2024 — Present",
    location: "Cairo - Remotely",
    type: "Current Role",
    description:
      "Specialized in developing and implementing automation solutions to streamline business processes and improve operational efficiency.",
    achievements: [
      "Developed comprehensive automation solutions",
      "Streamlined business processes reducing manual work",
      "Improved operational efficiency across multiple departments",
      "Implemented monitoring and alerting systems",
    ],
    technologies: ["Automation Tools", "Process Management", "Monitoring Systems"],
  },
  {
    title: "Marketing Operation Manager",
    company: "Scarpe",
    period: "Apr 2024 — Oct 2024",
    location: "Giza - Onsite",
    type: "Full-time",
    description:
      "Led daily marketing operations and developed growth-focused strategies, increasing social media engagement by 45% and improving website functionality.",
    achievements: [
      "Increased social media engagement by 45%",
      "Enhanced website functionality improving user experience",
      "Directed e-commerce marketing initiatives",
      "Optimized e-commerce site resulting in 25% increase in sales",
      "Managed SEO enhancements increasing traffic to 13,000 monthly visitors",
      "Streamlined backend processes using Shopify's Liquid framework",
    ],
    technologies: ["Shopify", "Liquid Framework", "SEO Tools", "Analytics", "E-commerce Platforms"],
  },
  {
    title: "Shopify Developer",
    company: "Forbed",
    period: "Jun 2024 — Aug 2024",
    location: "Cairo - Remotely",
    type: "Contract",
    description:
      "Specialized in Shopify development, optimizing e-commerce websites and improving user experience through technical enhancements.",
    achievements: [
      "Redesigned product landing pages after analyzing customer behavior",
      "Adjusted advertising campaigns for better target audience reach",
      "Improved website performance and user experience",
      "Implemented technical optimizations for better conversion rates",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "E-commerce Development"],
  },
  {
    title: "Personal Branding Content Creator",
    company: "Qudraat (Dr. Muhammed Harby)",
    period: "May 2024 — Aug 2024",
    location: "Cairo - Remotely",
    type: "Contract",
    description:
      "Created and executed personal branding content strategies, significantly increasing social media engagement and sales performance.",
    achievements: [
      "Increased social media engagement by 213% in two months",
      "Collaborated with marketing and sales teams for integrated campaigns",
      "Generated 60% increase in sales within 2 months",
      "Created and executed social media campaigns increasing customer loyalty",
      "Strengthened audience engagement through personalized interactions",
    ],
    technologies: ["Social Media Platforms", "Content Creation", "Analytics", "Campaign Management"],
  },
  {
    title: "Social Media Specialist",
    company: "Curva - Sports Wear",
    period: "May 2022 — Jun 2024",
    location: "Giza - Hybrid",
    type: "Full-time",
    description:
      "Managed comprehensive social media strategies for sports wear brand, creating engaging content and implementing customer service protocols.",
    achievements: [
      "Created and executed social media campaigns increasing sales and loyalty",
      "Strengthened audience engagement through creative storytelling",
      "Collaborated with design team to align visuals with marketing objectives",
      "Implemented customer service protocols across social media platforms",
    ],
    technologies: ["Social Media Management", "Content Creation", "Customer Service Tools"],
  },
  {
    title: "Content Creator",
    company: "Forbed",
    period: "Feb 2022 — May 2023",
    location: "Cairo - Onsite",
    type: "Full-time",
    description:
      "Crafted storytelling content highlighting Arabic heritage and culture, significantly increasing brand awareness and audience engagement.",
    achievements: [
      "Crafted storytelling content increasing brand awareness by 35%",
      "Designed and managed promotional campaigns on social media",
      "Produced engaging videos and multimedia content",
      "Published over 100 pieces of high-engagement content",
      "Achieved 119% increase in audience reach",
      "Leveraged analytics tools to refine strategies",
    ],
    technologies: ["Content Creation Tools", "Video Production", "Analytics", "Social Media"],
  },
  {
    title: "Media Buyer",
    company: "Asl- Alhaloub",
    period: "Feb 2023 — Dec 2023",
    location: "Cairo - Remotely",
    type: "Contract",
    description:
      "Designed and implemented Facebook and Instagram ad campaigns tailored to premium audiences, achieving significant conversion rate improvements.",
    achievements: [
      "Designed Facebook and Instagram ad campaigns for premium audiences",
      "Increased conversion rates by 30% through data-driven optimization",
      "Developed and launched promotional offers",
      "Enhanced brand awareness and customer engagement",
    ],
    technologies: ["Facebook Ads", "Instagram Ads", "Analytics", "Campaign Optimization"],
  },
  {
    title: "Social Media Specialist",
    company: "Dar Al-Ma'ajim",
    period: "Jun 2021 — Jun 2022",
    location: "Giza - Remotely",
    type: "Full-time",
    description:
      "Designed promotional and educational content for educational institution, training teams and significantly increasing engagement and traffic.",
    achievements: [
      "Designed promotional and educational content increasing engagement by 66%",
      "Trained sales and social media teams on modern communication approaches",
      "Produced and scheduled over 200 multimedia content pieces quarterly",
      "Leveraged analytics tools to increase audience engagement and reach",
    ],
    technologies: ["Content Creation", "Team Training", "Analytics", "Social Media Management"],
  },
]

export default function CareerJourneyClient() {
  const ref = useRef(null)
  const timelineRef = useRef<HTMLDivElement[]>([])
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (typeof window === "undefined") return

    const timeline = timelineRef.current
    if (!timeline || timeline.length === 0) return

    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    timeline.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        },
      )

      const achievements = item.querySelectorAll(".achievement-item")
      gsap.fromTo(
        achievements,
        { x: -15, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#EFEEEA] dark:bg-[#000000] transition-colors duration-300">
        <LoadingProgress />
        <CustomCursor />
        <DarkModeToggle />
        <MobileNavigation />
        <Breadcrumbs />

        <PageTransition>
          <div className="relative">
            {/* Enhanced Parallax Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, #FE7743 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, #90CAF9 0%, transparent 50%),
                                   radial-gradient(circle at 40% 80%, #273F4F 0%, transparent 50%)`,
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#FE7743]/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="mb-8 border-[#FE7743] text-[#FE7743] hover:bg-[#FE7743] hover:text-white magnetic-hover"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Portfolio
                    </Button>
                  </Link>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-6">
                    Career <span className="text-[#FE7743]">Journey</span>
                  </h1>
                  <div className="w-20 h-1 bg-[#FE7743] mx-auto rounded-full mb-6" />
                  <p className="text-xl text-[#273F4F] dark:text-[#90CAF9] max-w-3xl mx-auto">
                    From Content Creator to AI Automation Specialist - A comprehensive journey through marketing,
                    automation, and community building with Muhammed Mekky
                  </p>
                </motion.div>

                {/* Timeline */}
                <div ref={ref} className="relative">
                  <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#FE7743] transform lg:-translate-x-1/2" />

                  <div className="space-y-12">
                    {careerJourney.map((job, index) => (
                      <motion.div
                        key={index}
                        ref={(el) => {
                          if (el) timelineRef.current[index] = el
                        }}
                        className={`relative flex items-start ${
                          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        }`}
                      >
                        <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-[#FE7743] rounded-full transform lg:-translate-x-1/2 z-10 shadow-lg mt-2" />

                        <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                          <div className="bg-white dark:bg-[#273F4F] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 magnetic-hover">
                            {/* Job Header */}
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-4 h-4 text-[#FE7743]" />
                                <span className="text-[#FE7743] font-semibold text-sm">{job.period}</span>
                                <span className="px-2 py-1 bg-[#FE7743]/10 text-[#FE7743] rounded-full text-xs">
                                  {job.type}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-[#000000] dark:text-[#EFEEEA] mb-2">{job.title}</h3>
                              <div className="flex items-center gap-2 mb-1">
                                <Building className="w-4 h-4 text-[#273F4F] dark:text-[#90CAF9]" />
                                <p className="text-[#273F4F] dark:text-[#90CAF9] font-semibold">{job.company}</p>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-[#273F4F] dark:text-[#90CAF9]">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </div>
                            </div>

                            <p className="text-[#273F4F] dark:text-[#90CAF9] mb-4 leading-relaxed text-sm">
                              {job.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-4">
                              <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA] mb-3 flex items-center gap-2 text-sm">
                                <Award className="w-4 h-4 text-[#FE7743]" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-1">
                                {job.achievements.map((achievement, i) => (
                                  <li key={i} className="achievement-item flex items-start gap-2">
                                    <TrendingUp className="w-3 h-3 text-[#FE7743] mt-0.5 flex-shrink-0" />
                                    <span className="text-[#273F4F] dark:text-[#90CAF9] text-xs leading-relaxed">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold text-[#000000] dark:text-[#EFEEEA] mb-2 text-sm">
                                Technologies & Tools
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {job.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 bg-[#FE7743]/10 text-[#FE7743] rounded-full text-xs font-medium hover:bg-[#FE7743] hover:text-white transition-colors duration-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <motion.div
                  className="text-center mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-lg text-[#273F4F] dark:text-[#90CAF9] mb-8">
                    Ready to discuss how my experience can drive your marketing and automation success?
                  </p>
                  <Link href="/#contact">
                    <Button
                      size="lg"
                      className="bg-[#FE7743] hover:bg-[#FE7743]/90 text-white px-8 py-4 text-lg font-semibold rounded-full magnetic-hover"
                    >
                      Let's Connect
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}
