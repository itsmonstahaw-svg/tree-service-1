import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Gallery = () => {
  const images = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
  ];

  return (
    <section id="gallery" className="py-12 bg-background border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-0">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 px-[12px]">
          <div className="flex-shrink-0">
            <p className="text-sm font-bold tracking-widest text-white/70 uppercase mb-2">
              SEE WHY OUR CUSTOMERS LOVE US
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              SEE OUR WORK
            </h2>
          </div>
          <div className="flex-grow h-[2px] bg-primary mb-2 md:mb-4 hidden md:block"></div>
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              className="font-bold uppercase tracking-wider border-2 border-white text-white hover:bg-white hover:text-black transition-all px-6 py-6 rounded-none group"
              onClick={() => window.location.href = '/gallery'}
            >
              SEE ALL PHOTOS <span className="ml-2 text-primary group-hover:text-black transition-colors text-xl">→</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-square relative overflow-hidden group"
            >
              <img
                src={img}
                alt={`Paula's A1 Tree Removal work photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
