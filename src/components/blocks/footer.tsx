'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, Blocks, BookOpen, Shield, Mail } from 'lucide-react';
import kaitakiLogo from '../../../kaitaki.png';

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: {
    name: string;
    description: string;
  };
  socialLinks?: SocialLink[];
  columns?: FooterColumn[];
  copyright?: string;
}

// LinkedIn Icon
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    />
  </svg>
);

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  (
    {
      className,
      brand = {
        name: 'Kaitaki',
        description: 'The Privacy Assurance Operating System. Purpose-built for enterprise privacy teams.',
      },
      socialLinks = [
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/company/kaitaki',
        },
        {
          name: 'Contact',
          href: 'mailto:hello@kaitaki.app',
        },
      ],
      columns = [
        {
          title: 'Product',
          links: [
            {
              name: 'Features',
              Icon: Blocks,
              href: '#features',
            },
            {
              name: 'Capabilities',
              Icon: Shield,
              href: '#capabilities',
            },
            {
              name: 'Results',
              Icon: BookOpen,
              href: '#results',
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            {
              name: 'Blog',
              Icon: BookOpen,
              href: '#blog',
            },
            {
              name: 'Contact Us',
              Icon: Mail,
              href: 'mailto:hello@kaitaki.app',
            },
          ],
        },
      ],
      copyright = '© 2025 Kaitaki. All rights reserved.',
      ...props
    },
    ref
  ) => {
    return (
      <footer
        ref={ref}
        className={cn('pt-16 bg-zinc-50 border-t border-zinc-200', className)}
        {...props}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <a href="/" className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
                <img src={kaitakiLogo} alt="Kaitaki" className="h-6 w-6" />
                {brand.name}
              </a>
              <p className="text-sm text-zinc-600 mt-3 max-w-xs">
                {brand.description}
              </p>

              <p className="text-sm font-light text-zinc-500 mt-4">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      className="hover:text-zinc-900 transition-colors"
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && ' • '}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-8 lg:justify-items-end gap-8 lg:gap-4">
              {columns.map(({ title, links }) => (
                <div key={title}>
                  <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
                  <ul className="mt-4 space-y-3">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || '#'}
                          className="text-sm transition-all text-zinc-500 hover:text-zinc-900 group flex items-center"
                        >
                          <Icon className="inline stroke-2 h-4 w-4 mr-2 transition-all stroke-zinc-400 group-hover:stroke-zinc-700" />
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          {copyright && (
            <div className="mt-12 border-t border-zinc-200 pt-6 pb-8">
              <p className="text-xs text-zinc-500">{copyright}</p>
            </div>
          )}
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';
