import { Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import Blog from '@/pages/Blog'
import BlogPost1 from '@/pages/BlogPost1'
import BlogPost2 from '@/pages/BlogPost2'
import BlogPost3 from '@/pages/BlogPost3'
import BlogPost4 from '@/pages/BlogPost4'
import BlogPost5 from '@/pages/BlogPost5'
import BlogPost6 from '@/pages/BlogPost6'
import ClientSubmit from '@/pages/ClientSubmit'
import Contact from '@/pages/Contact'
import Discount from '@/pages/Discount'
import Gallery from '@/pages/Gallery'
import Location1 from '@/pages/Location1'
import Location2 from '@/pages/Location2'
import Location3 from '@/pages/Location3'
import Location4 from '@/pages/Location4'
import Location5 from '@/pages/Location5'
import Location6 from '@/pages/Location6'
import Location7 from '@/pages/Location7'
import Location8 from '@/pages/Location8'
import Location9 from '@/pages/Location9'
import Location10 from '@/pages/Location10'
import Review from '@/pages/Review'
import Service1 from '@/pages/Service1'
import Service2 from '@/pages/Service2'
import Service3 from '@/pages/Service3'
import Service4 from '@/pages/Service4'
import Service5 from '@/pages/Service5'
import Service6 from '@/pages/Service6'
import Service7 from '@/pages/Service7'
import Service8 from '@/pages/Service8'
import ThankYou from '@/pages/ThankYou'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Terms from '@/pages/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Index />} />

      {/* Services */}
      <Route path="/services/tree-removal" element={<Service1 />} />
      <Route path="/services/stump-grinding" element={<Service2 />} />
      <Route path="/services/tree-trimming" element={<Service3 />} />
      <Route path="/services/tree-pruning" element={<Service4 />} />
      <Route path="/services/shrub-trimming-removal" element={<Service5 />} />
      <Route path="/services/tree-planting" element={<Service6 />} />
      <Route path="/services/tree-cabling-bracing" element={<Service7 />} />
      <Route path="/services/storm-cleanup" element={<Service8 />} />

      {/* Locations */}
      <Route path="/locations/lauderhill" element={<Location1 />} />
      <Route path="/locations/fort-lauderdale" element={<Location2 />} />
      <Route path="/locations/hollywood" element={<Location3 />} />
      <Route path="/locations/miramar" element={<Location4 />} />
      <Route path="/locations/pembroke-pines" element={<Location5 />} />
      <Route path="/locations/plantation" element={<Location6 />} />
      <Route path="/locations/sunrise" element={<Location7 />} />
      <Route path="/locations/davie" element={<Location8 />} />
      <Route path="/locations/tamarac" element={<Location9 />} />
      <Route path="/locations/deerfield-beach" element={<Location10 />} />

      {/* Blog */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/why-lauderhill-homeowners-should-never-diy-tree-removal" element={<BlogPost1 />} />
      <Route path="/blog/signs-your-tree-is-dangerous-needs-immediate-removal" element={<BlogPost2 />} />
      <Route path="/blog/stump-grinding-vs-stump-removal-difference" element={<BlogPost3 />} />
      <Route path="/blog/south-florida-hurricane-season-affects-trees" element={<BlogPost4 />} />
      <Route path="/blog/how-to-choose-tree-service-company-fort-lauderdale" element={<BlogPost5 />} />
      <Route path="/blog/true-cost-ignoring-damaged-tree-property" element={<BlogPost6 />} />

      {/* Other */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/review" element={<Review />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/get-your-discount" element={<Discount />} />
      <Route path="/client-review" element={<ClientSubmit />} />
      <Route path="/client-submit" element={<ClientSubmit />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
