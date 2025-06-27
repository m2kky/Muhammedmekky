import type { Metadata } from "next"
import CareerJourneyClient from "./CareerJourneyClient"

export const metadata: Metadata = {
  title: "Career Journey",
  description:
    "Explore Muhammed Mekky's professional journey from Junior Marketing Analyst to Senior Marketing Manager & Automation Lead",
}

export default function CareerJourney() {
  return <CareerJourneyClient />
}
