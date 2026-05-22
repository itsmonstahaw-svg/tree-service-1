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

const Location3 = () => {
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
              TREE SERVICE IN HOLLYWOOD
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              HOLLYWOOD TREE REMOVAL & STUMP GRINDING
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Downtown Hollywood · Emerald Hills · West Lake · Liberia · Dania Beach
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
              <h2 className="text-2xl font-bold">Tree Service In Hollywood</h2>
              <p>
                Hollywood, Florida sits squarely between Fort Lauderdale and Miami, and its geography creates a distinctive set of tree care challenges that homeowners and property managers throughout the city contend with every year. The city's proximity to the Atlantic Ocean means that salt-laden air moves inland regularly, accelerating the deterioration of bark, weakening root anchorage in sandy coastal soils, and stressing species that are not adapted to marine exposure. In neighborhoods like Emerald Hills and West Lake, larger residential lots support a diverse mix of native and ornamental trees, many of which have reached considerable size after decades of South Florida's favorable growing conditions — and that size becomes a serious liability when the Atlantic hurricane season brings sustained winds and storm surge activity through Broward County. The inland areas around Liberia and Dania Beach carry their own challenges, with older tree stock growing close to aging infrastructure, and the constant cycle of wet season saturation followed by dry season stress that causes root systems to shift and expand in unpredictable directions. Whether a tree is leaning toward a roofline, dropping limbs onto a driveway, or showing signs of internal decay accelerated by salt air and moisture, the need for a qualified, responsive tree service crew in Hollywood is not a seasonal concern — it's a year-round reality.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Tree Care Needs In Hollywood</h2>
              <p>
                Paula's A1 Tree Removal & Stump Grind travels south to Hollywood from our Lauderhill base to deliver the same level of thorough, professional service that our home community has come to rely on. For homeowners dealing with trees that have been compromised by storm damage, salt air, or simple age, our tree removal service provides a safe, efficient solution that includes complete debris removal so the property is clean when we leave. Stump grinding is performed to a depth that eliminates the remnant root structure, allowing the space to be replanted, sodded, or landscaped without the stump rotting and attracting termites and other wood-boring insects over time. We offer tree trimming and pruning services that are especially valuable for Hollywood's waterfront and near-coastal properties, where overgrown canopies catch wind and put stress on structures and root systems during active weather. Shrub trimming and removal help maintain the tidy appearance that Hollywood's residential neighborhoods expect, and our tree planting service gives clients the opportunity to replace removed trees with species better suited to coastal conditions. When a named storm or severe thunderstorm moves through and leaves Hollywood neighborhoods buried in fallen branches, our storm cleanup team mobilizes quickly to restore access and safety. We work with both residential homeowners and commercial property owners throughout the city, scaling our approach to fit the scope of the job.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Paula's A1 In Hollywood</h2>
              <p>
                Hollywood residents have options when it comes to tree service, but very few of those options combine the proximity, professional credentials, and personal accountability that Paula's A1 brings to every job in the city. Because we are based in Lauderhill, we reach Hollywood quickly — which matters enormously in the aftermath of a storm when every hour of delay means more water intrusion risk and more liability exposure from unsecured fallen limbs. Paula's A1 is female-owned and operated, fully licensed and insured, and every estimate we provide is completely free with no obligation attached. We use modern, well-maintained equipment that lets us handle large-scale removals efficiently while minimizing disruption to the surrounding landscape and neighboring properties. Pricing is always fair and transparent — there are no hidden charges added after the estimate, and no pressure to approve services that are not actually necessary. From the heavily treed residential streets of Emerald Hills to the commercial corridors near downtown Hollywood, Paula's A1 delivers workmanship that is backed by a genuine satisfaction guarantee, because we believe that doing the job right is the only way to do it at all.
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

export default Location3;
