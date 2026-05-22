import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { QuoteForm } from "@/components/QuoteForm";

const Location10 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[100vh] flex items-center justify-center text-center pt-32 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/hero.jpg")' }}
          >
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5 text-white">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              TREE SERVICE IN DEERFIELD BEACH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              DEERFIELD BEACH TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Cove · Hillsboro · Century Village · Quiet Waters · Quiet Pines
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base uppercase tracking-wider rounded-sm shadow-2xl flex items-center gap-2" asChild>
                <a href="tel:+19546230558">
                  <Phone className="w-5 h-5" />
                  (954) 623-0558
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)} className="h-14 px-10 border-white bg-white/10 text-white hover:bg-white hover:text-black font-black text-base uppercase tracking-wider rounded-sm shadow-2xl">
                Get A Free Quote
              </Button>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[120px]">
              <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-white" />
            </svg>
          </div>
        </section>

        {/* Body Copy Section */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[900px] mx-auto px-[12px] space-y-12 text-lg text-zinc-800">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Tree Service In Deerfield Beach</h2>
              <p>
                Deerfield Beach sits along the Atlantic coastline at the northeastern edge of Broward County, where the combination of ocean exposure, sandy soil, and subtropical storms creates a uniquely challenging environment for trees and property owners alike. Coastal properties near the Cove and Hillsboro Beach face salt spray that weakens tree bark and root systems over time, accelerating decay and making trees more susceptible to storm failure. The Quiet Waters and Quiet Pines areas further inland have developed a mix of residential housing with mature canopy trees that require regular professional attention. Deerfield Beach is directly in the path of Atlantic hurricanes and tropical storms that track up the coast, meaning trees here take a serious battering every season. Without proper trimming, bracing, and removal of dead or structurally compromised trees ahead of storm season, property owners risk significant damage to homes, vehicles, fencing, and neighbouring lots. Professional tree management is not just about aesthetics in Deerfield Beach — it is a fundamental part of coastal property safety.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Deerfield Beach</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind provides comprehensive tree services throughout Deerfield Beach, including emergency and scheduled tree removal, stump grinding, tree trimming, and storm cleanup. Coastal properties often require specialised care due to the effects of salt air and sandy soil on root systems, and our team has experience working on properties throughout Broward's coastal corridor. We handle stump grinding down to below grade, eliminating the unsightly and hazardous remnants that remain after a tree is cut — whether that stump is in a tight beachside yard or on a larger inland lot. For properties ahead of hurricane season, we provide strategic trimming and pruning to reduce wind resistance and remove dead wood before storms can turn it into projectiles. Century Village and the surrounding retirement communities trust us to work quickly, cleanly, and respectfully — with minimal disruption to residents and fully insured teams that protect the property throughout the process.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Deerfield Beach</h2>
              <p>
                Deerfield Beach homeowners choose Paula's A1 Tree Removal & Stump Grind for the combination of expertise, honesty, and value that our female-owned, owner-operated business delivers on every job. Paula personally oversees our work and stands behind every estimate and every result — there is no corporate layer between the person doing the work and the person you speak with when you call. We offer free estimates so Deerfield Beach property owners can get an honest assessment of what is needed before committing to any service. Our full licensing and insurance means we meet the strict contractor standards expected in Broward County, and our track-driven stump grinding equipment works effectively on coastal sandy soils that can be challenging for conventional equipment. We always leave properties completely clean when we are done, removing all debris, wood chips, and trimmings so your yard looks better than it did when we arrived. For storm-season preparation or post-storm recovery, call us first.
              </p>
            </div>
          </div>
        </section>

        <Reviews topWaveColor="white" />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-full">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">Get A Free Quote</h2>
            <p className="text-center text-gray-400 mb-6">Fill out the form below and we'll get back to you shortly.</p>
            <QuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Location10;
