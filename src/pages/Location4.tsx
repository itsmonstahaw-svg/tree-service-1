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

const Location4 = () => {
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
              TREE SERVICE IN MIRAMAR
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              MIRAMAR TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Monarch Lakes · Sunset Lakes · Riviera Isles · Silver Shores · Melrose Park
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
              <h2 className="text-2xl font-bold">Tree Service In Miramar</h2>
              <p>
                Miramar is one of South Florida's most rapidly expanding cities, and its master-planned communities — from Monarch Lakes and Sunset Lakes to Riviera Isles and Silver Shores — were developed with landscaping as a core part of the neighborhood aesthetic. That means large residential lots with carefully selected trees, palm-lined streets, and community green spaces that are now reaching the age where professional maintenance is not optional but necessary. The trees planted during Miramar's major growth phases in the 1990s and 2000s are now mature specimens with root systems that can conflict with driveways, sidewalks, pool decks, and drainage infrastructure. South Florida's wet season brings intense rainfall that saturates the flat, low-lying terrain throughout Miramar, and that recurring saturation creates conditions where even structurally sound trees can become unstable, particularly during hurricane season when wind loads are highest. HOA-governed communities across the city hold property owners to strict landscaping standards, and a single overgrown tree or improperly maintained shrub line can result in notices and fines that add up quickly. Understanding how tree care intersects with HOA compliance, property values, and storm preparedness in a planned community environment is essential for anyone providing service in Miramar, and it is exactly the kind of context that Paula's A1 brings to every job.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Miramar</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind serves Miramar's planned communities and residential neighborhoods with a full range of tree care services designed to meet both individual homeowner needs and the landscaping standards that HOAs across the city enforce. Our tree removal service addresses dead, diseased, storm-damaged, or structurally unsound trees safely and efficiently, with complete debris removal included so there is nothing left behind for the homeowner to deal with. Stump grinding eliminates the stumps that remain after tree removal — an important detail in HOA communities where visible stumps are often cited as a code violation and where root remnants left in the ground can eventually heave pavement and pool surrounds. We provide tree trimming and pruning that keeps canopies properly shaped, reduces wind resistance ahead of storm season, and ensures that growth stays within the boundaries required by community standards. Shrub trimming and removal is available for properties where hedgerows have encroached on sidewalks, driveways, or neighbor boundaries. For homeowners looking to add species to their landscape that complement Miramar's planned aesthetic, our tree planting service includes guidance on appropriate selections. When mature trees show signs of structural weakness, our tree cabling and bracing service can stabilize them without requiring removal. And after a severe weather event, our storm cleanup teams reach Miramar quickly from our Lauderhill base to clear debris and restore property access.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Miramar</h2>
              <p>
                Miramar homeowners living in HOA-governed communities need a tree service that understands the intersection of quality workmanship and community standards, and Paula's A1 delivers on both counts every time. Our crews arrive fully equipped, complete the job with precision, and leave the property in a condition that would satisfy the most demanding HOA inspection — because we know that the appearance of your property after we leave reflects directly on the trust you placed in us. Paula's A1 is female-owned and operated, fully licensed and insured, and every single job begins with a free, no-obligation estimate so there are no surprises when the work is done. Our pricing is fair and transparent, our equipment is modern and capable of handling the larger trees found on Miramar's generously sized residential lots, and our team takes genuine care to protect surrounding landscaping, pool areas, and hardscaping during every removal and trimming operation. As a Broward County-based business operating just up I-75 from Miramar, we reach the city quickly and efficiently — which is particularly valuable when storm season creates urgent cleanup needs across the community at once. Every job we complete in Miramar is backed by our satisfaction guarantee, because we believe Miramar homeowners deserve the same level of care and accountability that we bring to every property we work on.
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

export default Location4;
