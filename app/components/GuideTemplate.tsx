import { GiSpellBook, GiScrollUnfurled } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';

interface GuideSection {
  title: string;
  content: string;
  href?: string;
  subsections?: { title: string; content: string }[];
}

interface GuideTemplateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  sections: GuideSection[];
  relatedGuides: {
    title: string;
    href: string;
    description: string;
  }[];
  mediaContent?: {
    images?: { src: string; alt: string }[];
    videos?: { src: string; title: string }[];
  };
  lastUpdated: string;
}

export default function GuideTemplate({
  title,
  description,
  icon = <GiSpellBook />,
  sections,
  relatedGuides,
  mediaContent,
  lastUpdated
}: GuideTemplateProps) {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]">
            {icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            {title}
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">{description}</p>
          <p className="text-sm text-[rgb(var(--muted))] mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="zelda-card mb-8">
          <h2 className="card-title text-center mb-4">Contents</h2>
          <ul className="space-y-2">
            {sections.map((section, idx) => (
              <li key={idx}>
                {section.href ? (
                  <Link 
                    href={section.href}
                    className="block p-3 rounded transition-all duration-300
                             bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                             border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                             text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                  >
                    {section.title}
                  </Link>
                ) : (
                  <a 
                    href={`#section-${idx}`}
                    className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors"
                  >
                    {section.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="space-y-12 mb-16">
          {sections.map((section, idx) => (
            <div key={idx} id={`section-${idx}`} className="zelda-card">
              {section.href ? (
                <Link href={section.href} className="block">
                  <h2 className="card-title mb-6 hover:text-[rgb(var(--gold))] transition-colors">
                    {section.title}
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    {section.content}
                  </div>
                </Link>
              ) : (
                <>
                  <h2 className="card-title mb-6">{section.title}</h2>
                  <div className="prose prose-invert max-w-none">
                    {section.content}
                    {section.subsections && (
                      <div className="mt-8 space-y-6">
                        {section.subsections.map((subsection, subIdx) => (
                          <div key={subIdx}>
                            <h3 className="text-xl font-bold text-[rgb(var(--gold))] mb-4">
                              {subsection.title}
                            </h3>
                            <div>{subsection.content}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Media Content */}
        {mediaContent && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Media Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaContent.images?.map((image, idx) => (
                <div key={idx} className="zelda-card group cursor-pointer hover:scale-[1.02] transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Guides */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedGuides.map((guide, idx) => (
              <Link 
                key={idx} 
                href={guide.href} 
                className="zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <GiScrollUnfurled className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))] transition-colors" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))] transition-colors">{guide.title}</h3>
                <p className="card-description">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 flex justify-between items-center">
          <Link 
            href="/guides"
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors hover:-translate-x-1 transform duration-300"
          >
            ← Back to Guides
          </Link>
          <Link 
            href="#"
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors hover:-translate-y-1 transform duration-300"
          >
            Back to Top ↑
          </Link>
        </div>
      </div>
    </div>
  );
} 