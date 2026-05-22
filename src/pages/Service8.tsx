import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const Service8 = () => {
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
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              STORM CLEANUP
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Fast, thorough cleanup of fallen trees, branches, and storm debris across South Florida.
            </p>
            <div className="pt-8">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl uppercase tracking-wider rounded-sm shadow-2xl">
                Get Free Quote
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

        {/* Content Blocks */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[1200px] mx-auto px-[12px]">
            <div className="max-w-3xl mx-auto space-y-10 text-lg text-zinc-800 text-left mb-16">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Storm Cleanup Services in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  South Florida's hurricane season runs from June through November, and every year it reminds Broward County residents and property owners just how quickly a powerful storm can transform a well-maintained landscape into a dangerous tangle of fallen trees, snapped branches, and scattered debris. Lauderhill, like much of the greater Fort Lauderdale area, sits in a region where named tropical storms and hurricanes are not a distant possibility but a recurring reality — one that property owners must prepare for and recover from. When a major storm passes through, the damage can range from a handful of downed limbs and overturned shrubs to entire trees uprooted and deposited on rooftops, fences, vehicles, driveways, and power lines. Even storms that do not reach hurricane strength can produce damaging wind gusts and heavy rainfall that saturate soil, loosening root systems and bringing down trees that appeared healthy and stable the day before. A fallen tree on or against a structure is not just a visual problem — it is an active threat to the integrity of the building below, and the pressure it places on a roof, wall, or fence can worsen rapidly as the wood absorbs moisture or shifts with temperature changes in the days following the storm. Getting the tree removed and the debris cleared quickly is essential to preventing secondary damage. Paula's A1 Tree Removal & Stump Grind responds to storm cleanup calls throughout the Lauderhill area and surrounding communities, mobilizing quickly to assess the situation, safely remove what has fallen, and restore your property to a safe, functional condition as efficiently as possible.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind for Storm Cleanup?</h3>
                <p className="leading-relaxed">
                  Storm cleanup demands a team that can move fast, work safely in post-storm conditions, and handle the full scope of what a major weather event leaves behind. Paula's A1 Tree Removal & Stump Grind is a female-owned and operated business that has built its reputation in the Lauderhill community on reliability, transparency, and genuine care for the clients we serve. When storms hit this area hard, we understand that every hour a fallen tree sits on a roof or across a driveway is an hour of compounding stress and potential additional damage for the homeowner or business owner waiting for help. We prioritize storm response calls and move to assess and address active damage situations as quickly as our schedule allows. Our team is fully licensed and insured, which is critically important in post-storm scenarios where conditions are hazardous — unstable root plates, stressed overhanging limbs, downed or near-down power lines, and slippery surfaces all create risks that unlicensed operators are not equipped to manage safely. We use modern equipment, including cranes, aerial lifts, and chippers, to handle even the heaviest fallen specimens efficiently. Because many storm cleanup situations involve insurance claims, we provide thorough photographic documentation of the damage before we begin and the cleared site after we finish, giving you a clear record to submit to your insurer. Our estimates are always free and presented honestly — we do not inflate prices in the aftermath of a storm when demand is high. We charge fairly for the work required, haul away all debris, and leave your property clean. Satisfaction guaranteed.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Storm Cleanup Process</h3>
                <p className="leading-relaxed">
                  Call us at (954) 623-0558 as soon as it is safe to do so after a storm. We will gather the basic details about your situation — the number and size of fallen trees, whether any have landed on structures or near power infrastructure, your location in the Lauderhill area, and your timeline — so we can prioritize your call appropriately and give you an honest estimate of when we can arrive. When our crew reaches your property, the first step is a thorough safety assessment before any cutting begins. We identify hazard limbs still hanging in the canopy above the work zone, check for proximity to overhead utility lines, and evaluate the stability of any root plates still partially attached to the ground. If a downed tree is in contact with a power line, we coordinate with the utility company and do not proceed with removal in that zone until it has been confirmed de-energized. Once the site is cleared for safe operation, we work systematically through the debris — cutting, chipping, and removing fallen material in a controlled sequence that keeps the work zone organized and limits the risk of secondary incidents. Throughout the process we document each stage with photographs suitable for insurance submission. We are happy to speak with your adjuster directly if that would help move your claim forward. When all fallen trees and major debris are cleared, we do a final sweep of the property for scattered branches, leaves, and incidental material, loading everything for haul-away. The job is not done until the property is clean, safe, and you have confirmed the results meet your expectations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/img10.png" alt="Storm cleanup service image 1" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img11.png" alt="Storm cleanup service image 2" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img13.png" alt="Storm cleanup service image 3" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service8;
