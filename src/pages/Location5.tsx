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

const Location5 = () => {
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
              TREE SERVICE IN PEMBROKE PINES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              PEMBROKE PINES TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Chapel Trail · Silver Lakes · Century Village · Pembroke Falls · Pines City Center
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
              <h2 className="text-2xl font-bold">Tree Service In Pembroke Pines</h2>
              <p>
                Pembroke Pines is one of the largest cities in Broward County, home to hundreds of thousands of residents spread across a broad range of neighbourhoods from established family communities to active adult retirement enclaves. With that scale comes an enormous amount of residential tree canopy — mature oaks, royal palms, live oaks, and subtropical ornamentals that have been growing on properties for decades. The city's warm, humid climate accelerates tree growth but also accelerates disease, root spread, and storm damage risk. Every hurricane season, Pembroke Pines homeowners deal with fallen limbs, uprooted trees, and debris left behind by tropical storms. The city's strict HOA culture in communities like Chapel Trail and Pembroke Falls means that overgrown or poorly maintained trees can trigger complaints, violations, and fines. Whether you are managing a single-family home, a commercial property, or a large community association, professional tree care is an essential part of property ownership in Pembroke Pines.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Pembroke Pines</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind serves every corner of Pembroke Pines, from the retirement communities of Century Village and Silver Lakes to the newer developments near Pines City Center. We handle full tree removals for trees that have outgrown their space, become diseased, or pose a threat to structures and utilities. Our stump grinding service eliminates unsightly leftover stumps that attract termites, trip hazards, and root regrowth — a common issue in South Florida's fast-growing soil conditions. We also provide tree trimming, pruning, and shrub trimming for homeowners who want to stay ahead of HOA requirements and keep their property looking its best year-round. Storm cleanup is another service we provide frequently in Pembroke Pines after summer thunderstorms and tropical events leave debris across yards and driveways. Our licensed, insured team arrives with the modern equipment needed to work safely and efficiently on any size property throughout the city.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Pembroke Pines</h2>
              <p>
                Pembroke Pines residents and property managers choose Paula's A1 Tree Removal & Stump Grind because we are a local, owner-operated company that truly shows up for our customers. As a female-owned business, Paula brings a level of care and personal accountability that larger tree companies simply cannot match — when you call, you speak to the owner directly. We offer free estimates so you always know exactly what to expect before any work begins, with no surprise costs or pressure. Our team is fully licensed and insured, which matters enormously in a city where HOAs and municipalities closely scrutinise contractor qualifications. We use modern, track-driven stump grinding equipment that works effectively on even the tightest Pembroke Pines lots without damaging surrounding landscaping or turf. After every job, we leave your property completely clean and debris-free — because in a well-maintained community like Pembroke Pines, the finish matters as much as the work itself.
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

export default Location5;
