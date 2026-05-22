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

const Service2 = () => {
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
            style={{ backgroundImage: 'url("/images/stump_grinding.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              STUMP GRINDING
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Complete stump removal using professional-grade grinding equipment — leaving your yard clean and usable.
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
                <h3 className="text-2xl font-bold text-black mb-3">Stump Grinding Services in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  Once a tree has been cut down, the stump left behind is far more than an eyesore — it becomes an active liability on your property. In Lauderhill's warm, humid climate, leftover stumps decompose slowly and in the meantime create ideal nesting environments for termites, carpenter ants, and other wood-boring insects that can migrate toward your home or building. Stumps also pose real physical hazards, particularly in yards where children play or where foot traffic is common; a half-buried stump hidden by grass can cause serious trips and falls. Beyond pest and safety concerns, old stumps frequently produce new root sprouts that grow into unwanted secondary trees, pulling water and nutrients away from your existing landscaping. South Florida's sandy, moisture-rich soil accelerates this regrowth process. Professional stump grinding eliminates the entire visible and near-surface structure of the stump, reducing it to wood chips and making the ground level, safe, and ready for sod, landscaping, or hardscaping almost immediately.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind for Stump Grinding?</h3>
                <p className="leading-relaxed">
                  Paula's A1 Tree Removal & Stump Grind has built its reputation in Lauderhill on delivering genuinely thorough stump grinding — not a surface-level pass that leaves the root system intact. Our female-owned business takes real pride in the quality and completeness of every job, which is why we back all of our work with a satisfaction guarantee. We operate professional-grade stump grinders that are sized and configured for South Florida's diverse property types, from compact residential yards with limited access to sprawling commercial lots with multiple stumps to address. Every estimate is free, and we present straightforward pricing with no surprise charges after the work is done. We are fully licensed and insured, so you bear no financial risk if anything unexpected occurs during the grinding process. When we finish, we clean the site of all wood chip debris and leave the ground surface even and tidy — exactly as it should look when a professional team has done its job right.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Stump Grinding Process</h3>
                <p className="leading-relaxed">
                  We begin with a free on-site visit to measure the stump's diameter, assess its depth, and check for any underground utilities or irrigation lines in the immediate vicinity. This step is essential in South Florida, where older properties often have unmarked irrigation systems running close to tree root zones. On the day of service, we position our grinder at the optimal angle for the available access and work down through the stump in overlapping passes, typically grinding to a depth of eight to twelve inches below grade — deep enough to eliminate regrowth potential and allow for sod or planting to establish over the area without obstruction. The resulting wood chip material can be left in place as mulch if preferred, or collected and hauled off the property entirely. After grinding is complete, we rake and level the disturbed soil, fill any voids, and clear the surrounding area of debris so you can begin new landscaping immediately. Final payment is taken only once you're satisfied with how the job looks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/img4.png" alt="Stump grinder in operation" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img5.png" alt="Stump being ground down to grade" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img6.png" alt="Clean yard after stump grinding" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service2;
