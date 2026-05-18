import { Building2, Star } from "lucide-react"

const clients = [
  "Style Textile (Pvt) Ltd",
  "Hajvery Beverages",
  "Spleen Manufacturing Pvt Ltd",
  "Riaz Textile (Pvt) Ltd",
  "Vicky Enterprises",
  "US Apparel & Textiles (Pvt)",
  "Shamim & Company (Pvt) Ltd",
  "K.K. Power (Pvt) Limited",
  "Hira Textile Mills Ltd",
  "Ahmed Trading Company",
  "Indigo Textile (Pvt) Ltd",
  "Msco International",
  "Punjab Beverages (PEPSI Faisalabad)",
  "Allied Machinery Ltd",
  "Team A Venture Pvt Ltd (Mothercare)",
  "Mehran Bottlers Pvt Ltd (PAKOLA)",
  "Kamalia Sugar Mills Ltd",
  "Rajby Industries",
  "Allied Commercial Ent. Ltd",
  "Casual Sportswear (Pvt) Ltd",
  "Johnson & Phillips (PAK) Pvt Ltd",
  "Ali Enterprises",
  "Herbion Pharmaceuticals",
  "Naveena Textile",
  "Manuchars",
]

const highlights = [
  { label: "Industry Leaders", value: "25+" },
  { label: "Textile Clients", value: "12+" },
  { label: "Beverage Brands", value: "5+" },
  { label: "Success Rate", value: "99%" },
]

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Clients</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to serve some of the most prestigious commercial and industrial houses across various trades in Pakistan.
          </p>
        </div>

        {/* Highlight stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item) => (
            <div key={item.label} className="text-center p-6 rounded-xl bg-muted/50 border border-border">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Client list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{client}</span>
            </div>
          ))}
        </div>

        {/* Testimonial highlight */}
        <div className="mt-16 bg-primary rounded-2xl p-8 sm:p-12">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent fill-accent" />
            ))}
          </div>
          <blockquote className="text-center">
            <p className="text-xl sm:text-2xl text-primary-foreground/90 font-serif italic max-w-3xl mx-auto leading-relaxed">
              {'"'}Great Eastern Company has been our trusted partner for customs clearance for over a decade. 
              Their expertise in EFS licensing and commitment to efficiency has significantly reduced our operational costs.{'"'}
            </p>
            <footer className="mt-6">
              <p className="text-accent font-semibold">Valued Client</p>
              <p className="text-primary-foreground/70 text-sm">Textile Industry</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
