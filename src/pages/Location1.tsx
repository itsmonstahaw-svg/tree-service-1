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

const Location1 = () => {
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
              TREE SERVICE IN LAUDERHILL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              LAUDERHILL TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Inverrary · Lauderhill Mall Area · Pine Island · Rock Island · Central Lauderhill
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
              <h2 className="text-2xl font-bold">Tree Service In Lauderhill</h2>
              <p>
                Lauderhill is a densely settled city in central Broward County, and its combination of subtropical climate, frequent afternoon thunderstorms, and mature residential tree canopies makes professional tree care an ongoing necessity for homeowners throughout the area. The city's neighborhoods range from the established single-family streets near Inverrary and Pine Island to the busier corridors around the Lauderhill Mall, and across all of these areas trees are under constant pressure from South Florida's intense summer heat, seasonal hurricane winds, and the shallow, often saturated soils that characterize the region. Laurel oaks, ficus, royal palms, and various fruit trees are common throughout the community, and when those species grow unchecked near power lines, rooftops, or driveways the potential for property damage rises sharply. Storm season in particular can turn a healthy-looking canopy into a serious liability almost overnight, leaving homeowners scrambling for qualified help at exactly the moment when demand is highest. Understanding these local conditions is not something that comes from a manual — it comes from years of working right here in Lauderhill, watching how the soil behaves after heavy rain and knowing which tree species are prone to failure in high winds.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Lauderhill</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind is based right here in Lauderhill, which means every service we offer is delivered with a level of local availability that no out-of-area crew can match. We handle full tree removal for trees that are dead, diseased, storm-damaged, or simply too large for the space they occupy, and we always leave the property clean once the work is done. Our stump grinding service eliminates the tripping hazards and pest-attracting remnants that linger after a tree comes down, grinding roots well below the surface so the area can be replanted or landscaped without interference. We also provide tree trimming and pruning to keep canopies balanced, healthy, and well away from structures, as well as shrub trimming and removal for properties where overgrown hedges and shrubs are taking over. For homeowners looking to add shade trees, ornamental species, or palms to their landscape, we offer professional tree planting with guidance on species selection suited to Lauderhill's soil and light conditions. When mature trees show signs of structural weakness, our tree cabling and bracing service can extend their life and reduce the risk of limb failure. And when a storm moves through and drops branches across your yard or driveway, our storm cleanup team responds quickly because we're just minutes away.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Lauderhill</h2>
              <p>
                When you hire Paula's A1, you're hiring a Lauderhill-based, female-owned and operated business that has built its reputation block by block in this community. Paula knows these streets, these neighborhoods, and the particular tree challenges that come with living in central Broward County, and that local knowledge translates directly into faster response times, better site assessments, and work that is done right the first time. Every job comes with a free estimate, transparent pricing, and a genuine commitment to leaving your property in better shape than we found it — no debris left behind, no damage to surrounding landscaping, no surprises on the final invoice. We are fully licensed and insured, so homeowners and property managers can hire us with complete confidence. Our equipment is modern and well-maintained, which means we can handle large removals efficiently and safely without tearing up your lawn or damaging your driveway in the process. We serve both residential and commercial clients throughout Lauderhill, and every single job is backed by our satisfaction guarantee. Whether you need one dead palm removed before hurricane season or a full-scale canopy cleanup after a major storm, Paula's A1 is the team Lauderhill turns to — because this is our home too.
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

export default Location1;
