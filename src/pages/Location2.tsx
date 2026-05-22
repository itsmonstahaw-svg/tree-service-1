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

const Location2 = () => {
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
              TREE SERVICE IN FORT LAUDERDALE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              FORT LAUDERDALE TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Downtown · Flagler Village · Victoria Park · Coral Ridge · Riverside Park
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
              <h2 className="text-2xl font-bold">Tree Service In Fort Lauderdale</h2>
              <p>
                Fort Lauderdale presents a uniquely complex environment for tree care, blending dense urban neighborhoods, historic residential streets, and a network of waterways that influence how trees root and grow throughout the city. In areas like Victoria Park and Coral Ridge, mature oaks, strangler figs, and large shade trees have been growing for decades, their root systems expanding into aging sidewalks, driveways, and underground utility lines. Waterfront properties along the Intracoastal and the New River face a different set of challenges — salt-tolerant species like gumbo limbo and sea grape thrive in those conditions, but storm surges and high winds from Atlantic weather systems can turn even well-established trees into hazards without much warning. The urban canopy in neighborhoods like Flagler Village and Riverside Park has grown denser over the years as the city's popularity has increased, and managing that canopy responsibly requires an understanding of both the biology of South Florida's native and ornamental species and the practical realities of working in tight residential lots close to structures, fences, and power infrastructure. Fort Lauderdale's strict code enforcement around tree trimming and removal also means that property owners benefit from working with professionals who understand what permits and documentation may be required before work begins.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Fort Lauderdale</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind serves Fort Lauderdale from our base in nearby Lauderhill, which puts us just minutes from every neighborhood we work in across the city. We provide full tree removal for residential and commercial properties alike, handling everything from single-story lot trees in Riverside Park to larger specimens on estate-sized lots in Coral Ridge, always with careful attention to protecting the surrounding landscape during removal. Our stump grinding service is especially in demand in Fort Lauderdale's older neighborhoods, where previous owners left stumps that have since become tripping hazards, pest harborages, and obstacles to lawn maintenance. For property owners managing the aesthetic and structural health of their canopy, our tree trimming and pruning services keep growth balanced and well away from rooflines, windows, and overhead lines. We also handle shrub trimming and removal for properties where overgrown hedges have crept out of bounds, as well as tree planting for clients looking to add native species or palms to a landscape. Commercial property managers throughout downtown and Flagler Village rely on us for routine canopy maintenance that keeps their frontage looking professional. And when storms push through Broward County, our storm cleanup team is dispatched quickly across Fort Lauderdale to clear fallen limbs and debris so properties can return to normal as fast as possible.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Fort Lauderdale</h2>
              <p>
                Fort Lauderdale has no shortage of tree service companies competing for work, but Paula's A1 stands apart because of the combination of local proximity, genuine expertise, and a customer-first approach that larger operations simply cannot replicate. As a female-owned and operated business based in Lauderhill, Paula brings a personal investment to every job that goes beyond getting in and getting out — she cares about the neighborhoods she works in, and that translates into a level of attention to detail and property respect that clients in Fort Lauderdale notice immediately. Every estimate is free, every price is fair, and every job is completed with the property left clean and tidy so there is no cleanup work left for the homeowner. We are fully licensed and insured, which is not a given in an industry where unlicensed crews operate throughout South Florida, and our modern equipment means we can tackle the most demanding removals — including tight urban lots and large specimen trees near waterfront structures — without unnecessary collateral damage. Whether you own a bungalow in Victoria Park or manage a commercial building in downtown Fort Lauderdale, Paula's A1 delivers the professionalism, reliability, and workmanship that your property deserves, backed by our satisfaction guarantee on every job we complete.
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

export default Location2;
