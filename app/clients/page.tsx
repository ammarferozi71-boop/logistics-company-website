import { Metadata } from "next"
import { Header } from "@/components/header"
import { Clients } from "@/components/clients"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Clients | Great Eastern Company - Trusted by Industry Leaders",
  description: "Great Eastern Company serves prestigious commercial and industrial houses including Style Textile, Pepsi, Pakola, Herbion Pharmaceuticals, and many more.",
  keywords: ["GEC clients", "customs clearance clients", "textile industry clients", "beverage industry Pakistan", "pharmaceutical clearance"],
}

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <Clients />
      </main>
      <Footer />
    </>
  )
}
