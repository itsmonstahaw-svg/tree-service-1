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

const Service3 = () => {
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
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              TREE TRIMMING
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Shape, thin, and maintain your trees for better health, safety, and curb appeal.
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
                <h3 className="text-2xl font-bold text-black mb-3">Tree Trimming Services in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  Florida's growing season never really stops, and that means trees on residential and commercial properties in Lauderhill can become overgrown, unruly, and genuinely dangerous in a remarkably short period of time. Dense, heavy canopies that go untrimmed become wind sails during hurricane season, dramatically increasing the likelihood that limbs — or entire trees — will fail under high-speed gusts. Branches that creep toward utility lines create fire and outage hazards that utility companies can penalize property owners for failing to address. Overhanging limbs that touch or overhang rooflines give pests a direct pathway into attic spaces and can abrade roof shingles over time. Beyond safety, untrimmed trees simply look neglected — a significant concern for commercial properties trying to maintain a professional image and homeowners managing curb appeal in competitive South Florida real estate markets. Routine professional trimming keeps trees at manageable proportions, reduces storm risk, and preserves the visual appeal of your landscape year-round.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind for Tree Trimming?</h3>
                <p className="leading-relaxed">
                  At Paula's A1 Tree Removal & Stump Grind, tree trimming is not a side service — it's a core part of what we do for property owners throughout the Lauderhill area. As a female-owned and operated company, we approach every customer interaction with honesty and genuine care about the outcome of our work. Our licensed and insured crew uses modern trimming equipment and proper techniques to shape trees without causing unnecessary stress or damage to the tree's structure. We serve residential clients who want their yard to look its best as well as commercial property managers who need reliable, consistent maintenance across multiple trees and species. Every job begins with a free estimate, and our fair pricing reflects the actual scope of work — never padded to take advantage of a homeowner who doesn't know what trimming should cost. We haul away all clippings and debris at the end of every visit, leaving your property cleaner than we found it and backing every job with a satisfaction guarantee.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Tree Trimming Process</h3>
                <p className="leading-relaxed">
                  When you contact us for tree trimming, we schedule a free walkthrough of your property to evaluate which trees need attention, how much material should come off, and whether any limbs pose an immediate hazard that needs to be prioritized. We discuss your goals — whether that's clearing a roofline, improving sunlight penetration to your lawn or garden, preparing for hurricane season, or simply improving the way your property looks from the street. On the day of service, our crew works efficiently using pole saws, aerial lifts, and climbing gear as the situation demands, trimming each tree to a balanced, natural shape rather than leaving flat or jagged cuts that invite disease. All cut material is chipped or bundled and loaded out before we leave. We do a final walkthrough with you to confirm the results meet your expectations, and payment is collected only once you're satisfied with what you see.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/work1.jpg" alt="Tree trimming in progress" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/work2.jpg" alt="Trimmed trees along a South Florida property" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/work3.jpg" alt="Clean curb appeal after professional tree trimming" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service3;
