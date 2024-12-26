import { About } from "@/components/About"
import { AnimationContainer } from "@/components/AnimationContainer"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { HeroCTA } from "@/components/HeroCTA"
import { Insights } from "@/components/Insights"
import { Results } from "@/components/Results"
import { Services } from "@/components/Services"
import { TrackRecords } from "@/components/TrackRecords"
import { Works } from "@/components/Works"

export default function Home() {
  return (
    <div className="text-[#101012]">
      <AnimationContainer>
        <Header />
        <Hero />
        <div className="z-[10] relative bg-[#f9faf7]">
          <HeroCTA />
          <About />
          <Works />
          <Services />
          <Results />
          <TrackRecords />
          <Insights />
          <Footer />
        </div>
      </AnimationContainer>
    </div>
  )
}
