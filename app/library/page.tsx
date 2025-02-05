import { GiBookshelf, GiScrollQuill, GiSpellBook, GiSecretBook, GiBookmark, GiBookCover } from 'react-icons/gi';
import Link from 'next/link';

const categories = [
  {
    title: "Game Documents",
    sections: [
      { name: "Original Manuals", href: "/library/manuals" },
      { name: "Strategy Guides", href: "/library/strategy-guides" },
      { name: "Design Documents", href: "/library/design-docs" },
      { name: "Marketing Materials", href: "/library/marketing" }
    ]
  },
  {
    title: "Translations",
    sections: [
      { name: "Japanese Exclusives", href: "/library/jp-exclusives" },
      { name: "Version Differences", href: "/library/version-diff" },
      { name: "Localization Notes", href: "/library/localization" },
      { name: "Fan Translations", href: "/library/fan-trans" }
    ]
  },
  {
    title: "Historical Archives",
    sections: [
      { name: "Developer Interviews", href: "/library/interviews" },
      { name: "Magazine Articles", href: "/library/magazines" },
      { name: "TV Commercials", href: "/library/commercials" },
      { name: "Press Releases", href: "/library/press" }
    ]
  },
  {
    title: "Art Collections",
    sections: [
      { name: "Official Artwork", href: "/library/artwork" },
      { name: "Concept Art", href: "/library/concept-art" },
      { name: "Promotional Art", href: "/library/promo-art" },
      { name: "Box Art Gallery", href: "/library/box-art" }
    ]
  }
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiBookshelf className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">Hyrule Library</h1>
          <p className="text-[rgb(var(--muted))] text-xl">A comprehensive archive of Zelda history and documentation</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {categories.map((category, idx) => (
            <div key={idx} className="zelda-card">
              <h2 className="card-title text-center mb-6">{category.title}</h2>
              <ul className="space-y-3">
                {category.sections.map((section, sectionIdx) => (
                  <li key={sectionIdx}>
                    <Link 
                      href={section.href}
                      className="block p-3 rounded transition-all duration-300
                               bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                               border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                               text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                    >
                      <span className="block">{section.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Collections */}
        <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            href="/library/hyrule-historia" 
            className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div>
              <GiBookCover className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
              <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Hyrule Historia</h3>
              <p className="card-description">Digital archive of the legendary book</p>
            </div>
          </Link>

          <Link 
            href="/library/encyclopedia" 
            className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div>
              <GiSecretBook className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
              <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Zelda Encyclopedia</h3>
              <p className="card-description">Comprehensive game documentation</p>
            </div>
          </Link>

          <Link 
            href="/library/creating-champion" 
            className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div>
              <GiScrollQuill className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
              <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Creating a Champion</h3>
              <p className="card-description">Behind the scenes of BOTW</p>
            </div>
          </Link>
        </div>

        {/* Reading List */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Essential Reading</h2>
          <div className="zelda-card">
            <GiBookmark className="zelda-icon mx-auto" />
            <div className="space-y-4">
              <Link 
                href="/library/reading/timeline"
                className="block p-4 rounded transition-all duration-300
                         bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                         border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                         text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">The Complete Zelda Timeline</h3>
                  <p className="text-[rgb(var(--muted))]">A comprehensive analysis of the official timeline and its implications</p>
                </div>
              </Link>
              
              <Link 
                href="/library/reading/development"
                className="block p-4 rounded transition-all duration-300
                         bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                         border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                         text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">The Development of Zelda</h3>
                  <p className="text-[rgb(var(--muted))]">From NES to Nintendo Switch: The evolution of the series</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 