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

const Service4 = () => {
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
              TREE PRUNING
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Targeted branch removal to improve tree structure, health, and long-term resilience.
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
                <h3 className="text-2xl font-bold text-black mb-3">Tree Pruning Services in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  Tree pruning is a deliberate, targeted practice that goes well beyond the general shaping associated with trimming. Where trimming focuses on the outer canopy and overall silhouette, pruning addresses the internal architecture of a tree — identifying and removing specific branches that are dead, diseased, structurally weak, or growing in directions that compromise the tree's long-term stability. In South Florida's climate, this distinction matters enormously. Lauderhill trees face an annual gauntlet of heavy rain, intense heat, high humidity, and hurricane-force winds, all of which place enormous stress on branch unions and root systems. A tree with poor internal structure — crossed branches, tight crotch angles, included bark, or excessive canopy weight on one side — is far more likely to shed large limbs or fail at the trunk when a storm arrives. Proper pruning corrects these structural deficiencies over time, producing trees that are genuinely stronger, longer-lived, and better adapted to the demands of South Florida's environment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind for Tree Pruning?</h3>
                <p className="leading-relaxed">
                  Pruning done incorrectly causes lasting damage — flush cuts that remove branch collars, lion-tailing that strips interior branches, or topping that forces rapid, weakly attached regrowth. At Paula's A1 Tree Removal & Stump Grind, we apply proper pruning techniques that respect the biology of each tree species and the specific conditions of your Lauderhill property. As a female-owned and operated business, we built our reputation on doing the job right the first time rather than cutting corners for speed. Our crew is fully licensed and insured, and we use modern equipment that allows us to reach difficult branches safely without damaging surrounding landscaping. We offer free estimates on all pruning work and price every job fairly based on what's actually needed — not on maximizing billable hours. After we're done, your property will be completely cleaned of all clippings and debris, and our satisfaction guarantee ensures you won't be left with results you didn't expect.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Tree Pruning Process</h3>
                <p className="leading-relaxed">
                  Our pruning process starts with a thorough evaluation of each tree's current condition — examining branch structure, signs of disease or pest activity, deadwood accumulation, crown density, and any limbs that show evidence of included bark or co-dominant stems that could split under load. We discuss with you what outcomes matter most: whether the priority is storm preparation, improving the tree's long-term health, opening up sightlines, or removing deadwood that poses a drop hazard. On the day of service, we make each cut at the correct location just outside the branch collar, preserving the tree's natural wound-closure response and minimizing the risk of decay entering the cut surface. Crown thinning cuts are spaced throughout the interior to reduce wind resistance without stripping the tree of the foliage it needs to photosynthesize. We collect and remove all pruned material from your property and perform a final walk of the site to confirm the work meets the plan we discussed and your expectations before collecting payment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/img10.png" alt="Arborist pruning a large canopy tree" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img11.png" alt="Deadwood removal during tree pruning" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img12.png" alt="Healthy well-pruned tree on Florida property" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service4;
