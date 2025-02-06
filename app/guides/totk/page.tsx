import { GiSpellBook, GiTreasureMap, GiSwordsPower, GiPotionBall, GiCrystalBall, GiScrollUnfurled } from 'react-icons/gi';
import { FaExternalLinkAlt } from 'react-icons/fa';

const guideCategories = [
  {
    title: "Main Story",
    sections: [
      { name: "Prologue & Tutorial", href: "/guides/totk/main-quest/prologue" },
      { name: "The Depths", href: "/guides/totk/main-quest/depths" },
      { name: "Sky Islands", href: "/guides/totk/main-quest/sky" },
      { name: "Dragon's Tears", href: "/guides/totk/main-quest/tears" }
    ]
  },
  {
    title: "Game Mechanics",
    sections: [
      { name: "Ultrahand Guide", href: "/guides/totk/mechanics/ultrahand" },
      { name: "Fuse System", href: "/guides/totk/mechanics/fuse" },
      { name: "Recall Ability", href: "/guides/totk/mechanics/recall" },
      { name: "Ascend Usage", href: "/guides/totk/mechanics/ascend" }
    ]
  },
  {
    title: "World Exploration",
    sections: [
      { name: "All Shrine Locations", href: "/guides/totk/shrines" },
      { name: "Korok Seeds", href: "/guides/totk/koroks" },
      { name: "Side Quests", href: "/guides/totk/side-quests" },
      { name: "Caves & Wells", href: "/guides/totk/caves" }
    ]
  }
];

const quickGuides = [
  {
    title: "Best Early Game Weapons",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Best_Early_Game_Weapons",
    description: "Essential weapons to get at the start"
  },
  {
    title: "Rupee Farming Methods",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/How_to_Farm_Rupees",
    description: "Fast ways to earn money"
  },
  {
    title: "Optimal Armor Upgrades",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Best_Armor_Sets",
    description: "Best armor to upgrade first"
  }
];

const mainStoryGuides = [
  {
    name: "Prologue & Tutorial",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Walkthrough"
  },
  {
    name: "The Depths",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/The_Depths_-_Everything_You_Need_to_Know"
  },
  {
    name: "Sky Islands",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Sky_Islands_-_Everything_You_Need_to_Know"
  },
  {
    name: "Dragon's Tears",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Dragon_Tears_Locations"
  }
];

const mechanicsGuides = [
  {
    name: "Ultrahand Guide",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Ultrahand"
  },
  {
    name: "Fuse System",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Fuse"
  },
  {
    name: "Recall Ability",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Recall"
  },
  {
    name: "Ascend Usage",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Ascend"
  }
];

const explorationGuides = [
  {
    name: "All Shrine Locations",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Shrine_Locations"
  },
  {
    name: "Korok Seeds",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Korok_Seed_Locations"
  },
  {
    name: "Side Quests",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Side_Quests"
  },
  {
    name: "Caves & Wells",
    href: "https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Cave_Locations"
  }
];

export default function TOTKGuidePage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiSpellBook className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Tears of the Kingdom
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">Complete game guide and walkthrough</p>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Quick Start Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickGuides.map((guide, idx) => (
              <a 
                key={idx} 
                href={guide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block zelda-card group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[rgb(var(--gold))] mb-2 group-hover:text-[rgb(var(--gold-hover))] flex items-center justify-center gap-2">
                    {guide.title}
                    <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100" />
                  </h3>
                  <p className="text-[rgb(var(--muted))]">{guide.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Main Story */}
          <div className="zelda-card">
            <h2 className="card-title text-center mb-6">Main Story</h2>
            <ul className="space-y-3">
              {mainStoryGuides.map((guide, idx) => (
                <li key={idx}>
                  <a 
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded transition-all duration-300
                             bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                             border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                             text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                  >
                    <span className="flex items-center justify-between">
                      {guide.name}
                      <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Mechanics */}
          <div className="zelda-card">
            <h2 className="card-title text-center mb-6">Game Mechanics</h2>
            <ul className="space-y-3">
              {mechanicsGuides.map((guide, idx) => (
                <li key={idx}>
                  <a 
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded transition-all duration-300
                             bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                             border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                             text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                  >
                    <span className="flex items-center justify-between">
                      {guide.name}
                      <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* World Exploration */}
          <div className="zelda-card">
            <h2 className="card-title text-center mb-6">World Exploration</h2>
            <ul className="space-y-3">
              {explorationGuides.map((guide, idx) => (
                <li key={idx}>
                  <a 
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded transition-all duration-300
                             bg-[rgba(var(--primary),0.3)] hover:bg-[rgba(var(--gold),0.1)]
                             border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]
                             text-[rgb(var(--foreground))] hover:text-[rgb(var(--gold))]"
                  >
                    <span className="flex items-center justify-between">
                      {guide.name}
                      <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold zelda-title mb-8 text-center">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="https://www.zeldadungeon.net/tears-of-the-kingdom-interactive-map/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiTreasureMap className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))] flex items-center justify-center gap-2">
                  Interactive Maps
                  <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100" />
                </h3>
                <p className="card-description">Complete world map with all locations</p>
              </div>
            </a>

            <a 
              href="https://www.zeldadungeon.net/tears-of-the-kingdom-vehicle-builds/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiSwordsPower className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))] flex items-center justify-center gap-2">
                  Vehicle Builds
                  <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100" />
                </h3>
                <p className="card-description">Best Ultrahand vehicle designs</p>
              </div>
            </a>

            <a 
              href="https://www.zeldadungeon.net/tears-of-the-kingdom-item-database/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block zelda-card text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div>
                <GiScrollUnfurled className="zelda-icon mx-auto group-hover:text-[rgb(var(--gold))]" />
                <h3 className="card-title group-hover:text-[rgb(var(--gold))] flex items-center justify-center gap-2">
                  Item Database
                  <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100" />
                </h3>
                <p className="card-description">Complete item and material list</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 