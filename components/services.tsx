import { FileText, Ship, Truck, type LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  description: string
  services: string[]
  strengths?: string[]
  closingTitle: string
  closing?: string
  resources?: { title: string; url: string }[]
}

const services: Service[] = [
  {
    icon: Ship,
    title: "Customs Clearance",
    description: "Great Eastern Company provides professional Import & Export Customs Clearance services, ensuring smooth, timely, and compliant movement of goods across borders.",
    services: [
      "Import Customs Clearance",
      "Export Customs Clearance",
      "Tariff Classification & Valuation",
      "Customs Documentation",
      "Regulatory Compliance Support",
    ],
    strengths: [
      "45+ Years of Industry Experience",
      "Strong Customs Expertise",
      "Fast & Accurate Processing",
      "Full Regulatory Compliance",
      "Cost-Effective Solutions",
    ],
    closingTitle: "Your Trusted Customs Partner",
    closing: "We ensure quick, accurate, and hassle-free customs clearance, helping businesses avoid delays and focus on growth.",
  },
  {
    icon: FileText,
    title: "Customs Consultancy",
    description: "Since 2016, Great Eastern Company has been providing professional Customs Consultancy services, specializing in compliance, regulatory matters, and Export Facilitation Scheme (EFS) solutions.",
    services: [
      "EFS Registration & Approval Support",
      "Input-Output Analysis",
      "Analysis Card Approval",
      "Reconciliation & Compliance Management",
      "Customs Case Handling",
      "Post-Approval Support",
    ],
    strengths: [
      "Specialized EFS Expertise",
      "Practical Regulatory Solutions",
      "Strong Compliance Management",
      "Dedicated Client Support",
      "Proven Industry Experience",
    ],
    closingTitle: "Your Trusted Consultancy Partner",
    closing: "We help businesses navigate customs regulations efficiently, ensuring compliance, operational continuity, and long-term success.",
  },
  {
    icon: Truck,
    title: "Freight Forwarding",
    description: "Great Eastern Company provides reliable Freight Forwarding solutions through Sea, Air, Road, and Multimodal transport, ensuring efficient cargo movement worldwide.",
    services: [
      "Ocean Freight (FCL & LCL)",
      "Air Freight Services",
      "Inland Transportation",
      "Door-to-Door Delivery",
      "Project & Heavy Cargo Handling",
      "Shipment Coordination & Documentation",
    ],
    strengths: [
      "Global Logistics Network",
      "Competitive Freight Solutions",
      "Efficient Cargo Movement",
      "Real-Time Shipment Visibility",
      "End-to-End Logistics Support",
    ],
    closingTitle: "Your Trusted Logistics Partner",
    closing: "From pickup to final delivery, we ensure secure, timely, and cost-effective transportation of your cargo.",
  },
]

const customsResources = [
  { label: "Custom Act/Rules", href: "https://www.fbr.gov.pk/categ/customs-act-1969/130" },
  { label: "Custom Tariff", href: "https://download1.fbr.gov.pk/Docs/20258111683941732Tariff-2025-26.pdf" },
  { label: "IGM", href: "https://o.fbr.gov.pk/newcu2/igm/igm.asp?view=ExternalLink?view=ExternalLink" },
  { label: "Import Sro", href: "https://www.fbr.gov.pk/ActiveSrosImport" },
  { label: "Export Sro", href: "https://www.fbr.gov.pk/ActiveSrosExport" },
  { label: "Hs Code (Explanatory Notes)", href: "https://customnews.pk/harmonized-system-commodity-database/" },
  { label: "Valuation Ruling", href: "https://customnews.pk/valuation-rulings/" },
  { label: "Ntn", href: "https://iris.fbr.gov.pk/#verifications" },
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
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div key={service.title} className="bg-card rounded-2xl p-8 border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <details className="group">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-primary underline-offset-4 hover:underline">
                    Read more
                  </summary>
                  <div className="mt-5 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Our Services</h4>
                      <ul className="space-y-2">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.strengths ? (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Why Choose Us</h4>
                        <ul className="space-y-2">
                          {service.strengths.map((strength) => (
                            <li key={strength} className="text-sm font-medium text-foreground">
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {service.closing ? (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{service.closingTitle}</h4>
                        <p className="text-muted-foreground leading-relaxed">{service.closing}</p>
                      </div>
                    ) : null}
                  </div>
                </details>
              </div>
            )
          })}
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Customs Resources</span>
              <h3 className="mt-2 text-2xl font-serif font-bold text-foreground">Reference Links</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Access important customs references and regulatory resources.
              </p>
            </div>
            <ol className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-3 list-decimal list-inside text-sm text-foreground">
              {customsResources.map((resource) => (
                <li key={resource.href}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
