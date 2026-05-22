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

const Location6 = () => {
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
            style={{ backgroundImage: 'url("/images/hero.png")' }}
          >
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5 text-white">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              TREE SERVICE IN PLANTATION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              PLANTATION TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Plantation Acres · Jacaranda · Central Park · Plantation Gardens · Broadview Park
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
              <h2 className="text-2xl font-bold">Tree Service In Plantation</h2>
              <p>
                Plantation is one of Broward County's most beautifully wooded cities, and that lush, canopied character comes with real responsibility for property owners throughout every neighborhood. The city's generous lot sizes — particularly across Plantation Acres and the equestrian corridor — allow mature oaks, banyans, gumbo limbos, and royal palms to reach extraordinary heights over decades. That same growth, while stunning, creates significant risk during South Florida's aggressive hurricane seasons and the heavy afternoon thunderstorm cycles that batter the region from June through October. Large root systems push against foundations, walkways, and driveways, while overextended limbs hang over rooftops waiting for the next fast-moving squall to bring them down. The unique horse country character of Plantation Acres adds another layer of urgency — falling trees and scattered debris near livestock and riding trails require fast, careful response. Homeowners across this city invest heavily in their landscapes, and managing the trees at the heart of those landscapes is essential to protecting that investment year after year.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Plantation</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind offers the full range of professional tree services that Plantation's spacious residential and equestrian properties demand. Whether you have a decades-old banyan spreading across your backyard in Jacaranda, a storm-damaged oak threatening a fence line in Central Park, or a cluster of overgrown palms crowding a structure in Plantation Gardens, our team arrives equipped to handle it safely and efficiently. We perform complete tree removal for trees that have become hazardous, dying, or simply too large for their space, and we follow every removal with thorough stump grinding so your yard is left clean and ready. Our tree trimming and pruning services are designed specifically for the large mature specimens common throughout Plantation — shaping canopies, removing dead wood, and reducing wind resistance before storm season arrives. We also handle shrub trimming and removal, tree planting and replacement, tree cabling and bracing for structurally compromised trees worth preserving, and full storm cleanup after severe weather events. Broadview Park and surrounding areas with smaller lots benefit equally from our work, keeping even compact properties safe and orderly.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Plantation</h2>
              <p>
                Plantation homeowners have high standards for their properties, and Paula's A1 matches that expectation with every visit. As a female-owned and operated business based right here in Broward County, we understand the specific demands of Plantation's landscape — the scale of the lots in Plantation Acres, the HOA expectations in Jacaranda, and the particular care required when working near horses or ranch infrastructure. We arrive with modern, well-maintained equipment capable of tackling the largest mature trees this city produces, and we take the cleanup just as seriously as the work itself, leaving your property in better shape than we found it. Every estimate is completely free, our pricing is straightforward and fair, and we carry full licensing and insurance so you're protected throughout every job. Our response times for Plantation are fast, whether you're calling after a storm event or scheduling routine seasonal trimming before hurricane season begins. We back every job with a satisfaction guarantee because our reputation in this community matters to us — and we want to be the team you call every time a tree issue comes up on your Plantation property.
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

export default Location6;
