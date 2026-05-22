import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import { X } from "lucide-react";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const gridImages = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img9.png",
    "/images/img10.png",
    "/images/img11.jpg",
    "/images/img12.jpg",
    "/images/img13.jpg",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/hero.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10 text-center text-white flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] mb-4 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              OUR WORK
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium mb-8 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              See for yourself why our customers love us
            </p>
            <Button
              size="lg"
              className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wider rounded-sm shadow-2xl"
              onClick={() => setIsOpen(true)}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[80px] md:h-[120px]"
            >
              <path
                d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z"
                className="fill-background"
              />
            </svg>
          </div>
        </section>

        {/* Photo Grid Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="w-full max-w-[1200px] mx-auto px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {gridImages.map((src, index) => (
                <div key={index} className="aspect-square overflow-hidden relative group">
                  <img
                    src={src}
                    alt={`Paula's A1 Tree Removal work photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reviews />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />

      {/* Quote Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white opacity-80 hover:opacity-100 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
              Get A Free Quote
            </h2>
            <p className="text-center text-gray-400 mb-6">
              Fill out the form below and we'll get back to you shortly.
            </p>
            <QuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
