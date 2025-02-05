import { GiRetroController, GiConsoleController, GiGamepadCross, GiCastle } from 'react-icons/gi';
import Link from 'next/link';

const retroGames = [
  {
    title: "Game Boy Era",
    games: [
      { name: "Link's Awakening (1993)", href: "/retro-corner/links-awakening" },
      { name: "Oracle of Seasons (2001)", href: "/retro-corner/oracle-seasons" },
      { name: "Oracle of Ages (2001)", href: "/retro-corner/oracle-ages" },
      { name: "The Minish Cap (2004)", href: "/retro-corner/minish-cap" }
    ]
  },
  {
    title: "NES & SNES Classics",
    games: [
      { name: "The Legend of Zelda (1986)", href: "/retro-corner/legend-of-zelda" },
      { name: "Adventure of Link (1987)", href: "/retro-corner/adventure-of-link" },
      { name: "A Link to the Past (1991)", href: "/retro-corner/link-to-past" }
    ]
  },
  {
    title: "Early 3D Era",
    games: [
      { name: "Ocarina of Time (1998)", href: "/retro-corner/ocarina-of-time" },
      { name: "Majora's Mask (2000)", href: "/retro-corner/majoras-mask" },
      { name: "Wind Waker (2002)", href: "/retro-corner/wind-waker" }
    ]
  }
];

export default function RetroCornerPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiRetroController className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">Retro Corner</h1>
          <p className="text-[rgb(var(--muted))] text-xl">Preserving the classics that started it all</p>
        </div>

        {/* Legal Notice */}
        <div className="mb-16 p-4 border border-[rgba(var(--gold),0.3)] rounded-lg">
          <p className="text-[rgb(var(--muted))] text-center">
            This section is dedicated to the preservation and documentation of classic Zelda games.
            We encourage supporting official releases and Virtual Console versions when available.
          </p>
        </div>

        {/* Game Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {retroGames.map((category, idx) => (
            <div key={idx} className="zelda-card">
              <h2 className="card-title text-center mb-6">{category.title}</h2>
              <ul className="space-y-3">
                {category.games.map((game, gameIdx) => (
                  <li key={gameIdx}>
                    <Link 
                      href={game.href}
                      className="block p-3 rounded transition-all duration-300
                               bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                               border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                               text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                    >
                      <span className="block">{game.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              href="/retro-corner/emulation" 
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiConsoleController className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Emulation Guides</h3>
                <p className="card-description">Legal emulation and preservation tips</p>
              </div>
            </Link>

            <Link 
              href="/retro-corner/manuals" 
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiGamepadCross className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Game Manuals</h3>
                <p className="card-description">Original manual scans and translations</p>
              </div>
            </Link>

            <Link 
              href="/retro-corner/history" 
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiCastle className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))]">Gaming History</h3>
                <p className="card-description">Development stories and interviews</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 