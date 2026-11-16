import Link from 'next/link';
import { siteConfig } from '@/lib/site';

type QuoteFormLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function QuoteFormLink({ children, className }: QuoteFormLinkProps) {
  return (
    <Link href={siteConfig.quotePage.href} className={className}>
      {children}
    </Link>
  );
}
