import { GiRetroController, GiScrollUnfurled, GiPuzzle, GiSpellBook } from 'react-icons/gi';
import Link from 'next/link';

export default function MinishCapPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiRetroController className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">The Minish Cap</h1>
          <p className="text-[rgb(var(--muted))] text-xl">Complete Guide & Resources</p>
        </div>

        {/* Legal Notice */}
        <div className="mb-16 p-4 border border-[rgba(var(--gold),0.3)] rounded-lg">
          <p className="text-[rgb(var(--muted))] text-center">
            This is a fan-made preservation project. We encourage supporting official releases when available.
            All content is provided for educational and archival purposes only.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="zelda-card">
            <GiScrollUnfurled className="zelda-icon mx-auto" />
            <h2 className="card-title text-center">Complete Walkthrough</h2>
            <ul className="space-y-3 mt-4">
              <li>
                <Link 
                  href="/guides/mc/walkthrough/chapter1"
                  className="block p-3 rounded transition-all duration-300
                           bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                           border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                           text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                >
                  Chapter 1: The Picori Festival
                </Link>
              </li>
              <li>
                <Link 
                  href="/guides/mc/walkthrough/chapter2"
                  className="block p-3 rounded transition-all duration-300
                           bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                           border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                           text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                >
                  Chapter 2: The Minish Woods
                </Link>
              </li>
              {/* Add more chapters as needed */}
            </ul>
          </div>

          <div className="zelda-card">
            <GiPuzzle className="zelda-icon mx-auto" />
            <h2 className="card-title text-center">Collectibles & Secrets</h2>
            <ul className="space-y-3 mt-4">
              <li>
                <Link 
                  href="/guides/mc/collectibles/kinstone"
                  className="block p-3 rounded transition-all duration-300
                           bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                           border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                           text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                >
                  Kinstone Fusion Guide
                </Link>
              </li>
              <li>
                <Link 
                  href="/guides/mc/collectibles/figurines"
                  className="block p-3 rounded transition-all duration-300
                           bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                           border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                           text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                >
                  Figurine Collection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/guides/mc/maps" className="zelda-card text-center">
              <GiSpellBook className="zelda-icon mx-auto" />
              <h3 className="card-title">World Maps</h3>
              <p className="card-description">Detailed maps of every area</p>
            </Link>

            <Link href="/guides/mc/items" className="zelda-card text-center">
              <GiSpellBook className="zelda-icon mx-auto" />
              <h3 className="card-title">Item Guide</h3>
              <p className="card-description">Complete item encyclopedia</p>
            </Link>

            <Link href="/guides/mc/translation" className="zelda-card text-center">
              <GiSpellBook className="zelda-icon mx-auto" />
              <h3 className="card-title">Translation Notes</h3>
              <p className="card-description">Original vs localized differences</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 