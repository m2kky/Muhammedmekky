;/\\```ceipprstty
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWork } from "react-icons/md"
import { FaSchool } from "react-icons/fa"

interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  description: string
  date: string
  logo: string // Changed from import to string
  type: "work" | "education"
}

const Experience: React.FC<{ experiences: ExperienceItem[] }> = ({ experiences }) => {
  return (
    <VerticalTimeline>
      {experiences.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date={item.date}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={item.type === "work" ? <MdWork /> : <FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {item.company}, {item.location}
          </h4>
          <img
            src={item.logo || "/placeholder.svg"}
            alt={`${item.company} logo`}
            style={{ width: "100px", marginBottom: "10px" }}
          />
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default Experience

// components/Companies.tsx
import type React from "react"

interface Company {
  id: number
  name: string
  logo: string // Changed from import to string
  description: string
  link: string
}

const Companies: React.FC<{ companies: Company[] }> = ({ companies }) => {
  return (
    <div className="companies-container">
      {companies.map((company) => (
        <div key={company.id} className="company-card">
          <a href={company.link} target="_blank" rel="noopener noreferrer">
            <img src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} className="company-logo" />
            <h3>{company.name}</h3>
          </a>
          <p>{company.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Companies;
\`\`\`
