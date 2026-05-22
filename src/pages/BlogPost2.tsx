import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center text-center pt-32 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/hero.png")' }}
          >
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight text-primary [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              SIGNS YOUR TREE IS DANGEROUS AND NEEDS IMMEDIATE REMOVAL IN SOUTH FLORIDA
            </h1>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[120px]">
              <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-white" />
            </svg>
          </div>
        </section>

        {/* Body Content */}
        <section className="py-16 bg-white text-black">
          <div className="px-4 max-w-[800px] mx-auto w-full">
            <div className="prose prose-lg max-w-none text-zinc-800 space-y-6 leading-relaxed">
              <p>South Florida's trees face some of the most demanding conditions of any region in the United States — relentless summer heat, tropical storms, high humidity, sandy soils, and periodic drought cycles that stress root systems and weaken wood over time. A tree that looks perfectly healthy from across the street can be hiding significant structural decay or root failure that makes it a genuine hazard to your home, your family, and your neighbors. In Broward County, where properties are tightly spaced and mature trees routinely grow alongside rooflines, driveways, and utility lines, a single failure can cause thousands of dollars in damage or, in the worst cases, serious injury. Knowing how to recognise the warning signs of a dangerous tree before it fails is one of the most important things a South Florida homeowner can do to protect their property. The sooner a hazard tree is identified and removed, the lower the risk and often the lower the cost.</p>
              <p>One of the most visible and reliable indicators that a tree may need immediate removal is the presence of large cracks or splits in the main trunk or primary branches. These splits — sometimes called included bark or co-dominant stems — develop when two major limbs or leaders grow so closely together that the bark becomes embedded between them, creating a weak union that is prone to splitting under wind load or the weight of the canopy itself. In South Florida, where tropical storms and gusty summer thunderstorms are a near-daily occurrence from June through November, a tree with major structural cracks is essentially a delayed liability. If you see vertical cracks that run the length of a major limb or horizontal splits across the trunk, do not wait for a storm to force the issue — contact a licensed tree removal professional immediately and have the tree assessed before the next system rolls through. A professional can determine whether cabling and bracing can extend the tree's life or whether removal is the only safe path forward.</p>
              <p>Dead or dying limbs — sometimes called widow makers — are another serious warning sign that many homeowners underestimate. A dead limb can detach without warning, particularly during high winds, and a large limb falling from 20 or 30 feet carries enough force to punch through a car roof, collapse a fence, or injure anyone standing below. In South Florida, the stress of hurricane season, root competition from invasive species, and fungal diseases like root rot often cause partial die-back in otherwise living trees, leaving a mix of healthy and dead branches in the canopy. If more than a quarter of a tree's canopy consists of dead or visibly dying branches, the tree is under severe stress and should be evaluated for removal. Limbs that hang loosely, appear bleached or peeling, or drop leaves while the rest of the tree remains green are all signs that warrant immediate professional attention.</p>
              <p>Root problems are among the most dangerous tree hazards because they are largely invisible until the tree actually falls. Shallow soils, saturated ground after heavy rainfall, and root damage from construction or underground utilities can all compromise a tree's ability to stay anchored in the ground. Warning signs of root failure include visible roots that appear to be lifting out of the soil, sections of ground around the base of the tree that feel soft or spongy, mushroom growth at or near the base of the trunk indicating internal fungal decay, and a tree that is visibly leaning more than it did a year or two ago. A tree with compromised roots can fail completely in a strong gust, and unlike a limb failure that gives some warning, a full root failure can happen in seconds with virtually no advance notice. Any tree showing these signs near your home or over structures should be evaluated by a professional without delay.</p>
              <p>Cavity formation — where the interior wood of a tree has rotted away leaving a hollow or partially hollow trunk — is a structural failure waiting to happen. It is common in older South Florida trees that have been weakened by storms, insect damage, or disease over many years. A tree can survive and appear outwardly healthy while significant portions of its interior have been compromised, but once the outer shell of healthy wood becomes thin enough, the tree loses the structural integrity to withstand normal wind loads. Signs of cavities include visible openings in the trunk where bark has separated or fallen away, dark staining or fungal growth on the bark surface, and areas of the trunk that sound hollow when tapped. Professional arborists use tools such as mallets and resistograph drilling to assess the extent of internal decay and determine whether a tree can be saved through cabling and bracing or must be removed entirely.</p>
              <p>Another warning sign that often goes unnoticed is pest or disease infestation. South Florida has a number of tree-killing pests and pathogens, including laurel wilt disease which is devastating to avocado and camphor trees, and various bark beetle species that colonise stressed trees and bore through the cambium layer, cutting off nutrient flow. Signs of infestation include excessive sap flow or pitch tubes on the bark, fine sawdust-like frass at the base of the tree, unusual leaf discolouration or rapid defoliation, and small round exit holes in the bark where adult beetles have emerged. Trees that are heavily infested with wood-boring insects often have severely compromised structural integrity even if they appear to be alive from a distance, and in many cases removal is the only practical option once the infestation has progressed. Acting quickly when you spot these signs can prevent the spread of disease to nearby healthy trees as well.</p>
              <p>Paula's A1 Tree Removal &amp; Stump Grind serves homeowners and businesses throughout Broward County who need professional assessment of potentially hazardous trees and fast, safe removal when it is warranted. The team is experienced in evaluating South Florida's diverse tree species — from live oaks and sabal palms to ficus and laurel — and can identify structural, root, and pest-related hazards that are invisible to the untrained eye. If you have a tree on your property that is showing any of the warning signs described in this article, do not wait until a storm makes the decision for you. Early removal is almost always faster, safer, and less expensive than emergency cleanup after a tree has already come down on a structure. A free estimate from Paula's A1 is the first step toward protecting your home and your family from a hazard that should never be ignored.</p>
              <p className="font-bold text-xl pt-8">
                Think you might have a hazardous tree on your property? Call Paula's A1 Tree Removal & Stump Grind today at (954) 623-0558 or request a free assessment — don't wait for the next storm to find out!
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
    </div>
  );
};

export default BlogPost2;
