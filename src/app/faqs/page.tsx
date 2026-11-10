import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { QuoteFormLink } from '@/components/QuoteFormLink';
import { faqEnergyTips, faqItems, faqPageIntro } from '@/lib/faqs';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQs | The Sprayfoam Works',
  description:
    'Spray foam insulation FAQs from The Sprayfoam Works. Learn about closed-cell foam, Wisconsin climate performance, moisture control, and project timelines.',
  alternates: { canonical: `${siteConfig.url}/faqs` },
  openGraph: {
    title: 'FAQs | The Sprayfoam Works',
    description:
      'Answers to common questions about closed-cell spray foam insulation from The Sprayfoam Works.',
    url: `${siteConfig.url}/faqs`,
  },
};

export default function FaqsPage() {
  return (
    <LegalPage title="Spray Foam Insulation FAQs">
      <p>{faqPageIntro}</p>
      <p>
        Still have a question? <Link href="/contact">Contact us</Link> or{' '}
        <QuoteFormLink>request a quote</QuoteFormLink>.
      </p>

      <div className="sfw-faq-list" style={{ marginTop: 32 }}>
        {faqItems.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {item.list ? (
              <ul>
                {item.list.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            ) : null}
            {item.afterList ? <p>{item.afterList}</p> : null}
          </article>
        ))}

        <article>
          <h3>{faqEnergyTips.title}</h3>
          <p>
            The{' '}
            <a href={faqEnergyTips.links[0].href} target="_blank" rel="noopener noreferrer">
              {faqEnergyTips.links[0].label}
            </a>{' '}
            (FEMP) offers checklists to help people conserve energy in their homes and businesses.
            You can also find low-cost tips on how to save energy and money on the U.S. Department of
            Energy’s{' '}
            <a href={faqEnergyTips.links[1].href} target="_blank" rel="noopener noreferrer">
              {faqEnergyTips.links[1].label}
            </a>{' '}
            website.
          </p>
        </article>
      </div>
    </LegalPage>
  );
}
