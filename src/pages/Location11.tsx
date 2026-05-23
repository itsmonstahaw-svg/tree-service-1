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

const Location11 = () => {
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
              TREE SERVICE IN MIAMI FL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              MIAMI FL TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Brickell · Wynwood · Coral Gables · Coconut Grove · Little Havana
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
              <h2 className="text-2xl font-bold">Tree Service In Miami, FL</h2>
              <p>
                Miami's urban tree canopy faces a unique combination of pressures that few other cities in the country can match. The combination of high humidity, year-round warmth, relentless tropical storms, and densely packed residential and commercial properties creates conditions where trees can shift from healthy to hazardous faster than most homeowners expect. Neighborhoods like Brickell and Wynwood feature mature street trees growing in tight corridors between buildings and power lines, while communities in Coral Gables and Coconut Grove are defined by sprawling specimen trees that require careful ongoing management. In Little Havana, mature fruit trees and palms line residential streets where root pressure and canopy overhang become regular maintenance concerns. Across all of these areas, the arrival of hurricane season transforms ordinary tree maintenance from an aesthetic concern into a genuine safety issue. Paula's A1 Tree Removal & Stump Grind brings professional crews and commercial-grade equipment to Miami properties, delivering the same quality of work that Broward County homeowners have come to depend on.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Full-Service Tree Care for Miami Properties</h2>
              <p>
                Whether you need a single dead palm removed from a Brickell condo courtyard or a full canopy cleanup after a tropical storm sweeps through Coconut Grove, Paula's A1 has the equipment and experience to handle it efficiently and safely. Our tree removal service covers all scenarios — dead, diseased, storm-damaged, and structurally compromised trees — and we always leave the property clean when we're done. Stump grinding eliminates the leftover hazards and termite-attracting debris that linger after removal, grinding stumps well below grade so the area can be paved, planted, or landscaped without obstruction. We provide expert tree trimming and pruning to control canopy size, improve wind resistance ahead of storm season, and keep branches well away from rooflines and utility lines throughout Miami's urban neighborhoods. For properties in Coral Gables or Coconut Grove where historic specimen trees need structural support, our tree cabling and bracing service can preserve their integrity and reduce the risk of failure. We also handle shrub trimming and removal, tree planting with species guidance suited to Miami's climate, and rapid storm cleanup response when the weather turns severe.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Miami Property Owners Choose Paula's A1</h2>
              <p>
                Paula's A1 is a female-owned and operated tree service company, fully licensed and insured, with a track record built across South Florida's most demanding residential and commercial properties. Serving Miami means working in one of the most scrutinized real estate markets in the country — where HOA standards are strict, property values are high, and every job needs to be done with precision and care. We understand that standard. Every estimate is free, every price is transparent, and every crew member is trained to treat your property with the same level of respect we'd want shown on our own. Our equipment is modern and well-maintained, allowing us to execute large removals in tight urban spaces without damaging driveways, irrigation systems, or surrounding landscaping. We work on both residential and commercial properties throughout Miami, and we back every single job with our satisfaction guarantee. If you're a homeowner in Wynwood managing a city lot, or a property manager in Little Havana overseeing a multi-unit complex with mature trees requiring seasonal care, Paula's A1 is the South Florida crew you can rely on to show up, do the work right, and leave your property in better shape than we found it.
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

export default Location11;
