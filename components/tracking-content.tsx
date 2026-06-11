"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Package, 
  MapPin, 
  Calendar, 
  Truck, 
  CheckCircle2, 
  Clock, 
  Ship,
  ClipboardCheck,
  PackageCheck,
  CircleDot
} from "lucide-react"

type ShipmentStatus = "order_received" | "picked_up" | "in_transit" | "customs_clearance" | "out_for_delivery" | "delivered"

interface ShipmentData {
  trackingId: string
  status: ShipmentStatus
  currentLocation: string
  estimatedDelivery: string
  cargoType: string
  origin: string
  destination: string
  weight: string
  timeline: {
    status: ShipmentStatus
    title: string
    location: string
    date: string
    time: string
    completed: boolean
  }[]
}

const statusConfig: Record<ShipmentStatus, { label: string; icon: React.ElementType; color: string }> = {
  order_received: { label: "Order Received", icon: Package, color: "bg-blue-500" },
  picked_up: { label: "Picked Up", icon: PackageCheck, color: "bg-indigo-500" },
  in_transit: { label: "In Transit", icon: Ship, color: "bg-purple-500" },
  customs_clearance: { label: "Customs Clearance", icon: ClipboardCheck, color: "bg-amber-500" },
  out_for_delivery: { label: "Out for Delivery", icon: Truck, color: "bg-orange-500" },
  delivered: { label: "Delivered", icon: CheckCircle2, color: "bg-green-500" },
}

// Mock shipment data for demonstration
const mockShipments: Record<string, ShipmentData> = {
  "GEC-2024-001234": {
    trackingId: "GEC-2024-001234",
    status: "customs_clearance",
    currentLocation: "Karachi Port, Pakistan",
    estimatedDelivery: "May 20, 2026",
    cargoType: "Textile Machinery",
    origin: "Shanghai, China",
    destination: "Karachi, Pakistan",
    weight: "2,500 KG",
    timeline: [
      { status: "order_received", title: "Order Received", location: "Shanghai, China", date: "May 10, 2026", time: "09:30 AM", completed: true },
      { status: "picked_up", title: "Picked Up", location: "Shanghai Port", date: "May 11, 2026", time: "02:15 PM", completed: true },
      { status: "in_transit", title: "In Transit", location: "International Waters", date: "May 12, 2026", time: "08:00 AM", completed: true },
      { status: "customs_clearance", title: "Customs Clearance", location: "Karachi Port, Pakistan", date: "May 15, 2026", time: "10:45 AM", completed: false },
      { status: "out_for_delivery", title: "Out for Delivery", location: "Karachi, Pakistan", date: "Pending", time: "", completed: false },
      { status: "delivered", title: "Delivered", location: "Destination", date: "Pending", time: "", completed: false },
    ]
  },
  "GEC-2024-005678": {
    trackingId: "GEC-2024-005678",
    status: "delivered",
    currentLocation: "Delivered to Destination",
    estimatedDelivery: "May 12, 2026",
    cargoType: "Pharmaceutical Equipment",
    origin: "Frankfurt, Germany",
    destination: "Lahore, Pakistan",
    weight: "850 KG",
    timeline: [
      { status: "order_received", title: "Order Received", location: "Frankfurt, Germany", date: "May 5, 2026", time: "11:00 AM", completed: true },
      { status: "picked_up", title: "Picked Up", location: "Frankfurt Airport", date: "May 6, 2026", time: "03:30 PM", completed: true },
      { status: "in_transit", title: "In Transit", location: "Air Freight", date: "May 7, 2026", time: "06:00 AM", completed: true },
      { status: "customs_clearance", title: "Customs Clearance", location: "Lahore Airport", date: "May 9, 2026", time: "09:15 AM", completed: true },
      { status: "out_for_delivery", title: "Out for Delivery", location: "Lahore, Pakistan", date: "May 11, 2026", time: "08:30 AM", completed: true },
      { status: "delivered", title: "Delivered", location: "Lahore, Pakistan", date: "May 12, 2026", time: "02:45 PM", completed: true },
    ]
  },
}

export function TrackingContent() {
  const [trackingId, setTrackingId] = useState("")
  const [shipment, setShipment] = useState<ShipmentData | null>(null)
  const [error, setError] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setShipment(null)
    
    if (!trackingId.trim()) {
      setError("Please enter a tracking ID")
      return
    }

    setIsSearching(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const foundShipment = mockShipments[trackingId.toUpperCase()]
    
    if (foundShipment) {
      setShipment(foundShipment)
    } else {
      setError("Shipment not found. Please check your tracking ID and try again.")
    }
    
    setIsSearching(false)
  }

  const currentStatusIndex = shipment 
    ? shipment.timeline.findIndex(t => t.status === shipment.status)
    : -1

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
                Track Your Shipment
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Enter your tracking ID to get real-time updates on your shipment status, location, and estimated delivery.
              </p>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter Tracking ID (e.g., GEC-2024-001234)"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      className="pl-12 h-14 text-base bg-card border-0"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <>
                        <Clock className="mr-2 h-5 w-5 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-5 w-5" />
                        Track
                      </>
                    )}
                  </Button>
                </div>
              </form>
              
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {error && (
              <div className="max-w-2xl mx-auto bg-destructive/10 border border-destructive/30 rounded-xl p-6 text-center">
                <Package className="h-12 w-12 text-destructive mx-auto mb-4" />
                <p className="text-destructive font-medium">{error}</p>
              </div>
            )}

            {shipment && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Status Overview */}
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className={`${statusConfig[shipment.status].color} p-6`}>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        {(() => {
                          const StatusIcon = statusConfig[shipment.status].icon
                          return <StatusIcon className="h-10 w-10 text-white" />
                        })()}
                        <div>
                          <p className="text-white/80 text-sm">Current Status</p>
                          <p className="text-white text-2xl font-bold">{statusConfig[shipment.status].label}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white/80 text-sm">Tracking ID</p>
                        <p className="text-white text-lg font-mono font-bold">{shipment.trackingId}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shipment Details */}
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Current Location</p>
                          <p className="font-medium text-foreground">{shipment.currentLocation}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                          <p className="font-medium text-foreground">{shipment.estimatedDelivery}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Package className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Cargo Type</p>
                          <p className="font-medium text-foreground">{shipment.cargoType}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Truck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Weight</p>
                          <p className="font-medium text-foreground">{shipment.weight}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Route Info */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Origin</p>
                          <p className="font-medium text-foreground">{shipment.origin}</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 flex-1 max-w-xs mx-4">
                          <div className="h-px flex-1 bg-border" />
                          <Ship className="h-5 w-5 text-accent" />
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Destination</p>
                          <p className="font-medium text-foreground">{shipment.destination}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-8">Shipment Timeline</h2>
                  
                  <div className="relative">
                    {shipment.timeline.map((item, index) => {
                      const Icon = statusConfig[item.status].icon
                      const isActive = index === currentStatusIndex
                      const isCompleted = item.completed
                      
                      return (
                        <div key={item.status} className="relative flex gap-6 pb-8 last:pb-0">
                          {/* Timeline Line */}
                          {index < shipment.timeline.length - 1 && (
                            <div 
                              className={`absolute left-5 top-12 w-0.5 h-[calc(100%-3rem)] ${
                                isCompleted ? 'bg-accent' : 'bg-border'
                              }`} 
                            />
                          )}
                          
                          {/* Icon */}
                          <div 
                            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-all duration-300 ${
                              isActive 
                                ? 'bg-accent text-accent-foreground ring-4 ring-accent/30 scale-110' 
                                : isCompleted 
                                  ? 'bg-accent text-accent-foreground' 
                                  : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {isActive ? (
                              <CircleDot className="h-5 w-5 animate-pulse" />
                            ) : (
                              <Icon className="h-5 w-5" />
                            )}
                          </div>
                          
                          {/* Content */}
                          <div className={`flex-1 ${isActive ? 'bg-accent/5 -mx-4 px-4 py-3 rounded-xl' : ''}`}>
                            <div className="flex items-start justify-between flex-wrap gap-2">
                              <div>
                                <h3 className={`font-semibold ${isActive ? 'text-accent' : isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {item.title}
                                  {isActive && <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">Current</span>}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
                              </div>
                              <div className="text-right">
                                <p className={`text-sm font-medium ${isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {item.date}
                                </p>
                                {item.time && (
                                  <p className="text-xs text-muted-foreground">{item.time}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!shipment && !error && (
              <div className="max-w-2xl mx-auto text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                  <Package className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Enter Your Tracking ID</h2>
                <p className="text-muted-foreground">
                  Use the search bar above to track your shipment. You can find your tracking ID in the confirmation email or shipping documents.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
