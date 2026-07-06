import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AI Policy | The Sprayfoam Works',
  description:
    'AI policy for The Sprayfoam Works, Inc. Learn how we use artificial intelligence on our website and in customer communications.',
  alternates: { canonical: `${siteConfig.url}/ai-policy` },
};

export default function AiPolicy() {
  return (
    <LegalPage title="AI Policy">
      <p>
        The Sprayfoam Works, Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) may use
        artificial intelligence (AI) tools to improve our website, respond to inquiries, and support
        day-to-day business operations. This policy explains how we approach AI use and what you
        should know when interacting with us.
      </p>

      <h2>How we use AI</h2>
      <p>
        We may use AI-assisted tools to help draft website content, organize project information,
        summarize customer messages, and improve the clarity of our online materials. AI tools may
        also support internal workflows such as scheduling, note-taking, and follow-up reminders.
        Final decisions about pricing, scheduling, and project scope are always made by our team.
      </p>

      <h2>Accuracy and human review</h2>
      <p>
        AI-generated content may not always be complete or fully accurate. We review important
        information before it is published or shared with customers. If something on our website
        or in a message does not look right, please contact us directly so we can correct it.
      </p>

      <h2>Your information and AI tools</h2>
      <p>
        Information you submit through our quote or contact forms is used to respond to your request
        and provide our insulation services. We do not sell your personal information. When we use
        third-party AI or business tools, we share only what is needed to operate our business and
        follow applicable privacy laws and vendor terms.
      </p>

      <h2>No professional advice</h2>
      <p>
        Content on our website, including any AI-assisted material, is provided for general
        information about insulation services. It is not a substitute for an on-site evaluation,
        building code review, or a written quote from our team. Always confirm project details with
        us before making decisions.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this AI policy as our tools and practices change. The current version will
        always be posted on this page.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this AI policy? Call or text us at{' '}
        <a href={siteConfig.phoneTel}>{siteConfig.phone}</a> or email{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
