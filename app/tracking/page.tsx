import { Metadata } from "next"
import { TrackingContent } from "@/components/tracking-content"

export const metadata: Metadata = {
  title: "Track Shipment | Great Eastern Company",
  description: "Track your shipment in real-time with Great Eastern Company. Get live updates on status, location, and estimated delivery.",
}

export default function TrackingPage() {
  return <TrackingContent />
}
