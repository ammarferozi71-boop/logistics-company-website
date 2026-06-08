import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Quote } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Testimonials | Great Eastern Company",
  description: "Read what our valued clients say about Great Eastern Company's customs clearance and consulting services. 45+ years of trusted service in Pakistan.",
}

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    company: "Style Textile (Pvt) Ltd",
    position: "Import Manager",
    rating: 5,
    review: "Great Eastern Company has been our trusted customs partner for over 15 years. Their expertise in textile import clearance is unmatched. They understand the complexities of our industry and always ensure our shipments clear customs swiftly. The team is professional, responsive, and truly cares about our business success. I highly recommend their services to any company looking for reliable customs clearance solutions.",
    highlight: "15+ years of partnership"
  },
  {
    id: 2,
    name: "Fatima Rizvi",
    company: "Herbion Pharmaceuticals",
    position: "Supply Chain Director",
    rating: 5,
    review: "Exceptional service for pharmaceutical imports. They handle all regulatory requirements with precision and ensure timely delivery. Working with sensitive pharmaceutical products requires a partner who understands compliance, and GEC has never let us down. Their attention to detail and proactive communication make them invaluable. The team goes above and beyond to ensure our products reach us safely and on time.",
    highlight: "Pharmaceutical expertise"
  },
  {
    id: 3,
    name: "Imran Malik",
    company: "Punjab Beverages (PEPSI)",
    position: "Operations Head",
    rating: 5,
    review: "Professional, efficient, and reliable. GEC handles our beverage industry imports with care and expertise. From raw materials to packaging equipment, they manage everything seamlessly. Their knowledge of customs regulations and their established relationships with authorities make the clearance process smooth every time. We have complete confidence in their ability to handle our diverse import needs.",
    highlight: "Beverage industry specialist"
  },
  {
    id: 4,
    name: "Sarah Qureshi",
    company: "K.K. Power (Pvt) Limited",
    position: "Procurement Manager",
    rating: 5,
    review: "Outstanding customs consulting services. They helped us navigate complex machinery import regulations effortlessly. When we needed to import specialized power generation equipment, GEC provided invaluable guidance on duties, taxes, and documentation requirements. Their expertise saved us both time and money. The team is knowledgeable, professional, and always available when we need them.",
    highlight: "Machinery import experts"
  },
  {
    id: 5,
    name: "Usman Ali",
    company: "Indigo Textile (Pvt) Ltd",
    position: "CEO",
    rating: 5,
    review: "45 years of experience truly shows in their service quality. Their deep knowledge of customs procedures has saved us countless hours and significant costs. As a textile manufacturer, we rely heavily on imported machinery and raw materials. GEC understands our needs and consistently delivers exceptional service. Their professional team has become an extension of our own operations.",
    highlight: "Trusted by industry leaders"
  },
  {
    id: 6,
    name: "Ayesha Siddiqui",
    company: "Mehran Bottlers (PAKOLA)",
    position: "Logistics Manager",
    rating: 5,
    review: "A reliable partner for all our import needs. Their team is always responsive and goes above and beyond to ensure our shipments are cleared without delays. In the beverage industry, timing is crucial, and GEC understands that. They treat every shipment with urgency and professionalism. We have been working with them for years and they have never disappointed us.",
    highlight: "Reliable & responsive"
  },
  {
    id: 7,
    name: "Tariq Mahmood",
    company: "Al-Noor Sugar Mills",
    position: "Managing Director",
    rating: 5,
    review: "GEC has been instrumental in our sugar industry operations. Their understanding of agricultural commodity imports and the associated regulations is exceptional. They have helped us navigate complex duty structures and exemption schemes. The team is highly professional and maintains excellent communication throughout the clearance process. A truly valuable partner for our business.",
    highlight: "Agricultural commodities expert"
  },
  {
    id: 8,
    name: "Nadia Hassan",
    company: "Metro Cables Limited",
    position: "Import Executive",
    rating: 5,
    review: "Working with Great Eastern Company has been a pleasure. Their expertise in handling industrial cable imports is remarkable. They understand the technical specifications and ensure all documentation is accurate and complete. The customs clearance process is always smooth, and their team keeps us informed at every step. Highly recommended for any industrial imports.",
    highlight: "Industrial imports specialist"
  },
]

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'text-muted'}`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Client Testimonials</span>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
                What Our Clients Say
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Read the experiences of businesses who have trusted Great Eastern Company 
                for their customs clearance and consulting needs over the decades.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accent">500+</p>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent">45+</p>
                <p className="text-muted-foreground">Years of Service</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent">5.0</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="h-10 w-10 text-accent/20" />
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Rating */}
                  <RatingStars rating={testimonial.rating} />

                  {/* Review */}
                  <p className="mt-6 text-foreground/80 leading-relaxed">
                    {`"${testimonial.review}"`}
                  </p>

                  {/* Client Info */}
                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-semibold text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Join Our Growing List of Satisfied Clients
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Experience the difference of working with a customs partner that truly understands your business.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
