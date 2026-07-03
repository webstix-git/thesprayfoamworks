import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Sprayfoam Works',
  description:
    'Privacy policy for The Sprayfoam Works, Inc. Learn how we collect, use, and protect the information you share with us.',
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        The Sprayfoam Works, Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        respects your privacy. This policy explains what information we collect when you use our
        website or contact us, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect the information you choose to provide — such as your name, phone number, email
        address, project address, and project details — when you submit a quote request, call, or
        email us. We may also collect basic, non-identifying analytics about how visitors use our
        website, such as pages viewed and general location.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use your information to respond to inquiries, prepare quotes, schedule and complete
        insulation work, and follow up about your project. We do not sell your personal
        information. We may share limited details with service providers who help us operate our
        business, and only as needed to deliver our services.
      </p>

      <h2>How we protect your information</h2>
      <p>
        We take reasonable measures to safeguard the information you share with us and retain it
        only as long as needed for the purposes described above or as required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request that we update or delete the personal information you have provided by
        contacting us. You can also opt out of follow-up communications at any time.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this privacy policy, call or text us at{' '}
        <a href={siteConfig.phoneTel}>{siteConfig.phone}</a> or email{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
