import { FileText, Ship, Truck } from "lucide-react"

const services = [
  {
    icon: Ship,
    title: "Customs Clearance",
    description: "Efficient customs clearance for imports and exports with complete documentation and customs processing.",
    features: ["Import and export clearance", "Documentation management", "Customs submission support", "Compliance monitoring"],
  },
  {
    icon: FileText,
    title: "Customs Consultancy",
    description: "Strategic customs consultancy to optimize classification, duties, and compliance for your shipments.",
    features: ["Duty optimization", "Tariff classification", "Regulatory advisory", "Customs process consulting"],
  },
  {
    icon: Truck,
    title: "Freight Forwarding",
    description: "Reliable freight forwarding and logistics coordination for seamless cargo movement.",
    features: ["Cargo routing", "Freight coordination", "Door-to-door logistics", "Shipment tracking support"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            Custom Clearance, Consultancy & Freight Forwarding
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver focused customs clearance, expert consultancy, and dependable freight forwarding to keep your trade moving.
          </p>
        </div>

        {/* Main services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-2xl p-8 border border-border">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-6">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
