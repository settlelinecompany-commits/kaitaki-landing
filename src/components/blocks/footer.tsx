import { Link } from 'react-router-dom';
import kaitakiLogo from '../../../kaitaki.png';

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

export const Footer = ({
  logo = {
    src: kaitakiLogo,
    alt: "Kaitaki",
    title: "Kaitaki",
    url: "/",
  },
  tagline = "Run privacy assessments through AI agents in hours, not weeks",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "AI Agents", url: "#ai-agents" },
        { text: "How It Works", url: "#how-it-works" },
        { text: "Features", url: "#features" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "/#blog" },
        { text: "Documentation", url: "#" },
        { text: "Support", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy Policy", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 Kaitaki. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => {
  return (
    <section className="py-16 border-t border-gray-200 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link to="/">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-6"
                  />
                </Link>
                <p className="text-xl font-semibold text-zinc-900">{logo.title}</p>
              </div>
              <p className="mt-4 text-zinc-600 font-medium">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-zinc-900">{section.title}</h3>
                <ul className="space-y-3 text-zinc-600">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-blue-500 transition-colors"
                    >
                      {link.url.startsWith('#') ? (
                        <a href={link.url}>{link.text}</a>
                      ) : (
                        <Link to={link.url}>{link.text}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-200 pt-8 text-sm font-medium text-zinc-600 md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-blue-500 transition-colors">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

