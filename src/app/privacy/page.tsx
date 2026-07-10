import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CodePath collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: July 10, 2026
        </p>
      </header>

      <div className="prose-lesson mt-10 space-y-8">
        <section>
          <h2>Overview</h2>
          <p>
            This is a demonstration project. CodePath is a portfolio clone built
            for educational purposes and does not operate a real business. This
            policy describes the kinds of practices a production version would
            follow, and is provided as sample content only.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>
            A production version of this service would collect the minimum data
            needed to operate:
          </p>
          <ul>
            <li>
              <strong>Account information</strong> — such as your name and email
              address when you create an account.
            </li>
            <li>
              <strong>Learning progress</strong> — lessons completed and
              problems attempted, so we can show your progress.
            </li>
            <li>
              <strong>Usage data</strong> — anonymized analytics about which
              pages are visited, to improve the product.
            </li>
          </ul>
          <div className="lesson-callout lesson-callout-note">
            Because this is a demo, none of the forms on this site actually
            transmit or store data.
          </div>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>
            Data would be used only to provide and improve the service: to
            authenticate you, save your progress, respond to support requests,
            and understand aggregate usage patterns. We would never sell your
            personal data.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            A production version would use essential cookies to keep you signed
            in and, with consent, optional cookies for analytics. You could
            decline non-essential cookies at any time.
          </p>
        </section>

        <section>
          <h2>Data retention & your rights</h2>
          <p>
            You would be able to export or delete your data at any time by
            contacting support. Account data would be retained only while your
            account is active.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to
            <code>privacy@codepath.dev</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
