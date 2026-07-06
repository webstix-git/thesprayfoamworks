import { siteConfig } from '@/lib/site';

export function ContactSidebar() {
  return (
    <aside className="sfw-contact-sidebar">
      <div className="sfw-contact-sidebar-block">
        <h3>Contact Sprayfoam Works, Inc.</h3>
        <a href={siteConfig.phoneTel} className="sfw-contact-sidebar-phone">
          {siteConfig.phone}
        </a>
        <a href={`mailto:${siteConfig.email}`} className="sfw-contact-sidebar-email">
          Email Sprayfoam Works
        </a>
      </div>

      <div className="sfw-contact-sidebar-block sfw-contact-sidebar-about">
        <h3>The Sprayfoam Works, Inc.</h3>
        <p>
          Founded in 2009, The Sprayfoam Works, Inc. is a preferred insulator in Madison,
          Wisconsin, Dane County and surrounding areas. We work directly with homeowners as well as
          with remodeling companies and contractors. Our experts are well versed in insulating both
          new and existing homes. Additionally, we specialize in insulating steel buildings and
          other business structures.
        </p>
      </div>
    </aside>
  );
}
