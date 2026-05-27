"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/providers/language-provider";
import { translations as T, t } from "@/lib/i18n/translations";

export function Footer() {
  const { locale } = useLanguage();

  const linkSections = [
    {
      title: t(T.footer.sections.studio, locale),
      links: [
        { label: t(T.footer.links.services, locale), href: "/services" },
        { label: t(T.footer.links.portfolio, locale), href: "/portfolio" },
        { label: t(T.footer.links.pricing, locale), href: "/pricing" },
        { label: t(T.footer.links.about, locale), href: "/about" },
      ],
    },
    {
      title: t(T.footer.sections.resources, locale),
      links: [
        { label: t(T.footer.links.insights, locale), href: "/blog" },
        { label: t(T.footer.links.contact, locale), href: "/contact" },
        { label: t(T.footer.links.bookCall, locale), href: siteConfig.links.calendly },
      ],
    },
    {
      title: t(T.footer.sections.legal, locale),
      links: [
        { label: t(T.footer.links.privacy, locale), href: "/legal/privacy" },
        { label: t(T.footer.links.terms, locale), href: "/legal/terms" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="container-tight py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t(T.footer.tagline, locale)}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink href={siteConfig.links.github} icon={Github} label="GitHub" />
              <SocialLink href={siteConfig.links.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={siteConfig.links.instagram} icon={Instagram} label="Instagram" />
              <SocialLink href={siteConfig.links.twitter} icon={Twitter} label="X / Twitter" />
              <SocialLink href={`mailto:${siteConfig.contactEmail}`} icon={Mail} label="Email" />
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold">{section.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} Firlou Studio &mdash; {siteConfig.city}. {t(T.footer.rights, locale)}
          </p>
          <p>
            {t(T.footer.craftedBy, locale)}{" "}
            <span className="text-foreground">{siteConfig.founders.join(" & ")}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary hover:text-foreground"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
