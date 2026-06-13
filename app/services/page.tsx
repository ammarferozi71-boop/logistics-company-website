import { Metadata } from "next"
import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services | Great Eastern Company - Customs Clearance & Freight Forwarding",
  description: "Comprehensive services in customs clearance, customs consultancy, and freight forwarding for importers and exporters in Pakistan.",
  keywords: ["customs clearance", "customs consultancy", "freight forwarding", "customs services Pakistan", "import export logistics"],
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
