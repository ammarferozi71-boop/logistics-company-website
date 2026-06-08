import Image from "next/image"
import { CheckCircle2, Target, Eye, Heart } from "lucide-react"

const values = [
  { icon: CheckCircle2, title: "Integrity", description: "Honest and transparent dealings in all our operations" },
  { icon: Heart, title: "Commitment", description: "Dedicated to exceeding client expectations consistently" },
  { icon: Target, title: "Adding Value", description: "Delivering solutions that enhance your business growth" },
  { icon: Eye, title: "Never Being Satisfied", description: "Continuously improving our services and expertise" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            Pioneer Clearing & Forwarding Agents
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/images/logo.jpeg"
                alt="Great Eastern Company - Since 1981"
                fill
                className="object-contain p-8"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-xl">
              <div className="text-4xl font-bold">45+</div>
              <div className="text-sm">Years of Trust</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We take opportunity in introducing ourselves as pioneer clearing & forwarding agents. Our name and reputation 
              are familiar throughout the country and built upon a solid foundation of invariable experience, trust, and efficient service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are specialized in this business for the last four decades and registered with the customs department for more than 
              40 years, holding <strong className="text-foreground">Customs House License No. 810</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Being a part of the service industry, our utmost effort is providing efficient service to our clients. Our existence 
              for more than four decades is proof alone of our achievements in the ever-changing competitive market.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Our Mission
                </h3>
                <p className="text-sm text-muted-foreground">
                  To be the preferred partner in customs clearance and consulting services, driving global trade efficiency 
                  and compliance while exceeding client expectations.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  Our Vision
                </h3>
                <p className="text-sm text-muted-foreground">
                  To be the leading architect of seamless, sustainable, and client-centric logistics solutions, setting 
                  industry standards and enabling boundless success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                <value.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
