import { siteConfig } from '@/lib/site';

type QuoteFormLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function QuoteFormLink({ children, className }: QuoteFormLinkProps) {
  return (
    <a
      href={siteConfig.quoteForm.href}
      download={siteConfig.quoteForm.download}
      className={className}
    >
      {children}
    </a>
  );
}
