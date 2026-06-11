import { FileText, Ship, Truck } from "lucide-react"

type Service = {
  icon: typeof Ship
  title: string
  description: string
  summary?: string
  serviceSections?: {
    title: string
    description: string
  }[]
  referenceTitle?: string
  referenceIntro?: string
  referenceMaterials?: string[]
  strengths?: string[]
  closing?: string
  links?: {
    label: string
    href: string
  }[]
}

const services: Service[] = [
  {
    icon: Ship,
    title: "Customs Clearance",
    description:
      "At Great Eastern Company, we understand that customs clearance is one of the most critical and complex components of international trade. Our dedicated Import & Export Customs Clearance Services are designed to ensure that your shipments move seamlessly across borders while remaining fully compliant with all applicable customs regulations.",
    summary:
      "Backed by over 45 years of industry experience, Great Eastern Company possesses extensive expertise and in-depth knowledge of customs regulations, tariff classifications, Import-Export procedures, valuation practices, and international trade compliance.",
    serviceSections: [
      {
        title: "Import Customs Clearance",
        description:
          "We efficiently manage the complete import clearance process, including customs declarations, duty and tax assessments, valuation matters, tariff classification, regulatory approvals, and compliance requirements.",
      },
      {
        title: "Export Customs Clearance",
        description:
          "Our export specialists handle all customs formalities required for the successful shipment of goods abroad, including export regulations, documentation requirements, customs procedures, and applicable export incentives.",
      },
      {
        title: "Regulatory & Documentation Support",
        description:
          "We provide clients with access to the latest customs-related regulations and reference materials for compliant and efficient clearance.",
      },
    ],
    referenceMaterials: [
      "Pakistan Customs Act",
      "Customs Tariff of Pakistan",
      "Import & Export SROs (Statutory Regulatory Orders)",
      "Customs General Orders and Public Notices",
      "Regulatory Duty & Additional Customs Duty Notifications",
      "Exemption and Concession Notifications",
      "Trade Policies and Import/Export Procedures",
      "Customs Valuation Rulings and Classification References",
    ],
    strengths: [
      "Customs expertise",
      "Regulatory compliance",
      "Efficient processing",
      "Documentation excellence",
      "Duty & tax optimization",
      "Risk mitigation",
      "Cost efficiency",
    ],
    closing:
      "Whether you are importing machinery, industrial equipment, raw materials, consumer goods, or exporting products to international markets, Great Eastern Company serves as your trusted partner for reliable, compliant, and efficient customs clearance solutions.",
    links: [
      { label: "Custom Act/Rules", href: "https://www.fbr.gov.pk/categ/customs-act-1969/130" },
      { label: "Custom Tariff", href: "https://download1.fbr.gov.pk/Docs/20258111683941732Tariff-2025-26.pdf" },
      { label: "IGM", href: "https://o.fbr.gov.pk/newcu2/igm/igm.asp?view=ExternalLink?view=ExternalLink" },
      { label: "Import Sro", href: "https://www.fbr.gov.pk/ActiveSrosImport" },
      { label: "Export Sro", href: "https://www.fbr.gov.pk/ActiveSrosExport" },
      { label: "Hs Code (Explanatory Notes)", href: "https://customnews.pk/harmonized-system-commodity-database/" },
      { label: "Valuation Ruling", href: "https://customnews.pk/valuation-rulings/" },
      { label: "Ntn", href: "https://iris.fbr.gov.pk/#verifications" },
    ],
  },
  {
    icon: FileText,
    title: "Customs Consultancy",
    description:
      "Since 2016, Great Eastern Company has been providing specialized Customs Consultancy Services to manufacturers, exporters, commercial importers, and trading organizations across Pakistan.",
    summary:
      "Through professional excellence, regulatory expertise, and a client-focused approach, we have established ourselves as a trusted partner for businesses seeking customs compliance and trade facilitation solutions. Our experience extends from the former DTRE regime to the current Export Facilitation Scheme (EFS), giving us a comprehensive understanding of export-oriented customs procedures and regulatory frameworks.",
    serviceSections: [
      {
        title: "Export Facilitation Scheme (EFS) Consultancy",
        description:
          "EFS registration and authorization, industrial and commercial entity registration, documentation review, analysis card approval facilitation, departmental coordination, site visit arrangements, post-authorization compliance, monthly consultancy, and reconciliation reporting.",
      },
      {
        title: "Temporary Import Consultancy (SRO 492(I)/2009)",
        description:
          "Temporary import authorization support, documentation preparation, regulatory compliance management, bond and security guidance, customs coordination, utilization monitoring, re-export compliance, and case resolution advisory.",
      },
      {
        title: "Customs Compliance & Regulatory Advisory",
        description:
          "Customs Act interpretation, import and export regulatory guidance, tariff consultation, SRO interpretation, reconciliation statement preparation, analysis card approval, audit assistance, compliance reviews, risk assessment, and customs case management.",
      },
    ],
    referenceTitle: "Consultancy Services Include",
    referenceMaterials: [
      "EFS Registration & Authorization",
      "Industrial & Commercial Entity Registration",
      "Documentation Review & Compliance Assessment",
      "Analysis Card Approval Facilitation",
      "Departmental Coordination & Follow-Ups",
      "Site Visit Arrangements",
      "Post-Authorization Compliance Management",
      "Monthly EFS Consultancy Services",
      "Reconciliation Statements & Reporting",
      "Temporary Import Authorization Support",
      "Bond & Security Requirement Guidance",
      "Re-Export Compliance Support",
      "Customs Audit Assistance",
      "Compliance Reviews & Risk Assessment",
      "Customs Case Management & Resolution",
    ],
    strengths: [
      "Proven track record",
      "Comprehensive industry support",
      "Regulatory expertise",
      "Long-term client partnerships",
      "Trusted by industry",
    ],
    closing:
      "Whether you require EFS registration, Temporary Import consultancy under SRO 492(I)/2009, customs compliance support, reconciliation services, analysis card approvals, or regulatory advisory, Great Eastern Company is committed to delivering practical, reliable, and result-oriented solutions that help businesses operate efficiently and remain fully compliant.",
  },
  {
    icon: Truck,
    title: "Freight Forwarding",
    description:
      "At Great Eastern Company, we provide comprehensive Freight Forwarding solutions designed to ensure the seamless movement of cargo across global markets.",
    summary:
      "Backed by over 45 years of industry experience, our logistics specialists possess extensive expertise and in-depth knowledge of international shipping regulations, transportation networks, trade documentation, and Incoterms rules. Whether your shipment moves by sea freight, air freight, road transport, or multimodal logistics, we coordinate every stage of the supply chain to ensure timely delivery, cost efficiency, and complete visibility throughout the transportation process.",
    serviceSections: [
      {
        title: "Ocean Freight",
        description:
          "Reliable Full Container Load (FCL) and Less than Container Load (LCL) solutions connecting businesses to major international ports worldwide.",
      },
      {
        title: "Air Freight",
        description:
          "Fast and secure air cargo solutions for time-sensitive shipments, ensuring efficient global transportation.",
      },
      {
        title: "Inland Transportation",
        description:
          "Door-to-door logistics support through an extensive network of transportation partners and carriers.",
      },
      {
        title: "Project & Heavy Cargo Logistics",
        description:
          "Specialized handling and transportation solutions for oversized, industrial, and project cargo shipments.",
      },
      {
        title: "Cargo Tracking & Shipment Coordination",
        description:
          "Real-time shipment monitoring and proactive coordination to ensure smooth cargo movement from origin to destination.",
      },
    ],
    referenceTitle: "Documentation & Trade Support",
    referenceIntro:
      "We provide access to essential freight forwarding and international trade documentation, including:",
    referenceMaterials: [
      "Incoterms Rules",
      "Bill of Lading (B/L) Guidelines",
      "Air Waybill (AWB) Procedures",
      "Commercial Invoice Requirements",
      "Packing List Standards",
      "Certificate of Origin Requirements",
      "Shipping Instructions",
      "International Trade Documentation Guidelines",
      "Freight & Logistics Regulatory References",
    ],
    strengths: [
      "Logistics expertise",
      "Incoterms knowledge",
      "Global network",
      "Efficient cargo movement",
      "Documentation excellence",
      "End-to-end visibility",
    ],
    closing:
      "From sourcing and transportation to final delivery, Great Eastern Company delivers reliable, efficient, and cost-effective freight forwarding solutions that keep your business connected to global markets.",
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
                  {service.summary ? <p className="text-muted-foreground leading-relaxed">{service.summary}</p> : null}

                  {service.serviceSections ? (
                    <div className="space-y-5">
                      {service.serviceSections.map((section) => (
                        <div key={section.title} className="border-l-2 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">{section.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {service.referenceMaterials ? (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        {service.referenceTitle ?? "Regulatory & Documentation Support"}
                      </h4>
                      {service.referenceIntro ? (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.referenceIntro}</p>
                      ) : null}
                      <ul className="space-y-2">
                        {service.referenceMaterials.map((material) => (
                          <li key={material} className="flex items-start gap-2 text-sm text-foreground">
                            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {service.strengths ? (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Why Choose Great Eastern Company?</h4>
                      <ul className="space-y-2">
                        {service.strengths.map((strength) => (
                          <li key={strength} className="text-sm font-medium text-foreground">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {service.closing ? <p className="text-muted-foreground leading-relaxed">{service.closing}</p> : null}
                  {service.links ? (
                    <ol className="space-y-2 list-decimal list-inside text-sm text-foreground">
                      {service.links.map((link) => (
                        <li key={link.href}>
                          <span className="font-medium">{link.label}: </span>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary underline-offset-4 hover:underline"
                          >
                            Open link
                          </a>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              </details>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
