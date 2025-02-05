import { GiScrollUnfurled, GiSpellBook, GiPuzzle, GiSwordsPower, GiRetroController, GiBookshelf } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Content */}
        <div className="hero__header">
          <div className="hero__logo">
            <Image
              src="/hyrule-crest-totk.png"
              alt="Hyrule Archives"
              width={180}
              height={180}
              priority
              className="mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-bold zelda-title mb-4">
              The Hyrule Archives
            </h1>
          </div>
          <div className="hero__description">
            <p>Your ultimate guide to the legends, lore, and mysteries of Hyrule. Explore timelines, discover secrets, and join our community of adventurers.</p>
          </div>
        </div>

        {/* Hero Links */}
        <nav className="hero__links" aria-label="Main Navigation">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li>
              <Link href="/timeline" className="hero__button">
                Begin Your Journey
                <span>TIMELINE</span>
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hero__button">
                Master The Adventure
                <span>GUIDES</span>
              </Link>
            </li>
            <li>
              <Link href="/theories" className="hero__button">
                Uncover Mysteries
                <span>THEORIES</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* Main Content */}
      <main className="relative bg-[rgb(var(--background))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Primary Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <Link href="/timeline" className="zelda-card">
              <GiScrollUnfurled className="zelda-icon mx-auto" />
              <h2 className="card-title">Timeline</h2>
              <p className="card-description">Journey through the ages of Hyrule</p>
            </Link>

            <Link href="/guides" className="zelda-card">
              <GiSpellBook className="zelda-icon mx-auto" />
              <h2 className="card-title">Guides</h2>
              <p className="card-description">Master the secrets of each game</p>
            </Link>

            <Link href="/puzzles" className="zelda-card">
              <GiPuzzle className="zelda-icon mx-auto" />
              <h2 className="card-title">Puzzles</h2>
              <p className="card-description">Test your wisdom with weekly challenges</p>
            </Link>

            <Link href="/theories" className="zelda-card">
              <GiSwordsPower className="zelda-icon mx-auto" />
              <h2 className="card-title">Theories</h2>
              <p className="card-description">Unravel the mysteries of the legend</p>
            </Link>
          </div>

          {/* Fan Resources */}
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Fan Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/retro-corner" className="zelda-card">
              <GiRetroController className="zelda-icon mx-auto" />
              <h2 className="card-title">Retro Corner</h2>
              <p className="card-description">Explore classic Zelda games and preservation resources</p>
            </Link>

            <Link href="/library" className="zelda-card">
              <GiBookshelf className="zelda-icon mx-auto" />
              <h2 className="card-title">Hyrule Library</h2>
              <p className="card-description">Fan translations, manuals, and archived content</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
