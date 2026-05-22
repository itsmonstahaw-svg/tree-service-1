import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

export const FAQAndServiceAreas = () => {
  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer: "Yes — every job starts with a free estimate. We'll assess the tree, explain what needs to be done, and give you a clear, upfront price with no hidden fees. There is no obligation to book after receiving your estimate."
    },
    {
      question: "Do you service commercial properties?",
      answer: "Absolutely. Paula's A1 Tree Removal & Stump Grind handles both residential and commercial properties throughout Broward County, including HOA communities, apartment complexes, retail centers, and commercial landscaping. We carry full liability insurance and workers' compensation coverage for all commercial work."
    },
    {
      question: "What areas in South Florida do you cover?",
      answer: "We serve Lauderhill, Fort Lauderdale, Hollywood, Miramar, Pembroke Pines, Plantation, Sunrise, Davie, Tamarac, and Deerfield Beach, as well as surrounding communities throughout Broward County. Call us at (954) 623-0558 to confirm service availability for your address."
    }
  ];

  return (
    <section id="faq-areas" className="py-20 bg-black text-white border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px] space-y-24">

        {/* Top Section: FAQ + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* FAQ Left */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-primary/40 border-b-2">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:text-primary hover:no-underline transition-colors py-6 flex-row-reverse justify-end gap-4 [&[data-state=open]>svg]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Image Right */}
          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[450px]">
            <img
              src="/images/img13.png"
              alt="Paula's A1 Tree Removal Services"
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
        </div>

        {/* Bottom Section: Service Areas */}
        <div className="pt-10 mt-10 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="bg-black border border-white/10 rounded-lg shadow-2xl aspect-square md:aspect-[4/3] relative overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=6260%20S%20Falls%20Cir%20Dr%2C%20Lauderhill%2C%20FL%2033319&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Service Areas List */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white">
                  WHERE TO FIND US
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Lauderhill, FL",
                  "Fort Lauderdale, FL",
                  "Hollywood, FL",
                  "Miramar, FL",
                  "Pembroke Pines, FL",
                  "Plantation, FL",
                  "Sunrise, FL",
                  "Davie, FL",
                  "Tamarac, FL",
                  "Deerfield Beach, FL"
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-3 bg-black p-4 rounded-lg border border-white/10 shadow-sm text-white">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-base">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
