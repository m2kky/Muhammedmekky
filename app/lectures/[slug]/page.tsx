import categoriesJson from "@/data/projects.json"
import { notFound } from "next/navigation"
import LectureDetail from "@/components/LectureDetail"

function getLectureBySlug(slug: string) {
  const educationCategory = (categoriesJson as any[]).find(cat => cat.name === "Education & Training")
  if (!educationCategory) return null
  return educationCategory.projects.find((lecture: any) =>
    lecture.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === slug
  )
}

export default function LecturePage({ params }: { params: { slug: string } }) {
  const lecture = getLectureBySlug(params.slug)
  if (!lecture) return notFound()

  return (
    <LectureDetail
      title={lecture.title}
      subtitle={lecture.subtitle}
      videoUrl={lecture.liveUrl}
      description={lecture.description}
      tags={lecture.technologies}
      resourcesUrl={lecture.resourcesUrl}
    />
  )
}