import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";

const blogPosts = [
  {
    title: "WHY LAUDERHILL HOMEOWNERS SHOULD NEVER DIY TREE REMOVAL",
    description:
      "The hidden dangers of removing trees yourself — falling limbs, power lines, no insurance, and unpredictable tree behavior. Why licensed professionals protect your property and your safety.",
    href: "/blog/why-lauderhill-homeowners-should-never-diy-tree-removal",
  },
  {
    title: "SIGNS YOUR TREE IS DANGEROUS AND NEEDS IMMEDIATE REMOVAL IN SOUTH FLORIDA",
    description:
      "From leaning trunks to fungal growth and split branches — learn the warning signs that your tree is a hazard, and why South Florida's hurricane season makes early action critical.",
    href: "/blog/signs-your-tree-is-dangerous-needs-immediate-removal",
  },
  {
    title: "STUMP GRINDING VS STUMP REMOVAL: WHAT'S THE DIFFERENCE AND WHICH DO YOU NEED?",
    description:
      "Not sure whether to grind or fully extract that leftover stump? We break down the difference, the costs, and which option makes the most sense for South Florida homeowners.",
    href: "/blog/stump-grinding-vs-stump-removal-difference",
  },
  {
    title: "HOW SOUTH FLORIDA'S HURRICANE SEASON AFFECTS YOUR TREES — AND WHAT TO DO ABOUT IT",
    description:
      "Hurricane season runs June through November and puts every tree on your property at risk. Learn how to prepare, what to do after a storm, and how Paula's A1 helps year-round.",
    href: "/blog/south-florida-hurricane-season-affects-trees",
  },
  {
    title: "HOW TO CHOOSE A TREE SERVICE COMPANY IN FORT LAUDERDALE",
    description:
      "Licensing, insurance, equipment, and reviews — here's what to look for when hiring a tree service in Fort Lauderdale, and the red flags that should make you walk away.",
    href: "/blog/how-to-choose-tree-service-company-fort-lauderdale",
  },
  {
    title: "THE TRUE COST OF IGNORING A DAMAGED TREE ON YOUR PROPERTY",
    description:
      "A damaged tree doesn't get better on its own. Understand the financial and legal risks of waiting too long — from emergency removal costs to liability for neighbour property damage.",
    href: "/blog/true-cost-ignoring-damaged-tree-property",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
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
              className="fill-white"
            />
          </svg>
        </div>

        <div className="relative z-20 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
            CHECK OUT OUR BLOG
          </h1>
          {/* Three downward arrows */}
          <div className="flex items-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <svg
                key={i}
                width="52"
                height="68"
                viewBox="0 0 52 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <path
                  d="M26 4 L26 56 M10 40 L26 58 L42 40"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="w-full max-w-[1200px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white text-black rounded-lg border border-gray-200 shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-base font-black uppercase leading-snug mb-4 flex-grow">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {post.description}
                </p>
                <a
                  href={post.href}
                  className="text-sm font-black uppercase tracking-wider text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  READ FULL POST →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main>
        <Reviews topWaveColor="white" />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Blog;
