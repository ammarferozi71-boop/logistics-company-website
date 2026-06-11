import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Search } from "lucide-react"

export function TrackingContent() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
                Track Your Shipment
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Enter your tracking ID.
              </p>

              <div className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter your tracking ID"
                      className="pl-12 h-14 text-base bg-card border-0"
                    />
                  </div>
                  <Button size="lg" className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Search className="mr-2 h-5 w-5" />
                    Track
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <Package className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Enter Your Tracking ID</h2>
              <p className="text-muted-foreground">
                Enter your tracking ID above to check your shipment details.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
