import { MapPin, Phone } from "lucide-react";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-primary text-gray-300">
      <div className="w-full max-w-[1200px] mx-auto px-[12px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8">

          {/* Brand & Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Contact Us</h4>
            <div className="flex items-center gap-2 text-white font-black text-lg tracking-tighter uppercase">
              Paula's A1 Tree Removal & Stump Grind
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+19546230558" className="font-bold hover:text-primary transition-colors">(954) 623-0558</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-bold">6260 S Falls Cir Dr, Lauderhill, FL 33319</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://g.page/r/review" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <GoogleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Business Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Business</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://api.leadconnectorhq.com/widget/survey/7q3FktALio7SiNqAA3md" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Review Us</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/tree-removal" className="hover:text-primary transition-colors">Tree Removal</a></li>
              <li><a href="/services/stump-grinding" className="hover:text-primary transition-colors">Stump Grinding</a></li>
              <li><a href="/services/tree-trimming" className="hover:text-primary transition-colors">Tree Trimming</a></li>
              <li><a href="/services/tree-pruning" className="hover:text-primary transition-colors">Tree Pruning</a></li>
              <li><a href="/services/shrub-trimming-removal" className="hover:text-primary transition-colors">Shrub Trimming & Removal</a></li>
              <li><a href="/services/tree-planting" className="hover:text-primary transition-colors">Tree Planting</a></li>
              <li><a href="/services/tree-cabling-bracing" className="hover:text-primary transition-colors">Tree Cabling & Bracing</a></li>
              <li><a href="/services/storm-cleanup" className="hover:text-primary transition-colors">Storm Cleanup</a></li>
            </ul>
          </div>

          {/* Locations Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Locations</h4>
            <ul className="space-y-3">
              <li><a href="/locations/lauderhill" className="hover:text-primary transition-colors">Lauderhill</a></li>
              <li><a href="/locations/fort-lauderdale" className="hover:text-primary transition-colors">Fort Lauderdale</a></li>
              <li><a href="/locations/hollywood" className="hover:text-primary transition-colors">Hollywood</a></li>
              <li><a href="/locations/miramar" className="hover:text-primary transition-colors">Miramar</a></li>
              <li><a href="/locations/pembroke-pines" className="hover:text-primary transition-colors">Pembroke Pines</a></li>
              <li><a href="/locations/plantation" className="hover:text-primary transition-colors">Plantation</a></li>
              <li><a href="/locations/sunrise" className="hover:text-primary transition-colors">Sunrise</a></li>
              <li><a href="/locations/davie" className="hover:text-primary transition-colors">Davie</a></li>
              <li><a href="/locations/tamarac" className="hover:text-primary transition-colors">Tamarac</a></li>
              <li><a href="/locations/deerfield-beach" className="hover:text-primary transition-colors">Deerfield Beach</a></li>
              <li><a href="/locations/miami" className="hover:text-primary transition-colors">Miami</a></li>
              <li><a href="/locations/broward-county" className="hover:text-primary transition-colors">Broward County</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Operating Hours</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between"><span>Mon:</span> <span>7:00am – 7:00pm</span></li>
              <li className="flex justify-between"><span>Tue:</span> <span>7:00am – 7:00pm</span></li>
              <li className="flex justify-between"><span>Wed:</span> <span>7:00am – 7:00pm</span></li>
              <li className="flex justify-between"><span>Thu:</span> <span>7:00am – 7:00pm</span></li>
              <li className="flex justify-between"><span>Fri:</span> <span>7:00am – 7:00pm</span></li>
              <li className="flex justify-between"><span>Sat:</span> <span>7:00am – 7:00pm</span></li>
              <li className="flex justify-between"><span>Sun:</span> <span>7:00am – 7:00pm</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Paula's A1 Tree Removal & Stump Grind. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
