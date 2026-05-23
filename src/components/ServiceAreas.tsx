import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white border-b border-border/40" id="areas">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter">
                WHERE TO FIND US
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Lauderhill, FL", href: "/locations/lauderhill" },
                { label: "Fort Lauderdale, FL", href: "/locations/fort-lauderdale" },
                { label: "Hollywood, FL", href: "/locations/hollywood" },
                { label: "Miramar, FL", href: "/locations/miramar" },
                { label: "Pembroke Pines, FL", href: "/locations/pembroke-pines" },
                { label: "Plantation, FL", href: "/locations/plantation" },
                { label: "Sunrise, FL", href: "/locations/sunrise" },
                { label: "Davie, FL", href: "/locations/davie" },
                { label: "Tamarac, FL", href: "/locations/tamarac" },
                { label: "Deerfield Beach, FL", href: "/locations/deerfield-beach" },
                { label: "Miami, FL", href: "/locations/miami" },
                { label: "Broward County, FL", href: "/locations/broward-county" },
              ].map((area, index) => (
                <a key={index} href={area.href} className="flex items-center gap-3 bg-black p-4 rounded-lg border border-white/10 shadow-sm text-white hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-sm sm:text-base leading-tight">{area.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
