import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { stripSiteChrome } from '@/lib/strip-site-chrome';

type PageContentProps = {
  html: string;
  stickyHeader?: boolean;
};

export function PageContent({ html, stickyHeader = true }: PageContentProps) {
  const bodyHtml = stripSiteChrome(html);

  return (
    <>
      <SiteEnhancements sticky={stickyHeader} />
      <div className="sfw-page" style={{ background: '#0B0B0C' }}>
        <SiteHeader />
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        <SiteFooter />
      </div>
    </>
  );
}
