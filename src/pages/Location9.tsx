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

const Location9 = () => {
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
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5 text-white">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              TREE SERVICE IN TAMARAC
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              TAMARAC TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Woodlands · Kings Point · Mainlands · Sunflower · Lime Bay
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
              <h2 className="text-2xl font-bold">Tree Service In Tamarac</h2>
              <p>
                Tamarac is a well-established Broward County city known for its mature residential communities, many of which have stood for decades and grown a deep, established tree canopy along streets and around homes. Communities like the Woodlands, Kings Point, and Mainlands were developed in the 1970s and 1980s, and the trees planted during those years have grown significantly — some to the point where they now overhang rooftops, crack sidewalks, or compete with utility lines. Tamarac's large population of retirees and long-term homeowners often find that aging trees on their properties have quietly become serious hazards. South Florida's subtropical climate means trees grow faster than in northern states, and without regular maintenance, what starts as a well-placed shade tree can become a liability within a few seasons. Tamarac also sits well inland, which means its trees are exposed to full hurricane wind loads without the protection of coastal vegetation buffers, making storm preparation particularly important for homeowners throughout the city.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Tamarac</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind provides a full range of tree services to Tamarac residents and property owners. We specialise in safe tree removal for trees that have outgrown their space, developed disease, or become structural hazards to buildings and fences. After a removal, our stump grinding service eliminates the remaining stump completely, preventing regrowth, pest nesting, and the tripping hazards that stumps create on smaller residential lots. We also offer tree trimming and pruning to reduce wind load on large trees ahead of hurricane season — a practical investment that can prevent significant storm damage. Our shrub trimming service keeps Tamarac properties tidy and in line with community appearance standards, while our storm cleanup teams respond quickly after tropical weather events leave debris across lawns, driveways, and common areas. We serve all Tamarac neighbourhoods and are familiar with the characteristics of the mature trees found throughout this city.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Tamarac</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind is a trusted choice for Tamarac homeowners because we bring professionalism, personal service, and genuine care to every job. As a female-owned, owner-operated business based nearby in Lauderhill, we are familiar with the older residential landscaping common throughout Tamarac and understand the specific challenges that come with mature trees on compact lots. We offer free estimates so there are never any surprises, and our fair pricing reflects our commitment to honest, straightforward service that working-class and retired homeowners can rely on. Our team is fully licensed and insured, which provides peace of mind for property owners who want to ensure all work is completed safely and legally. We use modern, track-driven stump grinding equipment that can access tight residential spaces without damaging lawns or surrounding garden beds. And when we leave, we leave your property completely clean — because Tamarac's well-kept communities deserve nothing less.
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

export default Location9;
