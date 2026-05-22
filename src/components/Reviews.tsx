import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, X } from "lucide-react";

export const Reviews = ({ topWaveColor = "black" }: { topWaveColor?: "black" | "white" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 bg-card overflow-hidden border-b border-border/40">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/hero.png")' }}
      >
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[180px]">
          <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className={topWaveColor === "white" ? "fill-white" : "fill-black"}></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[180px]">
          <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-black"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="flex-grow w-full md:w-auto">
            <div className="inline-block bg-black px-4 py-1.5 mb-4 border border-white/10">
              <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US
              </span>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                Reviews
              </h2>
              <div className="flex-grow h-[2px] bg-primary mt-2"></div>
            </div>
          </div>
          <div className="flex-shrink-0 mb-1">
            <a href="/contact">
              <Button variant="outline" className="font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-200 border-0 h-12 px-6 py-2 text-sm flex items-center gap-2 shadow-xl">
                Contact Us Now
                <ArrowRight className="w-4 h-4 text-primary" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Review Card 1 */}
          <div className="bg-white text-black border border-border p-5 rounded-lg shadow-md relative flex flex-col">
            <div className="flex items-center text-yellow-500 mb-3 gap-1.5">
              <span className="font-bold text-lg leading-none">5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-snug">
              "Paula's crew took down a massive oak that had been leaning toward our roof for years. They were on time, professional, and left the yard cleaner than when they arrived. Could not be happier — highly recommend!"
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Marcus T.</span>
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white text-black border border-border p-5 rounded-lg shadow-md relative flex flex-col">
            <div className="flex items-center text-yellow-500 mb-3 gap-1.5">
              <span className="font-bold text-lg leading-none">5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-snug">
              "Had two stumps in the backyard that had been sitting there forever. Paula's team ground them both down in under an hour. Super fair price, no upselling, and the wood chips were raked clean. Will use again."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Denise R.</span>
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white text-black border border-border p-5 rounded-lg shadow-md relative flex flex-col">
            <div className="flex items-center text-yellow-500 mb-3 gap-1.5">
              <span className="font-bold text-lg leading-none">5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-snug">
              "Called Paula's the morning after the storm and they were out the same day. A huge ficus had come down across our driveway. The crew worked fast, cleared everything, and the price was completely reasonable. Lifesavers."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Kevin A.</span>
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="mt-8 w-full flex justify-center">
          <div className="bg-black text-white border border-white p-6 rounded-lg text-center w-full max-w-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-3">Review us on Google</h3>
            <div className="flex justify-center text-yellow-500 mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <Button
              onClick={() => setIsOpen(true)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase h-12 px-4 py-2 text-base"
            >
              Leave us a review
            </Button>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-black border border-white/10 rounded-lg shadow-2xl w-full max-w-[600px] p-0 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 text-white opacity-80 hover:opacity-100 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/7q3FktALio7SiNqAA3md"
              style={{ border: "none", width: "100%", height: "600px" }}
              scrolling="no"
              id="review-survey-modal"
              title="Leave a Review"
            />
          </div>
        </div>
      )}
    </section>
  );
};
