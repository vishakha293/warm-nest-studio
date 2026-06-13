import { createFileRoute } from "@tanstack/react-router";
import { Shield, Eye, Cookie, Mail, FileText, Lock } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Home Finds Studio" },
      { name: "description", content: "Privacy Policy for Home Finds Studio. Learn how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy | Home Finds Studio" },
      { property: "og:description", content: "Privacy Policy for Home Finds Studio." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <Shield className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Introduction</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            Welcome to Home Finds Studio. We respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we collect,
            use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Information We Collect</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            We may collect personal information that you voluntarily provide to us when you
            register on the website, express interest in obtaining information about us or
            our products and services, or otherwise contact us. The personal information
            we collect may include your name, email address, and any other details you choose
            to provide.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We automatically collect certain information when you visit our website, such as
            your IP address, browser type, operating system, access times, and the pages you
            have viewed directly before and after accessing the website.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <Lock className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">How We Use Your Information</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            We use the information we collect to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website content and offerings</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service, updates, and marketing purposes</li>
            <li>Send you emails and newsletters if you have subscribed</li>
            <li>Find and prevent fraud and abuse</li>
          </ul>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <Cookie className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Cookies and Tracking Technologies</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            We may use cookies and similar tracking technologies to track activity on our
            website and store certain information. Cookies are files with a small amount of
            data which may include an anonymous unique identifier. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use some portions
            of our website.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Data Security</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            We implement appropriate technical and organizational security measures to
            protect your personal information. However, no method of transmission over the
            Internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <Eye className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Third-Party Services</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            We may employ third-party companies and individuals to facilitate our website,
            provide services on our behalf, or assist us in analyzing how our website is
            used. These third parties have access to your personal information only to
            perform these tasks on our behalf and are obligated not to disclose or use it for
            any other purpose.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Your Data Rights</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            Depending on your location, you may have certain rights regarding your personal
            information, including:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>The right to access the personal information we have about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to or restrict processing of your data</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Contact Us</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            If you have any questions about this privacy policy or our data practices, please
            contact us at:
          </p>
          <p className="mt-3 font-medium text-foreground">
            Email: privacy@homefindsstudio.com
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Changes to This Policy</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            We may update our privacy policy from time to time. We will notify you of any
            changes by posting the new privacy policy on this page and updating the "Last
            updated" date at the top. You are advised to review this privacy policy
            periodically for any changes.
          </p>
        </section>
      </div>
    </main>
  );
}
