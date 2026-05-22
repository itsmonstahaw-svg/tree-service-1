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

const Location8 = () => {
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
              TREE SERVICE IN DAVIE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              DAVIE TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Orange Drive · Stirling Road · Nova · Pine Island Ridge · Southwest Ranches
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
              <h2 className="text-2xl font-bold">Tree Service In Davie</h2>
              <p>
                Davie is unlike almost anywhere else in Broward County — a town that has managed to preserve its equestrian and rural-residential identity even as the surrounding urban landscape has grown up around it. Across much of the town, large wooded properties stretch along Orange Drive and Stirling Road with mature tree canopies that have been developing for decades, sheltering homes, barns, paddocks, and livestock areas. That character is wonderful, but it also means tree hazards here tend to be more complex than in a typical suburban neighborhood. Dead or damaged limbs that fall into a horse paddock or onto a fence line aren't just property damage — they're a safety emergency for animals. Root systems from large oaks and ficus trees spread aggressively across these wide lots, and storm seasons consistently produce significant blowdown across the wooded sections of town. The Southwest Ranches area bordering Davie carries the same rural spirit, with sprawling properties where unmaintained trees can become major liabilities. The Nova Southeastern University area adds a more institutional character to the eastern part of town, where campus-adjacent properties require professional tree care on a regular basis.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Davie</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind brings the right equipment and approach to Davie's uniquely varied properties. Our team understands the extra care required when working near horses, livestock, and ranch infrastructure — we manage debris carefully, work efficiently to minimize disruption to animals, and leave the property clean and clear when the job is done. For the large mature trees common throughout the wooded sections of Davie, we offer complete tree removal for hazardous or dying specimens, and we follow up with thorough stump grinding so stumps don't become obstacles in pastures or paddocks. Our tree trimming and pruning services are calibrated for the oversized canopies that thrive on these larger lots, reducing wind load before storm season and improving tree structure for long-term health. We also plant new trees suited to Davie's conditions, perform shrub trimming and removal across established landscape beds, and install tree cabling and bracing for structurally compromised trees that still have life in them. Pine Island Ridge and the residential sections closer to Stirling Road benefit from our full service menu as well, keeping suburban properties safe and well-maintained year-round.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Davie</h2>
              <p>
                Davie property owners — whether they're managing a horse farm along Orange Drive or a residential lot near the Nova campus — need a tree service company that can handle the scale and complexity this town demands. Paula's A1 is a female-owned and operated business serving Broward County, and we take special pride in working in Davie because no two properties here are exactly the same. We bring modern, heavy-duty equipment capable of accessing large rural lots and managing the big trees that define this community, and our team is trained to work safely around animals and agricultural features that many tree crews simply aren't prepared for. Every estimate is free, every price is fair, and we're fully licensed and insured so you're protected from the first cut to the final cleanup. We leave every property clean — no scattered limbs, no leftover debris, no excuses — because we know how much your Davie property means to you. From storm response to seasonal pruning to complete removals on heavily wooded acreage, Paula's A1 is ready to handle the call whenever you need us.
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

export default Location8;
