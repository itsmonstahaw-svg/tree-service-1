import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://[client-domain]'

const routesMeta = {
  '/': {
    title: "Paula's A1 Tree Removal & Stump Grind | Lauderhill, FL",
    description: "Female-owned tree removal, stump grinding, trimming & storm cleanup in Lauderhill, FL. Licensed, insured, free estimates. Call (954) 623-0558.",
  },
  '/home': {
    title: "Paula's A1 Tree Removal & Stump Grind | Lauderhill, FL",
    description: "Female-owned tree removal, stump grinding, trimming & storm cleanup in Lauderhill, FL. Licensed, insured, free estimates. Call (954) 623-0558.",
  },

  // Services
  '/services/tree-removal': {
    title: "Tree Removal in Lauderhill, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Professional tree removal for residential & commercial properties across South Florida. Licensed, insured, free estimates. Call (954) 623-0558.",
  },
  '/services/stump-grinding': {
    title: "Stump Grinding in Lauderhill, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Complete stump grinding service using professional-grade equipment. Leaves your yard clean and stump-free. Free estimates. Call (954) 623-0558.",
  },
  '/services/tree-trimming': {
    title: "Tree Trimming in Lauderhill, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Expert tree trimming to improve health, safety & curb appeal across South Florida. Licensed & insured. Free estimates. Call (954) 623-0558.",
  },
  '/services/tree-pruning': {
    title: "Tree Pruning in Lauderhill, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Structural tree pruning to improve resilience, reduce hurricane risk & extend tree lifespan in South Florida. Free estimates. Call (954) 623-0558.",
  },
  '/services/shrub-trimming-removal': {
    title: "Shrub Trimming & Removal in Lauderhill, FL | Paula's A1 Tree Removal",
    description: "Professional shrub trimming and full removal for HOA-compliant, well-maintained South Florida properties. Free estimates. Call (954) 623-0558.",
  },
  '/services/tree-planting': {
    title: "Tree Planting in Lauderhill, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Expert tree planting with proper siting and species selection for South Florida's climate. Residential & commercial. Call (954) 623-0558.",
  },
  '/services/tree-cabling-bracing': {
    title: "Tree Cabling & Bracing in Lauderhill, FL | Paula's A1 Tree Removal",
    description: "Structural tree cabling and bracing to save valuable trees and reduce hurricane damage risk in South Florida. Free estimates. Call (954) 623-0558.",
  },
  '/services/storm-cleanup': {
    title: "Storm Cleanup in Lauderhill, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Fast storm cleanup for fallen trees, branches & debris across South Florida. Licensed, insured, free estimates. Call (954) 623-0558.",
  },

  // Locations
  '/locations/lauderhill': {
    title: "Tree Removal in Lauderhill, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Local tree removal, stump grinding & trimming in Lauderhill, FL. Female-owned, licensed & insured. Serving Inverrary, Pine Island & more. Call (954) 623-0558.",
  },
  '/locations/fort-lauderdale': {
    title: "Tree Removal in Fort Lauderdale, FL | Paula's A1 Tree Removal",
    description: "Professional tree removal & stump grinding in Fort Lauderdale. Serving Downtown, Victoria Park, Coral Ridge & surrounding areas. Call (954) 623-0558.",
  },
  '/locations/hollywood': {
    title: "Tree Removal in Hollywood, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Tree removal, trimming & storm cleanup in Hollywood, FL. Serving Emerald Hills, West Lake, Dania Beach & beyond. Free estimates. Call (954) 623-0558.",
  },
  '/locations/miramar': {
    title: "Tree Removal in Miramar, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Licensed tree removal & stump grinding in Miramar, FL. Serving Monarch Lakes, Sunset Lakes, Riviera Isles & more. Call (954) 623-0558.",
  },
  '/locations/pembroke-pines': {
    title: "Tree Removal in Pembroke Pines, FL | Paula's A1 Tree Removal",
    description: "Professional tree removal, stump grinding & trimming in Pembroke Pines. Serving Chapel Trail, Silver Lakes, Century Village & more. Call (954) 623-0558.",
  },
  '/locations/plantation': {
    title: "Tree Removal in Plantation, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Expert tree removal & storm cleanup in Plantation, FL. Serving Plantation Acres, Jacaranda, Central Park & surrounding areas. Call (954) 623-0558.",
  },
  '/locations/sunrise': {
    title: "Tree Removal in Sunrise, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Tree removal, stump grinding & trimming in Sunrise, FL. Serving Sawgrass, Welleby, Springtree & beyond. Free estimates. Call (954) 623-0558.",
  },
  '/locations/davie': {
    title: "Tree Removal in Davie, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Professional tree service in Davie, FL. Serving Orange Drive, Nova, Pine Island Ridge & rural properties. Licensed & insured. Call (954) 623-0558.",
  },
  '/locations/tamarac': {
    title: "Tree Removal in Tamarac, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Tree removal, stump grinding & storm cleanup in Tamarac, FL. Serving Woodlands, Kings Point, Mainlands & more. Call (954) 623-0558.",
  },
  '/locations/deerfield-beach': {
    title: "Tree Removal in Deerfield Beach, FL | Paula's A1 Tree Removal",
    description: "Coastal tree removal & stump grinding in Deerfield Beach, FL. Serving Quiet Waters, Hillsboro, Century Village & more. Call (954) 623-0558.",
  },
  '/locations/miami': {
    title: "Tree Removal in Miami, FL | Paula's A1 Tree Removal & Stump Grind",
    description: "Professional tree removal & stump grinding in Miami, FL. Serving Brickell, Wynwood, Coral Gables, Coconut Grove & Little Havana. Call (954) 623-0558.",
  },
  '/locations/broward-county': {
    title: "Tree Removal in Broward County, FL | Paula's A1 Tree Removal",
    description: "Full-service tree removal, stump grinding & storm cleanup across Broward County. Serving Fort Lauderdale, Hollywood, Pembroke Pines & more. Call (954) 623-0558.",
  },

  // Blog
  '/blog': {
    title: "Tree Service Blog | Paula's A1 Tree Removal & Stump Grind",
    description: "Tree care tips, South Florida storm prep advice, and expert guidance from Paula's A1 Tree Removal & Stump Grind in Lauderhill, FL.",
  },
  '/blog/why-lauderhill-homeowners-should-never-diy-tree-removal': {
    title: "Why Lauderhill Homeowners Should Never DIY Tree Removal | Paula's A1",
    description: "The hidden dangers of DIY tree removal — falling limbs, power lines, no insurance coverage. Why licensed professionals protect your property and safety.",
  },
  '/blog/signs-your-tree-is-dangerous-needs-immediate-removal': {
    title: "Signs Your Tree Is Dangerous & Needs Removal in South Florida | Paula's A1",
    description: "7 warning signs a tree is a hazard to your South Florida property. Learn what to look for and when to call a professional tree removal company.",
  },
  '/blog/stump-grinding-vs-stump-removal-difference': {
    title: "Stump Grinding vs Stump Removal: Which Do You Need? | Paula's A1",
    description: "The difference between stump grinding and full stump removal explained. Costs, benefits, and which option is right for South Florida homeowners.",
  },
  '/blog/south-florida-hurricane-season-affects-trees': {
    title: "How Hurricane Season Affects Your Trees in South Florida | Paula's A1",
    description: "How hurricanes and tropical storms damage South Florida trees — and what to do before, during, and after storm season to protect your property.",
  },
  '/blog/how-to-choose-tree-service-company-fort-lauderdale': {
    title: "How to Choose a Tree Service Company in Fort Lauderdale | Paula's A1",
    description: "What to look for when hiring a tree service in Fort Lauderdale — licensing, insurance, equipment, reviews, and red flags to avoid.",
  },
  '/blog/true-cost-ignoring-damaged-tree-property': {
    title: "The True Cost of Ignoring a Damaged Tree on Your Property | Paula's A1",
    description: "Financial and legal risks of ignoring a damaged tree — emergency removal costs, neighbour liability, insurance denial, and rising removal expenses.",
  },

  // Fixed pages
  '/gallery': {
    title: "Our Work | Paula's A1 Tree Removal & Stump Grind",
    description: "See photos from Paula's A1 Tree Removal & Stump Grind — tree removals, stump grinding, trimming, and storm cleanup across South Florida.",
  },
  '/contact': {
    title: "Contact Us | Paula's A1 Tree Removal & Stump Grind",
    description: "Contact Paula's A1 Tree Removal & Stump Grind in Lauderhill, FL. Call (954) 623-0558 or request a free quote online.",
  },
  '/review': {
    title: "Leave a Review | Paula's A1 Tree Removal & Stump Grind",
    description: "Enjoyed our service? Leave a review for Paula's A1 Tree Removal & Stump Grind and help other South Florida homeowners find great tree care.",
  },
  '/discount': {
    title: "10% Discount for Return Customers | Paula's A1 Tree Removal",
    description: "Return customers and referrals get 10% off at Paula's A1 Tree Removal & Stump Grind. Claim your discount today.",
  },
  '/client-review': {
    title: "Client Follow-Up | Paula's A1 Tree Removal & Stump Grind",
    description: "Client follow-up form for Paula's A1 Tree Removal & Stump Grind.",
  },
  '/thank-you': {
    title: "Thank You | Paula's A1 Tree Removal & Stump Grind",
    description: "Thank you for contacting Paula's A1 Tree Removal & Stump Grind. We'll be in touch shortly.",
  },
  '/privacy-policy': {
    title: "Privacy Policy | Paula's A1 Tree Removal & Stump Grind",
    description: "Privacy policy for Paula's A1 Tree Removal & Stump Grind. Learn how we collect and protect your personal information.",
  },
  '/terms': {
    title: "Terms & Conditions | Paula's A1 Tree Removal & Stump Grind",
    description: "Terms and conditions for Paula's A1 Tree Removal & Stump Grind — governing law: Florida.",
  },
}

const DEFAULT_META = {
  title: "Paula's A1 Tree Removal & Stump Grind | Lauderhill, FL",
  description: "Female-owned tree removal, stump grinding, trimming & storm cleanup in South Florida. Licensed, insured, free estimates. Call (954) 623-0558.",
}

const routes = Object.keys(routesMeta)

async function prerender() {
  const templatePath = path.resolve(__dirname, 'dist/index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  const { render } = await import('./dist/server/entry-server.js')

  for (const route of routes) {
    const meta = routesMeta[route] || DEFAULT_META
    const canonical = `${BASE_URL}${route === '/' ? '' : route}`

    const appHtml = render(route)
    let html = template
      .replace('<!--app-html-->', appHtml)
      .replace(/<!--page-title-->/g, meta.title)
      .replace(/<!--page-description-->/g, meta.description)
      .replace(/<!--page-canonical-->/g, canonical)

    const routePath = route === '/' ? '/index.html' : `${route}/index.html`
    const filePath = path.resolve(__dirname, `dist${routePath}`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)
    console.log(`✓ Pre-rendered: ${route}`)
  }

  console.log('\n✅ Static site generation complete!')
  console.log(`   ${routes.length} pages written to dist/`)
}

prerender().catch((err) => {
  console.error('SSG failed:', err)
  process.exit(1)
})
