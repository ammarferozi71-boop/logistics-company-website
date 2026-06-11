import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Tracking", href: "/tracking" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
]

const services = [
  "Custom Clearance",
  "Custom Consultancy",
  "Freight Forwarding",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="Great Eastern Company Logo"
                width={50}
                height={50}
                className="h-12 w-auto rounded-lg bg-white p-1"
              />
              <div>
                <h3 className="text-lg font-bold leading-tight">Great Eastern Co.</h3>
                <p className="text-xs text-primary-foreground/70">Since 1981</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Pioneer clearing & forwarding agents with 45+ years of experience, trust, and efficient service 
              in custom clearance, custom consultancy, and freight forwarding.
            </p>
            <p className="text-sm text-primary-foreground/70">
              <strong className="text-accent">License No. 810</strong>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Suite No# 513, Chapal Plaza, Hasrat Mohani Rd, Serai Quarter, Karachi, 74000
                </span>
              </li>
              <li>
                <a href="tel:+923222164085" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  +92 322 2164085 / +92 308 2292513
                </a>
              </li>
              <li>
                <a href="mailto:info@greateasterncompany.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                  info@greateasterncompany.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Great Eastern Company. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
