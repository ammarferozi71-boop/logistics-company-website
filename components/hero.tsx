import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Ship, FileText, Truck } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Global shipping and logistics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              45+ Years of Excellence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight text-balance">
              Your Trusted Partner in
              <span className="text-accent"> Custom Clearance</span>,
              <span className="text-accent"> Custom Consultancy</span>, and
              <span className="text-accent"> Freight Forwarding</span>
            </h1>
            
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Great Eastern Company has been the preferred partner for customs clearance and consulting services since 1981. 
              We drive global trade efficiency and compliance while exceeding client expectations.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">45+</div>
                <div className="text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/70">Clients Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">810</div>
                <div className="text-sm text-primary-foreground/70">License No.</div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="hidden lg:grid grid-cols-1 gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Ship className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Custom Clearance</h3>
              <p className="text-primary-foreground/70 text-sm">Swift and efficient clearance of imports and exports through customs with accurate documentation.</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <FileText className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Custom Consultancy</h3>
              <p className="text-primary-foreground/70 text-sm">Strategic customs consultancy for classification, compliance, and duty optimization.</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Truck className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Freight Forwarding</h3>
              <p className="text-primary-foreground/70 text-sm">Reliable freight forwarding and logistics coordination for seamless cargo movement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
