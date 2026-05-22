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

const Location7 = () => {
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
              TREE SERVICE IN SUNRISE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              SUNRISE TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Sunrise Golf Village · Welleby · Sawgrass · Springtree · West Sunrise
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
              <h2 className="text-2xl font-bold">Tree Service In Sunrise</h2>
              <p>
                Sunrise has grown into one of western Broward County's most dynamic cities, blending dense HOA-governed residential communities with major commercial corridors — and that combination creates consistent, ongoing demand for professional tree care throughout the city. Sitting at the edge of the Everglades, Sunrise is home to a wide variety of native Florida vegetation, including slash pines, cabbage palms, live oaks, and subtropical understory trees that thrive in the flat, low-lying terrain. The proximity to natural wetlands means tree roots frequently interact with high water tables, which can accelerate decay in older specimens and create dangerous lean or instability without visible warning signs above the canopy. Neighborhoods like Welleby and Springtree feature mature suburban landscapes where trees planted decades ago now loom over rooflines, driveways, and power lines. Meanwhile, the Sawgrass area near the major retail corridor sees commercial properties that need consistent, professional tree maintenance to stay presentable, safe, and compliant with municipal requirements. Summer storm systems rolling in off the Everglades can be particularly intense in this part of Broward, making proactive tree care an essential part of property management in Sunrise.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Sunrise</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind provides comprehensive tree services to both residential and commercial properties across Sunrise. In HOA communities like Sunrise Golf Village and Springtree, where community standards and deed restrictions often mandate well-groomed landscaping, our tree trimming and pruning services keep canopies shaped, healthy, and within required clearances. When a tree has outgrown its space, suffered storm damage, or simply become a structural hazard, our full tree removal and stump grinding services get the job done cleanly and efficiently, leaving nothing behind but a flat, usable yard. We also offer shrub trimming and removal for overgrown hedges and foundation plantings, tree planting for new specimens that suit South Florida's climate and your property's layout, and tree cabling and bracing for valuable mature trees that show signs of structural weakness but are worth preserving. Storm cleanup is available quickly after severe weather events, helping Sunrise homeowners and commercial property managers get their grounds back in order without delay. From West Sunrise residential streets to the commercial properties near Sawgrass, we handle every job with the same level of care.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Sunrise</h2>
              <p>
                Property owners in Sunrise — whether managing a single-family home in Welleby or a commercial building near the Sawgrass corridor — deserve a tree service company they can genuinely rely on. Paula's A1 is a female-owned and operated business with deep roots in Broward County, and we bring that local commitment to every Sunrise job we take on. We know the native vegetation that defines this part of western Broward, we understand the HOA standards that govern so many Sunrise neighborhoods, and we respond promptly whether you need routine seasonal work or urgent post-storm debris removal. Our equipment is modern and well-maintained, capable of handling both the compact suburban yards of Springtree and the larger commercial lots closer to the Sawgrass retail area. Free estimates are always available, our pricing is fair and transparent, and we carry full licensing and insurance on every job so you're never left exposed. We leave every property clean and orderly when we finish, because we know that matters as much to you as the tree work itself. Satisfaction is guaranteed — and that's a commitment we stand behind on every call we answer in Sunrise.
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

export default Location7;
