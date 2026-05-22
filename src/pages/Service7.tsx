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

const Service7 = () => {
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
            style={{ backgroundImage: 'url("/images/tree_cabling.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              TREE CABLING & BRACING
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Structural support systems that save your valuable trees and protect your property.
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
                <h3 className="text-2xl font-bold text-black mb-3">Tree Cabling & Bracing Services in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  Not every structurally compromised tree needs to come down. In many cases, a carefully engineered cabling or bracing system can extend a tree's life by years or even decades, preserving the shade, character, and property value that a mature specimen provides while significantly reducing the risk it poses to the surrounding structure, vehicles, or people below. Tree cabling and bracing is particularly relevant in South Florida, where Live Oaks, Mahogany trees, and other large landscape trees frequently develop co-dominant stems — two or more trunks of roughly equal diameter that originate from the same point and compete with each other for structural dominance. The junction between co-dominant stems, called a union, is inherently weaker than a single-trunk attachment and is one of the most common failure points during high-wind events. South Florida's hurricane season runs from June through November, and the region is no stranger to tropical storms, Category 1 winds, and the sudden, violent squalls that come with afternoon thunderstorms even in off-season months. A tree with a weak union or a heavy, unbalanced canopy is a liability that increases with every storm. Cabling installs high-strength steel or synthetic rope between major limbs or stems to limit the range of movement during wind loading, reducing the leverage forces that cause splits at the union. Bracing uses threaded steel rods installed directly through the trunk or a weak fork to provide rigid support where flexible cabling is insufficient. Together, these systems give compromised trees the supplemental structure they need to weather South Florida's demanding conditions year after year.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind for Cabling & Bracing?</h3>
                <p className="leading-relaxed">
                  Cabling and bracing is specialized work that demands both technical knowledge and honest judgment. The honest part matters most: the right answer is not always the one that generates the most revenue for the service provider. Paula's A1 Tree Removal & Stump Grind is a female-owned and operated business that built its reputation on giving clients straight answers. If a tree can be saved with a cabling or bracing system, we will tell you so and show you why. If the structural damage is too severe and removal is the safer, more cost-effective path, we will tell you that instead — even though a cabling job might generate more immediate income. Our free estimates include a thorough structural assessment of the tree in question: we evaluate the location and severity of the weak union or damaged attachment, the size and weight distribution of the canopy, the proximity of the tree to structures and high-traffic areas, and the overall health of the root system and vascular tissue. We are fully licensed and insured, and we install systems using modern hardware and techniques appropriate to the tree's species, size, and failure risk profile. We use both dynamic synthetic rope systems, which allow natural movement and flex, and static steel cable or rod systems for higher-risk situations where rigid support is warranted. Every installation is documented so you have a record for your insurance provider, and we discuss a monitoring schedule so the system can be inspected and adjusted as the tree continues to grow. Choosing cabling over removal can save thousands of dollars and preserve a tree that would take generations to replace.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Tree Cabling & Bracing Process</h3>
                <p className="leading-relaxed">
                  The process begins with a call to (954) 623-0558 and a scheduled free consultation at your property. During the site visit, we perform a hands-on structural assessment of the tree — examining the union angle and included bark, tapping the trunk to detect internal decay, evaluating the canopy weight distribution, and identifying any existing cracks, splits, or signs of previous failure. We also consider the target zone below and around the tree: what is at risk if a limb or stem fails, and how urgently does the situation need to be addressed. Based on that assessment, we determine whether cabling, bracing, a combination of both, or an alternative approach is the appropriate recommendation. We present our findings in plain language along with a clear, itemized estimate — no jargon, no pressure, no surprise charges. Once you approve the work, we schedule the installation and arrive with the right hardware, climbing gear, and equipment for the job. Cable installations are anchored well above the weak union, typically at roughly two-thirds of the distance from the union to the branch tips, using hardware sized to the diameter and load requirements of the stems involved. Brace rods are installed perpendicular to the grain through the union where greater rigidity is needed. After installation we clean up the work area completely, removing any bark borings, hardware packaging, or incidental debris. We provide you with documentation of the system components installed and a recommended timeframe for a follow-up inspection, typically within twelve to eighteen months, to verify hardware condition and adjust tension as the tree grows.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/img3.png" alt="Tree cabling and bracing service image 1" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img6.png" alt="Tree cabling and bracing service image 2" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img9.png" alt="Tree cabling and bracing service image 3" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service7;
