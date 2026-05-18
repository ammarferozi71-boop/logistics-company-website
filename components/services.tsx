import { FileText, Ship, Package, Award, ClipboardCheck, Calculator, Shield, Truck, Factory, Zap } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Customs Consulting",
    description: "Specialized consulting services to streamline international trade operations with comprehensive knowledge of customs regulations.",
    features: ["Statutory Regulatory Orders (SROs)", "Customs Compliance", "Duty and Tax Optimization", "Risk Mitigation"],
  },
  {
    icon: Ship,
    title: "Customs Clearance",
    description: "Swift and efficient customs clearance services ensuring your imported goods are cleared through customs smoothly.",
    features: ["Regulatory Compliance", "Efficient Processing", "Documentation Mastery", "Challan No. 810"],
  },
  {
    icon: Award,
    title: "EFS Licensing",
    description: "Expert facilitation of Export Facilitation Scheme providing duty-free imports for raw materials, machinery, and commodities.",
    features: ["Duty Free Imports", "EFS Membership", "License Extension to Clients", "Commercial Importer Support"],
  },
  {
    icon: ClipboardCheck,
    title: "DTRE Services",
    description: "Duty & Tax Remission for Exports scheme facilitation with a rich history of offering comprehensive DTRE and EOU services.",
    features: ["Duty Remission", "Tax Exemptions", "EOU Support", "Compliance Management"],
  },
]

const importClearance = [
  { icon: Factory, name: "Textile Plant & Machinery" },
  { icon: Zap, name: "Power Generating Projects" },
  { icon: Package, name: "Chemical / Dyes" },
  { icon: Truck, name: "Vehicles" },
  { icon: Shield, name: "Medical Equipment" },
  { icon: Calculator, name: "Bulk Cargo & Coal" },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            Comprehensive Customs Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end customs clearing and consulting services to help your business navigate 
            international trade with ease.
          </p>
        </div>

        {/* Main services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all hover:shadow-lg">
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

        {/* Import clearance categories */}
        <div className="bg-primary rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-serif font-bold text-primary-foreground text-center mb-8">
            Import Clearance Expertise
          </h3>
          <p className="text-primary-foreground/80 text-center mb-10 max-w-2xl mx-auto">
            We handle import clearance for a wide range of commodities and industries, ensuring compliance 
            and efficiency at every step.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {importClearance.map((item) => (
              <div key={item.name} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-foreground/10 text-accent mb-3 group-hover:bg-accent group-hover:text-primary transition-all">
                  <item.icon className="h-8 w-8" />
                </div>
                <p className="text-sm text-primary-foreground/90">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Additional categories */}
          <div className="mt-10 pt-8 border-t border-primary-foreground/20">
            <h4 className="text-lg font-semibold text-primary-foreground mb-4 text-center">We Also Handle</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Beverage Plant & Machinery",
                "Water Treatment Plants",
                "Computer Equipment",
                "Leather Goods",
                "PPRC/PVC Pipes",
                "Tiles",
                "Generators",
                "Construction Machines",
                "Paper Scrap",
                "Steel Scrap",
                "Solar Products",
                "Carpets"
              ].map((item) => (
                <span key={item} className="px-4 py-2 bg-primary-foreground/10 rounded-full text-sm text-primary-foreground/90">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
