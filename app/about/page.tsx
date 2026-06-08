import { Metadata } from "next"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | Great Eastern Company - Pioneer Clearing & Forwarding Agents Since 1981",
  description: "Learn about Great Eastern Company, a pioneer clearing & forwarding agent with 45+ years of experience in customs clearance and consulting services in Pakistan.",
  keywords: ["about GEC", "Great Eastern Company history", "customs clearing agent Karachi", "freight forwarder Pakistan", "since 1981"],
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <About />
        <Team />
      </main>
      <Footer />
    </>
  )
}
