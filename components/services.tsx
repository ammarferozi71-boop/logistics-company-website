import { FileText, Ship, Package, Award, Calculator, Shield, Truck, Factory, Zap } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Custom Act/Rules",
    description: "Advisory on Customs Act 1969, customs rules, and regulatory compliance for import and export operations.",
    features: ["Customs Act 1969 guidance", "Customs Rules advisory", "Regulatory interpretation", "Duty liability analysis"],
  },
  {
    icon: Calculator,
    title: "Custom Tariff",
    description: "Custom tariff consultation with accurate duty calculations, classification support, and tariff schedule interpretation for the latest tariff updates.",
    features: ["Tariff classification", "Duty rate advisory", "Tariff schedule support", "SRO tariff updates"],
  },
  {
    icon: Truck,
    title: "IGM",
    description: "Import General Manifest support for accurate cargo reporting, manifest preparation, and customs filing.",
    features: ["IGM filing support", "Cargo manifest accuracy", "Customs declaration help", "Import vessel coordination"],
  },
  {
    icon: Package,
    title: "Import SRO",
    description: "Import SRO review, notification monitoring, and exemption support to help minimize customs duties and compliance risks.",
    features: ["Import SRO updates", "Duty exemption review", "Notification monitoring", "Compliance advisory"],
  },
  {
    icon: Ship,
    title: "Export SRO",
    description: "Export SRO advisory and notification support for export-oriented businesses and regulatory compliance.",
    features: ["Export SRO review", "Duty relief support", "Notification tracking", "Export compliance guidance"],
  },
  {
    icon: Shield,
    title: "HS Code (Explanatory Notes)",
    description: "HS code classification guidance with explanatory notes to ensure precise customs declarations and tariff compliance.",
    features: ["HS code classification", "Explanatory note support", "Tariff alignment", "Import/export compliance"],
  },
  {
    icon: Award,
    title: "Valuation Ruling",
    description: "Customs valuation ruling guidance to support accurate invoice valuation, tariff calculations, and customs assessment.",
    features: ["Valuation ruling support", "Invoice valuation review", "Assessment preparation", "Duty computation guidance"],
  },
  {
    icon: FileText,
    title: "NTN",
    description: "NTN inquiry and verification services to support importer and exporter registration compliance with customs regulations.",
    features: ["NTN verification", "Importer validation", "Tax compliance checks", "Registration support"],
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
            Custom Clearance, Consultancy & Freight Forwarding
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver focused customs clearance, expert consultancy, and dependable freight forwarding to keep your trade moving.
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
