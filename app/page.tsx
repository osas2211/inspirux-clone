import { About } from "@/components/About"
import { AnimationContainer } from "@/components/AnimationContainer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { HeroCTA } from "@/components/HeroCTA"
import { Works } from "@/components/Works"

export default function Home() {
  return (
    <div className="">
      <AnimationContainer>
        <Header />
        <Hero />
        <div className="z-[10] relative">
          <HeroCTA />
          <About />
          <Works />
        </div>
      </AnimationContainer>
    </div>
  )
}
