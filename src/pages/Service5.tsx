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

const Service5 = () => {
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
              SHRUB TRIMMING & REMOVAL
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Keep your landscaping neat, healthy, and compliant with professional shrub care and removal.
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
                <h3 className="text-2xl font-bold text-black mb-3">Shrub Trimming & Removal in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  Shrubs and hedges are among the hardest-working elements in any South Florida landscape. They define property boundaries, provide privacy screens, soften the edges of structures, and create the green backdrop that makes a yard feel complete. In Lauderhill and the surrounding Broward County communities, the warm subtropical climate means shrubs grow fast — sometimes far faster than homeowners expect. Ligustrum, Podocarpus, Viburnum, and Cocoplum can shoot up several feet in a single growing season, quickly transforming a tidy hedge into a sprawling, overgrown wall that blocks natural light, crowds walkways, and raises red flags with homeowners associations. Many communities in this area have strict landscaping ordinances that require shrubs to be maintained below specific heights and kept trimmed back from sidewalks and driveways. Neglecting that maintenance can mean HOA notices, fines, or even mandatory removal at the owner's expense. Whether you need routine trimming to stay in compliance, a hard cutback to restore shape after a season of neglect, or complete removal to make room for a landscape redesign, Paula's A1 Tree Removal & Stump Grind has the equipment and expertise to handle it cleanly and efficiently. We serve residential homeowners, rental property managers, and commercial property owners throughout the Lauderhill area, delivering results that look sharp and last.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind for Shrub Work?</h3>
                <p className="leading-relaxed">
                  Paula's A1 Tree Removal & Stump Grind is a female-owned and operated business built on a straightforward promise: fair pricing, honest service, and a clean property when we leave. When you call us for shrub trimming or removal, you get a free estimate upfront with no hidden charges buried in the final invoice — what we quote is what you pay. Our crew is fully licensed and insured, which matters more than most homeowners realize when power tools are operating near structures, irrigation lines, or neighboring fences. We invest in modern commercial-grade trimming equipment that produces clean, precise cuts rather than the ragged tears that leave shrubs vulnerable to disease and pest infestation, which is a real concern in South Florida's humid climate. For removal jobs, we bring the right machinery to extract root balls efficiently without tearing up surrounding turf or garden beds any more than absolutely necessary. We handle jobs of all scales — from a single overgrown Bougainvillea crowding a front entry to hundreds of linear feet of hedge running the perimeter of a commercial property. Both residential and commercial clients receive the same level of attention, and every job ends with thorough cleanup: clippings bagged, debris hauled, and the property left in better condition than we found it. Our goal is not just to complete the work but to earn a call back the next time shrub season rolls around.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Shrub Trimming & Removal Process</h3>
                <p className="leading-relaxed">
                  The process begins the moment you reach out to us at (954) 623-0558. We schedule a convenient time to visit your property, walk the areas in question, and assess exactly what the shrubs need — whether that is a light shaping pass, a significant reduction in height and spread, selective thinning to restore airflow and light penetration, or complete removal down to the root. We take note of any HOA guidelines you share, neighboring structures that could be affected, irrigation heads or landscape lighting buried near root zones, and anything else that should factor into our approach. Once we have a complete picture, we present you with a clear, itemized estimate at no charge. When you approve the work, we schedule your service at a time that works for you and show up on time with a full crew and the right equipment for the job. On the day of service, we work methodically through each shrub or hedge, making cuts that promote healthy regrowth where trimming is the goal, or excavating and extracting root systems thoroughly where removal is required. Throughout the job we keep debris contained and away from your lawn and garden beds. When the work is complete, we do a final walkthrough with you to confirm the results meet your expectations before we collect payment. We accept multiple forms of payment and never pressure you into services beyond what we originally discussed.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/img1.png" alt="Shrub trimming service image 1" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img4.png" alt="Shrub trimming service image 2" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img7.png" alt="Shrub trimming service image 3" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service5;
