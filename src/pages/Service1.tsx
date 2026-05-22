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

const Service1 = () => {
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
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              TREE REMOVAL
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Professional, safe tree removal for residential and commercial properties across South Florida.
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
                <h3 className="text-2xl font-bold text-black mb-3">Tree Removal Services in Lauderhill, FL</h3>
                <p className="leading-relaxed">
                  South Florida's tropical climate is both a blessing and a challenge for property owners. The lush, fast-growing trees that provide shade and beauty can quickly become serious hazards when they grow too large, suffer storm damage, or begin to decline. In Lauderhill and throughout Broward County, homeowners and business operators deal with trees that threaten rooflines, driveways, power lines, and neighboring structures on a regular basis. Hurricane season intensifies these risks — a weakened or poorly positioned tree can become a projectile during a major storm, causing catastrophic damage to buildings and vehicles. Whether a tree has been struck by lightning, uprooted by high winds, or simply grown into an unsafe position over the years, professional removal is the only responsible solution. Paula's A1 Tree Removal & Stump Grind serves the entire Lauderhill area with fast, thorough tree removal services designed to eliminate danger and restore safety to your property before the next storm season arrives.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Paula's A1 Tree Removal & Stump Grind?</h3>
                <p className="leading-relaxed">
                  As a female-owned and operated business serving South Florida, Paula's A1 Tree Removal & Stump Grind brings a customer-first philosophy to every job we take on. We offer free estimates with no pressure tactics and no hidden fees — what we quote is what you pay. Our team is fully licensed and insured, which means you're protected from liability the moment we arrive on your property. We use modern equipment specifically suited for South Florida conditions, allowing us to safely remove trees in tight residential lots, commercial parking areas, and any configuration in between. We proudly serve both residential and commercial clients with the same level of attention and care, and our satisfaction guarantee means we don't consider a job done until you're completely happy with the results. When the work is finished, we leave your property clean — no debris, no wood chips scattered across your lawn, no mess left behind for you to deal with.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Tree Removal Process</h3>
                <p className="leading-relaxed">
                  Every tree removal starts with a free on-site assessment where we evaluate the tree's size, lean, root structure, and proximity to structures and utility lines. We develop a removal plan tailored to the specific conditions of your property, taking into account surrounding landscaping, fencing, and any access limitations. On the scheduled day, our crew arrives with the appropriate equipment — from rigging systems and climbing gear to chippers and hauling vehicles — and sections the tree down systematically from the top, controlling each piece as it comes down to prevent property damage. Larger trunks and limbs are cut into manageable sections and removed from the site entirely. Once the tree is down, we thoroughly clean the work area, removing all debris, wood, and organic material. We can also coordinate stump grinding as part of the same visit if you'd like the area completely cleared. Payment is collected only after you've inspected the work and confirmed your satisfaction.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="/images/img1.png" alt="Tree removal crew at work" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img2.png" alt="Large tree being sectioned down" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
              <img src="/images/img3.png" alt="Cleared property after tree removal" className="w-full h-64 object-cover rounded-lg shadow-md border border-border" />
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

export default Service1;
