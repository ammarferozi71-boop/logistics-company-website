import { CheckCircle2, Users, Globe, Clock, Shield, Headphones } from "lucide-react"

const strengths = [
  { icon: CheckCircle2, text: "Reliable service" },
  { icon: Globe, text: "Global network" },
  { icon: Clock, text: "Timely deliveries" },
  { icon: Shield, text: "Secure handling" },
  { icon: Users, text: "Dedicated team" },
  { icon: Headphones, text: "24/7 support" },
]

const capabilities = [
  "Efficient operations",
  "Customized solutions",
  "Competitive rates",
  "Expert logistics",
  "Strong partnerships",
  "Streamlined processes",
  "Accurate documentation",
  "Proactive communication",
  "Extensive experience",
  "Comprehensive tracking",
  "Flexibility in services",
  "Value-added solutions",
  "Compliance with regulations",
  "Customer-centric approach",
]

export function Team() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Team</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            Dedicated to Excellence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            As a freight forwarder, our team is dedicated to providing efficient and reliable logistics solutions. 
            We pride ourselves on our attention to detail, strong communication skills, and commitment to customer satisfaction.
          </p>
        </div>

        {/* Key strengths */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {strengths.map((strength) => (
            <div key={strength.text} className="text-center p-6 rounded-xl bg-card border border-border">
              <strength.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground">{strength.text}</p>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="bg-card rounded-2xl p-8 sm:p-12 border border-border">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">What Sets Us Apart</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((capability) => (
              <div key={capability} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Technology & Innovation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Great Eastern Company, we are committed to pushing the boundaries of what&apos;s possible in the world of logistics. 
              We believe that technology and innovation are the driving forces behind our industry&apos;s transformation.
            </p>
            <ul className="space-y-3">
              {["Real-time shipment tracking", "Digital documentation", "Automated compliance checks", "Data-driven insights"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary rounded-2xl p-8 text-center">
            <Globe className="h-20 w-20 text-accent mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-primary-foreground mb-3">Global Reach</h4>
            <p className="text-primary-foreground/80">
              Our global footprint extends far and wide, allowing us to connect businesses with markets across the world. 
              We ensure that your cargo, regardless of its destination, reaches its final point efficiently and without hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
