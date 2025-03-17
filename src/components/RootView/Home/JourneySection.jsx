import SectionHeader from "@/components/common/SectionHeader"
import JourneyCards from "../common/JourneyCards"
import { useEffect, useState } from "react"

const JourneySection = () => {
  const [journeyCards, setJourneyCards] = useState([])

  useEffect(() => {
    fetch("/journey.json")
      .then((response) => response.json())
      .then((data) => setJourneyCards(data))
  },[])
  return (
    <div>
        <SectionHeader title="Your Journey Starts Here"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {journeyCards.map((card) => (
            <JourneyCards
              key={card.id}
              banner={card.logo}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
    </div>
  )
}

export default JourneySection