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

const Location12 = () => {
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
              TREE SERVICE IN BROWARD COUNTY FL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              BROWARD COUNTY TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Fort Lauderdale · Hollywood · Pembroke Pines · Coral Springs · Davie
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
              <h2 className="text-2xl font-bold">Tree Service Across Broward County, FL</h2>
              <p>
                Broward County is one of the most densely populated counties in Florida, stretching from the Atlantic coastline inland through a patchwork of established cities, planned communities, and semi-rural residential areas. With over 1.9 million residents and a tree canopy shaped by decades of subtropical growth, the county presents a wide range of tree care demands — from the coastal communities of Fort Lauderdale and Hollywood, where salt air and wind exposure stress even well-established palms, to the sprawling HOA neighborhoods of Pembroke Pines and Coral Springs, where canopy management is governed by strict appearance standards. In Davie, large agricultural and equestrian properties feature mature hardwood canopies that require a very different level of equipment and crew expertise than a standard suburban lot. Across all of these environments, hurricane season amplifies every tree risk — a healthy tree today can become a structural threat overnight after a severe storm passes through. Paula's A1 Tree Removal & Stump Grind is based right here in Broward County, which means we know these cities, their soil conditions, their permit requirements, and the tree species that thrive — and fail — across the region.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Complete Tree Services for Every Broward Property</h2>
              <p>
                Paula's A1 offers the full range of tree care services that Broward County homeowners and property managers need, delivered with the equipment and experience to handle jobs of any size. Our tree removal service covers dead, diseased, storm-damaged, and overgrown trees across residential and commercial sites throughout the county — and we always complete the job with a thorough clean-up so your property is left ready for whatever comes next. Stump grinding follows every removal when requested, eliminating the underground hazards and termite-attracting remnants that remain after a tree comes down. We provide professional tree trimming and pruning to reduce wind load ahead of storm season, clear branches from rooflines and utility lines, and maintain the clean canopy profiles that HOA communities across Pembroke Pines and Coral Springs require. For trees showing signs of structural weakness — split crotches, leaning trunks, or co-dominant stems — our tree cabling and bracing service can add decades of life while significantly reducing the risk of failure. We also handle tree planting with proper species guidance, shrub trimming and removal, and emergency storm cleanup after tropical weather events.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">The Broward County Tree Company That Shows Up and Gets It Done</h2>
              <p>
                Paula's A1 is a female-owned and operated business, fully licensed and insured, and based in Lauderhill at the heart of Broward County. When you call us, you're not reaching a call center that dispatches a rotating roster of subcontractors — you're reaching a local team that lives and works in the same county as you and has a direct stake in the quality of every job we complete. We serve residential homeowners, HOA boards, property managers, and commercial site operators across Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Davie, and every community in between. Every estimate is free and every price is transparent — no hidden fees, no surprise charges, and no pressure to sign before you're ready. Our modern equipment handles large-scale removals efficiently while protecting your lawn, driveway, and surrounding landscaping from unnecessary damage. We understand that Broward County property owners have high standards and a lot of choices — and we earn the work by consistently delivering results that hold up, jobs done right the first time, and a property left cleaner than we found it. That's the Paula's A1 standard, and it applies to every single job we take across Broward County.
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

export default Location12;
