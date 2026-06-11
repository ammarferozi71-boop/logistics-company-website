import { Metadata } from "next"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | Great Eastern Company - Get in Touch",
  description: "Contact Great Eastern Company for customs clearance, consulting, and freight forwarding services. Located in Karachi, Pakistan. Call +92 322 2164085.",
  keywords: ["contact GEC", "customs clearance contact", "Great Eastern Company address", "freight forwarder Karachi contact"],
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
