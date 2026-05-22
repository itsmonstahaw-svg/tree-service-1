import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm">Last updated: May 2026</p>
          </div>

          <p className="text-zinc-300 leading-relaxed">
            Paula's A1 Tree Removal & Stump Grind ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard information you provide when visiting our website or contacting us about tree services. By using our website, you agree to the practices described in this policy.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            <p className="text-zinc-300 leading-relaxed">
              When you submit a quote request or contact form on our website, we collect your full name, phone number, email address (if provided), and any message or service details you include. We do not collect payment card information through our website. We may also collect non-personal browsing data such as page visits and device type through cookies and analytics tools to help us improve our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
            <p className="text-zinc-300 leading-relaxed">
              We use your information to respond to service inquiries, schedule free estimates and appointments, send appointment reminders and service follow-ups via SMS and email, and send occasional marketing messages to customers who have opted in. We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. SMS Communications & A2P 10DLC Compliance</h2>
            <p className="text-zinc-300 leading-relaxed">
              By checking the SMS consent checkbox on our quote form, you expressly consent to receive SMS notifications and alerts from Paula's A1 Tree Removal & Stump Grind. Message frequency varies based on your service activity. Standard message and data rates may apply depending on your carrier and plan. To stop receiving messages at any time, reply STOP to any SMS from us. To request assistance, reply HELP or call us at (954) 623-0558. SMS consent is never required as a condition of purchasing services. SMS opt-in data and consent records are not shared with any third party for marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Third-Party Service Providers</h2>
            <p className="text-zinc-300 leading-relaxed">
              We use GoHighLevel / LeadConnector as our customer relationship management (CRM) platform. Your form submission data is transmitted to and stored within this system. SMS messages are delivered through Twilio, a third-party messaging provider. These providers operate under their own privacy policies and process your data only on our behalf to facilitate communication. We do not authorise them to use your information for any other purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Cookies and Analytics</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our website may use cookies and similar technologies to analyse traffic patterns and improve user experience. These tools do not identify you personally. You may disable cookies through your browser settings, though some website features may be affected. We do not use cookies to track your activity across unrelated third-party websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
            <p className="text-zinc-300 leading-relaxed">
              We retain your personal information for as long as reasonably necessary to provide services, maintain business records, and comply with applicable Florida and federal legal requirements. If you would like your information deleted from our records, please contact us in writing and we will process your request within a reasonable time frame, subject to any legal obligations to retain certain records.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Your Rights</h2>
            <p className="text-zinc-300 leading-relaxed">
              You have the right to request access to the personal data we hold about you, to request correction of inaccurate information, and to request deletion of your personal data. Florida residents may have additional rights under applicable state privacy law. To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">8. Security</h2>
            <p className="text-zinc-300 leading-relaxed">
              We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security of data transmitted to our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">9. Children's Privacy</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information through our website, please contact us immediately so we can delete it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. Updates will be posted on this page with a revised effective date. We encourage you to review this policy from time to time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">11. Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">If you have any questions about this Privacy Policy or how we handle your information, please contact us:</p>
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

export default PrivacyPolicy;
