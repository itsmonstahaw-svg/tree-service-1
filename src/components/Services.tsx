import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "Tree Removal",
      description: "Safe, efficient removal of hazardous, dead, or unwanted trees for residential and commercial properties across South Florida.",
      image: "/images/tree_removal.png",
      href: "/services/tree-removal"
    },
    {
      title: "Stump Grinding",
      description: "Professional stump grinding using commercial-grade equipment — leaving your yard clean, flat, and ready for whatever comes next.",
      image: "/images/stump_grinding.png",
      href: "/services/stump-grinding"
    },
    {
      title: "Tree Trimming",
      description: "Expert trimming to improve tree health, reduce wind resistance, and keep your South Florida property looking its best.",
      image: "/images/tree_trimming.png",
      href: "/services/tree-trimming"
    },
    {
      title: "Tree Pruning",
      description: "Structural pruning to strengthen trees, reduce hurricane risk, and extend the lifespan of your most valuable landscape assets.",
      image: "/images/tree_pruning.png",
      href: "/services/tree-pruning"
    },
    {
      title: "Shrub Trimming & Removal",
      description: "Professional shrub shaping and full removal for HOA-compliant, well-maintained South Florida properties.",
      image: "/images/shrub_trimming.png",
      href: "/services/shrub-trimming-removal"
    },
    {
      title: "Tree Planting",
      description: "Expert tree planting with proper siting and species selection for South Florida's climate and your property's long-term needs.",
      image: "/images/tree_planting.png",
      href: "/services/tree-planting"
    },
    {
      title: "Tree Cabling & Bracing",
      description: "Structural support for split or leaning trees — saving valuable trees and reducing storm damage risk before hurricane season.",
      image: "/images/tree_cabling.png",
      href: "/services/tree-cabling-bracing"
    },
    {
      title: "Storm Cleanup",
      description: "Fast mobilisation after tropical storms and hurricanes — fallen trees, scattered debris, and emergency limb removal handled promptly.",
      image: "/images/storm_cleanup.png",
      href: "/services/storm-cleanup"
    }
  ];

  return (
    <section id="services" className="py-12 bg-background border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
          <div className="flex-shrink-0">
            <p className="text-sm font-bold tracking-widest text-white/70 uppercase mb-2">
              WHAT WE ARE BEST AT
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              OUR SERVICES
            </h2>
          </div>
          <div className="flex-grow h-[2px] bg-primary mb-2 md:mb-4 hidden md:block"></div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-black border-[2px] border-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group relative block overflow-hidden aspect-square bg-black"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              />

              {/* Overlay Description */}
              <div className="absolute inset-0 flex flex-col justify-center p-6 z-10 pointer-events-none">
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <p className="text-white text-base font-medium leading-relaxed text-center drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Title Badge */}
              <div className="absolute bottom-4 left-4 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="bg-black text-white px-3 py-2 text-sm font-black uppercase tracking-wide flex items-center gap-2 shadow-xl rounded-sm">
                  {service.title}
                  <div className="bg-primary text-primary-foreground rounded-full p-0.5 ml-1">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
