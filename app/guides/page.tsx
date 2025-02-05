import { GiSpellBook, GiSwordsPower, GiTreasureMap, GiPotionBall } from 'react-icons/gi';
import Link from 'next/link';

const guides = [
  {
    title: "Tears of the Kingdom",
    sections: [
      { name: "Main Quest Guide", href: "/guides/totk/main-quest" },
      { name: "Shrine Locations", href: "/guides/totk/shrines" },
      { name: "Side Quests", href: "/guides/totk/side-quests" },
      { name: "Ultrahand Builds", href: "/guides/totk/builds" }
    ]
  },
  {
    title: "Breath of the Wild",
    sections: [
      { name: "Main Quest Guide", href: "/guides/botw/main-quest" },
      { name: "Shrine Locations", href: "/guides/botw/shrines" },
      { name: "Korok Seeds", href: "/guides/botw/koroks" },
      { name: "DLC Content", href: "/guides/botw/dlc" }
    ]
  },
  {
    title: "Classic Games",
    sections: [
      { name: "Ocarina of Time", href: "/guides/oot" },
      { name: "Majora's Mask", href: "/guides/mm" },
      { name: "Wind Waker", href: "/guides/ww" },
      { name: "Twilight Princess", href: "/guides/tp" }
    ]
  },
  {
    title: "2D Adventures",
    sections: [
      { name: "A Link to the Past", href: "/guides/alttp" },
      { name: "Link's Awakening", href: "/guides/la" },
      { name: "Minish Cap", href: "/guides/mc" },
      { name: "Oracle Games", href: "/guides/oracle" }
    ]
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiSpellBook className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">Game Guides</h1>
          <p className="text-[rgb(var(--muted))] text-xl">Comprehensive guides for every adventure</p>
        </div>

        {/* Guide Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((category, idx) => (
            <div key={idx} className="zelda-card">
              <h2 className="card-title text-center mb-6">{category.title}</h2>
              <ul className="space-y-4">
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

        {/* Fan Resources */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Community Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              href="/retro-corner/minish-cap" 
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiTreasureMap className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Minish Cap</h3>
                <p className="card-description">Complete walkthrough and preservation guide</p>
              </div>
            </Link>

            <Link 
              href="/guides/speedrun" 
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiSwordsPower className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Speedrun Guides</h3>
                <p className="card-description">Learn advanced techniques and strategies</p>
              </div>
            </Link>

            <Link 
              href="/guides/glitches" 
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiPotionBall className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Glitch Archive</h3>
                <p className="card-description">Documentation of game mechanics and glitches</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 