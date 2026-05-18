import { Metadata } from "next"
import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services | Great Eastern Company - Customs Clearance & Consulting",
  description: "Comprehensive customs solutions including customs consulting, clearance, EFS licensing, and DTRE services. Expert import clearance for textile, power, chemical, and more.",
  keywords: ["customs clearance services", "EFS licensing", "DTRE services", "customs consulting Pakistan", "import clearance Karachi", "freight forwarding"],
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <Services />
      </main>
      <Footer />
    </>
  )
}
