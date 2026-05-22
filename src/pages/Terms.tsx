import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-sm">Last updated: May 2026</p>
          </div>

          <p className="text-zinc-300 leading-relaxed">
            These Terms and Conditions ("Terms") govern your use of the website operated by Paula's A1 Tree Removal & Stump Grind ("Company," "we," "our," or "us") and any services requested through it. By accessing our website or requesting a service estimate, you agree to be bound by these Terms. If you do not agree, please do not use our website.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Services</h2>
            <p className="text-zinc-300 leading-relaxed">
              Paula's A1 Tree Removal & Stump Grind provides professional tree removal, stump grinding, tree trimming, tree pruning, shrub trimming and removal, tree planting, tree cabling and bracing, and storm cleanup services for residential and commercial properties in Lauderhill and throughout the South Florida region. All services are subject to a free on-site or remote estimate prior to scheduling. We reserve the right to decline any job that our team determines poses unacceptable safety risks or is outside the scope of our capabilities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Estimates and Pricing</h2>
            <p className="text-zinc-300 leading-relaxed">
              All estimates provided by Paula's A1 Tree Removal & Stump Grind are free of charge and are based on an assessment of the scope of work. Estimates are valid for 30 days from the date of issue unless otherwise noted. Final pricing may vary if site conditions differ materially from those assessed at the time of the estimate. Any additional work beyond the agreed scope will be discussed and approved by the customer before proceeding. We do not charge hidden fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Payment Terms</h2>
            <p className="text-zinc-300 leading-relaxed">
              Payment is due upon completion of each service unless a prior written arrangement has been made. We accept cash, check, and major credit/debit cards. Invoices not paid within 30 days of the service date may be subject to a late fee. For larger commercial projects, deposit terms may be arranged in advance and will be specified in the written estimate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Customer Responsibilities</h2>
            <p className="text-zinc-300 leading-relaxed">
              Customers are responsible for ensuring that our team has safe and unobstructed access to the work area on the scheduled service date. This includes moving vehicles, securing pets, and notifying us of any underground utilities, irrigation lines, or other hazards not visible from the surface. Paula's A1 Tree Removal & Stump Grind is not liable for damage to underground utilities or hidden obstructions that were not disclosed prior to service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Permits</h2>
            <p className="text-zinc-300 leading-relaxed">
              Tree removal in certain Florida municipalities may require a permit depending on tree species, size, and location. It is the customer's responsibility to determine whether a permit is required for their property and, if so, to obtain that permit before scheduling service. Paula's A1 Tree Removal & Stump Grind may assist in identifying permit requirements but is not responsible for securing permits on the customer's behalf unless expressly agreed in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Satisfaction Guarantee</h2>
            <p className="text-zinc-300 leading-relaxed">
              We stand behind our work. If you are not satisfied with the quality of a completed service, please contact us within 48 hours of the service date. We will assess the concern and, where reasonable and within our control, take corrective action at no additional cost. Our satisfaction guarantee covers the workmanship of our team and does not extend to outcomes caused by pre-existing tree conditions, weather, or factors outside our control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Limitation of Liability</h2>
            <p className="text-zinc-300 leading-relaxed">
              To the maximum extent permitted under Florida law, Paula's A1 Tree Removal & Stump Grind's total liability for any claim arising from services performed shall not exceed the amount paid by the customer for the specific service giving rise to the claim. We are not liable for indirect, consequential, incidental, or punitive damages of any kind. Our liability for damage to property during service is limited to cases of gross negligence or wilful misconduct by our team members.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Insurance</h2>
            <p className="text-zinc-300 leading-relaxed">
              Paula's A1 Tree Removal & Stump Grind carries general liability insurance and maintains coverage appropriate for the tree services we provide in Florida. Proof of insurance is available upon request. Customers are encouraged to review their own homeowner's insurance policy regarding tree service work performed on their property.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. Cancellations and Rescheduling</h2>
            <p className="text-zinc-300 leading-relaxed">
              We understand that plans change. We ask that customers notify us at least 24 hours in advance if they need to cancel or reschedule a scheduled appointment. Same-day cancellations may result in a cancellation fee for commercial jobs where crew and equipment have been mobilised. We will always do our best to accommodate rescheduling requests promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">10. Governing Law</h2>
            <p className="text-zinc-300 leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Broward County, Florida.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">11. Changes to These Terms</h2>
            <p className="text-zinc-300 leading-relaxed">
              We reserve the right to update these Terms at any time. Changes will be posted on this page with a revised effective date. Your continued use of our website after any change constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="text-zinc-300 space-y-1">
              <p className="font-bold text-white">Paula's A1 Tree Removal & Stump Grind</p>
              <p>6260 S Falls Cir Dr, Lauderhill, FL 33319</p>
              <p>Phone: <a href="tel:+19546230558" className="text-primary hover:underline">(954) 623-0558</a></p>
              <p>Email: <a href="mailto:A1sneakerrestoration@gmail.com" className="text-primary hover:underline">A1sneakerrestoration@gmail.com</a></p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
