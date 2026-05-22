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

const Service6 = () => {
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
            style={{ backgroundImage: 'url("/images/tree_planting.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              TREE PLANTING
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Expert tree selection, siting, and planting for lasting shade, beauty, and property value.
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
                <h3 className="text-2xl font-bold text-black mb-3">Tree Planting Services in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  Planting a tree is one of the most lasting investments you can make in your Lauderhill property, but getting it right requires far more thought than digging a hole and dropping in a sapling. South Florida's subtropical climate is both a blessing and a challenge: the warmth and rainfall support rapid, lush growth, but the region's sandy, nutrient-poor soils, high water table, and intense hurricane-season winds create conditions that punish the wrong tree in the wrong location. Selecting a species suited to the local climate is the first and most critical decision. Florida-native trees like the Live Oak, Southern Magnolia, Dahoon Holly, and Gumbo Limbo are naturally adapted to withstand South Florida's heat, humidity, and seasonal storms. They require less supplemental irrigation once established, support native wildlife, and tend to outperform non-native ornamentals over the long term. Beyond species selection, siting matters enormously — a tree planted too close to the house, driveway, or sewer lines will cause structural damage as roots expand, while one planted too close to overhead utility lines will require constant pruning or eventual removal. Proper spacing, orientation, and soil preparation at the time of planting set the foundation for decades of healthy growth. Paula's A1 Tree Removal & Stump Grind brings the knowledge and experience to guide you through every one of these decisions so your new tree gets off to the strongest possible start.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind for Tree Planting?</h3>
                <p className="leading-relaxed">
                  Most people think of tree services in terms of removal, but Paula's A1 Tree Removal & Stump Grind takes equal pride in the work of planting — in adding to the urban canopy rather than simply reducing it. As a female-owned and operated business rooted in the Lauderhill community, we care about the long-term character of the neighborhoods we serve. When you call us for a tree planting consultation, there is never a charge for the estimate or the site visit. We arrive with a thorough understanding of the species that perform best in Broward County soils and microclimates, and we take the time to understand your goals — whether you are after afternoon shade over a patio, a privacy screen along the property line, a fruit tree for the backyard, or a specimen tree to anchor a front yard landscape. We are fully licensed and insured, and we use modern planting tools and equipment to prepare the site correctly rather than cutting corners on hole depth, backfill amendment, or initial staking. Our commitment to fair pricing means we present a clear cost before any work begins and stick to it. We serve both residential and commercial clients, and every planting job ends with thorough cleanup of any displaced soil, packaging, or organic material. We also leave you with honest guidance on watering schedules and mulching to maximize survival and early growth during the establishment period, because a tree we plant should still be standing and thriving decades from now.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Tree Planting Process</h3>
                <p className="leading-relaxed">
                  Everything starts with a phone call to (954) 623-0558. We schedule a free on-site consultation where we walk your property with you, evaluate soil conditions, available light, proximity to structures and utilities, drainage patterns, and the scale of the space relative to the mature size of candidate species. We discuss your aesthetic preferences, budget, and any HOA species restrictions that may apply in your community. Based on all of that, we recommend the right trees for your specific situation and present a written estimate for the planting work at no cost to you. Once you approve the plan, we source healthy, appropriately sized nursery stock and schedule the installation. On planting day, our crew prepares each hole to the correct depth and width — typically two to three times the diameter of the root ball — and amends the backfill where the soil composition warrants it to encourage root expansion. We position each tree at the ideal grade to prevent crown rot and ensure proper drainage, then backfill, tamp, and create a shallow watering basin around the root zone. Initial staking is applied where needed to stabilize the tree during the critical first growing season without restricting natural trunk movement. We finish each site with a clean layer of mulch pulled back from the trunk flare to retain moisture and suppress competing weeds. Before leaving we review post-planting care with you in plain language, and we are always just a phone call away if questions come up later.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/img2.png" alt="Tree planting service image 1" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img5.png" alt="Tree planting service image 2" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img8.png" alt="Tree planting service image 3" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service6;
