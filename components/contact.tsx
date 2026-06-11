"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, User, Building2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Suite No# 513, Chapal Plaza, Hasrat Mohani Rd, Serai Quarter, Karachi, 74000",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 322 2164085 / +92 308 2292513",
    href: "tel:+923222164085",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@greateasterncompany.com",
    href: "mailto:info@greateasterncompany.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    href: null,
  },
]

const team = [
  { name: "Muhammad Akhtar Hashmi", phone: "+92 321-8700787" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", company: "", email: "", phone: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Contact Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            You are requested to kindly give us an opportunity for rapid customs clearance, consultancy, 
            and other customs related cases/permissions and issuance of Licenses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
            
            {submitted ? (
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thank you for contacting us. We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="company"
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pt-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact information */}
          <div>
            <div className="bg-primary rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-primary-foreground hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contacts */}
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Direct Contacts</h3>
              <div className="space-y-4">
                {team.map((member) => (
                  <div key={member.name} className="flex items-center justify-between p-4 bg-card rounded-xl border border-border">
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <a href={`tel:${member.phone.replace(/[- ]/g, "")}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <a
                      href={`tel:${member.phone.replace(/[- ]/g, "")}`}
                      className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`Call ${member.name}`}
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
