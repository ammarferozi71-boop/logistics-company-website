"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  company: string
  image: string
  rating: number
  review: string
  fullReview?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    company: "Style Textile (Pvt) Ltd",
    image: "/images/testimonials/client-1.jpg",
    rating: 5,
    review: "Great Eastern Company has been our trusted customs partner for over 15 years. Their expertise in textile import clearance is unmatched.",
    fullReview: "Great Eastern Company has been our trusted customs partner for over 15 years. Their expertise in textile import clearance is unmatched. They understand the complexities of our industry and always ensure our shipments clear customs swiftly. The team is professional, responsive, and truly cares about our business success."
  },
  {
    id: 2,
    name: "Fatima Rizvi",
    company: "Herbion Pharmaceuticals",
    image: "/images/testimonials/client-2.jpg",
    rating: 5,
    review: "Exceptional service for pharmaceutical imports. They handle all regulatory requirements with precision and ensure timely delivery.",
    fullReview: "Exceptional service for pharmaceutical imports. They handle all regulatory requirements with precision and ensure timely delivery. Working with sensitive pharmaceutical products requires a partner who understands compliance, and GEC has never let us down. Their attention to detail and proactive communication make them invaluable."
  },
  {
    id: 3,
    name: "Imran Malik",
    company: "Punjab Beverages (PEPSI)",
    image: "/images/testimonials/client-3.jpg",
    rating: 5,
    review: "Professional, efficient, and reliable. GEC handles our beverage industry imports with care and expertise.",
    fullReview: "Professional, efficient, and reliable. GEC handles our beverage industry imports with care and expertise. From raw materials to packaging equipment, they manage everything seamlessly. Their knowledge of customs regulations and their established relationships with authorities make the clearance process smooth every time."
  },
  {
    id: 4,
    name: "Sarah Qureshi",
    company: "K.K. Power (Pvt) Limited",
    image: "/images/testimonials/client-4.jpg",
    rating: 5,
    review: "Outstanding customs consulting services. They helped us navigate complex machinery import regulations effortlessly.",
    fullReview: "Outstanding customs consulting services. They helped us navigate complex machinery import regulations effortlessly. When we needed to import specialized power generation equipment, GEC provided invaluable guidance on duties, taxes, and documentation requirements. Their expertise saved us both time and money."
  },
  {
    id: 5,
    name: "Usman Ali",
    company: "Indigo Textile (Pvt) Ltd",
    image: "/images/testimonials/client-5.jpg",
    rating: 5,
    review: "75 years of experience truly shows. Their deep knowledge of customs procedures has saved us countless hours.",
    fullReview: "75 years of experience truly shows. Their deep knowledge of customs procedures has saved us countless hours. As a textile manufacturer, we rely heavily on imported machinery and raw materials. GEC understands our needs and consistently delivers exceptional service with their professional and knowledgeable team."
  },
  {
    id: 6,
    name: "Ayesha Siddiqui",
    company: "Mehran Bottlers (PAKOLA)",
    image: "/images/testimonials/client-6.jpg",
    rating: 5,
    review: "A reliable partner for all our import needs. Their team is always responsive and goes above and beyond.",
    fullReview: "A reliable partner for all our import needs. Their team is always responsive and goes above and beyond to ensure our shipments are cleared without delays. In the beverage industry, timing is crucial, and GEC understands that. They treat every shipment with urgency and professionalism."
  },
]

export function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [position, setPosition] = useState(0)
  
  const cardWidth = 380 // width + gap
  const totalWidth = testimonials.length * cardWidth
  
  const animate = useCallback(() => {
    if (!isPaused) {
      setPosition((prev) => {
        const newPos = prev - 1
        // Reset when we've scrolled through all testimonials
        if (Math.abs(newPos) >= totalWidth) {
          return 0
        }
        return newPos
      })
    }
  }, [isPaused, totalWidth])

  useEffect(() => {
    const interval = setInterval(animate, 30)
    return () => clearInterval(interval)
  }, [animate])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-accent text-accent' : 'text-muted'}`}
      />
    ))
  }

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
              What Our Clients Say
            </h2>
          </div>
          <Button asChild variant="outline" className="group">
            <Link href="/testimonials">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <div 
          className="flex gap-6 transition-transform duration-100 ease-linear"
          style={{ transform: `translateX(${position}px)` }}
        >
          {/* Double the testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Link
              key={`${testimonial.id}-${index}`}
              href="/testimonials"
              className="group flex-shrink-0 w-[356px] bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Review */}
              <p className="text-foreground/80 leading-relaxed mb-6 line-clamp-3">
                {`"${testimonial.review}"`}
              </p>
              
              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pause Indicator */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          {isPaused ? "Paused - Move mouse away to resume" : "Hover to pause"}
        </p>
      </div>
    </section>
  )
}
