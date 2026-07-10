import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of CodePath.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: July 10, 2026
        </p>
      </header>

      <div className="prose-lesson mt-10 space-y-8">
        <section>
          <h2>Acceptance of terms</h2>
          <p>
            CodePath is a demonstration project built for educational and
            portfolio purposes. By using it you acknowledge that it is provided
            &ldquo;as is,&rdquo; without warranties, and is not a commercial
            service. These terms are sample content.
          </p>
        </section>

        <section>
          <h2>Use of the service</h2>
          <p>
            You may browse the courses, roadmaps, animations, and practice
            material for personal, non-commercial learning. In a production
            version you would agree to:
          </p>
          <ul>
            <li>Not misuse, disrupt, or attempt to break the service.</li>
            <li>Not scrape or redistribute content without permission.</li>
            <li>Keep your account credentials secure.</li>
          </ul>
        </section>

        <section>
          <h2>Content & intellectual property</h2>
          <p>
            All lessons, animations, and written material on this demo are
            original content created for the project. Company names referenced
            in practice sets are used for illustration only and belong to their
            respective owners.
          </p>
        </section>

        <section>
          <h2>Accounts</h2>
          <p>
            The sign-up and login forms on this site are non-functional demos.
            No real accounts are created and no credentials are stored.
          </p>
          <div className="lesson-callout lesson-callout-warn">
            Do not enter real passwords into this demo. The forms are for
            layout demonstration only.
          </div>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>
            As an educational demo, the project is provided without any
            guarantee of accuracy, availability, or fitness for a particular
            purpose. It should not be relied upon as professional advice.
          </p>
        </section>

        <section>
          <h2>Changes to these terms</h2>
          <p>
            These sample terms may be updated at any time as the project
            evolves. Continued use after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to
            <code>legal@codepath.dev</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
