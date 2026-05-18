import Link from "next/link"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Button } from "@/components/ui/button"
import { FileText, Ship, Award, ClipboardCheck, ArrowRight, Building2, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Customs Consulting",
    description: "Expert guidance on customs regulations and compliance",
  },
  {
    icon: Ship,
    title: "Customs Clearance",
    description: "Swift and efficient customs clearance services",
  },
  {
    icon: Award,
    title: "EFS Licensing",
    description: "Export Facilitation Scheme licensing support",
  },
  {
    icon: ClipboardCheck,
    title: "DTRE Services",
    description: "Duty & Tax Remission for Exports facilitation",
  },
]

const featuredClients = [
  "Style Textile (Pvt) Ltd",
  "Punjab Beverages (PEPSI)",
  "Mehran Bottlers (PAKOLA)",
  "Herbion Pharmaceuticals",
  "Indigo Textile (Pvt) Ltd",
  "K.K. Power (Pvt) Limited",
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Services Preview */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Services</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
                Comprehensive Customs Solutions
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {services.map((service) => (
                <div key={service.title} className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all hover:shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" className="group">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  75+ Years of Trust & Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  As pioneer clearing & forwarding agents since 1950, our name and reputation are built upon 
                  a solid foundation of experience, trust, and efficient service. We hold Customs House 
                  License No. 810 and serve leading businesses across Pakistan.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Registered with customs for 40+ years", "500+ satisfied clients", "Expert team with decades of experience", "End-to-end customs solutions"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="bg-primary rounded-2xl p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-primary-foreground mb-6">Trusted by Industry Leaders</h3>
                <div className="grid grid-cols-2 gap-4">
                  {featuredClients.map((client) => (
                    <div
                      key={client}
                      className="flex items-center gap-2 p-3 rounded-lg bg-primary-foreground/10"
                    >
                      <Building2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-primary-foreground/90 truncate">{client}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
                  <Link href="/clients" className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1">
                    View All Clients
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Ready to Streamline Your Customs Process?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today for expert customs clearance, consulting, and freight forwarding services. 
              Let us handle the complexities while you focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+922132277113">Call +92 21 32277113</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
