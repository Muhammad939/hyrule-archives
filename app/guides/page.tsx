'use client';

import Link from 'next/link';
import { GiSpellBook, GiSwordsPower, GiTreasureMap, GiPuzzle, GiBookmarklet } from 'react-icons/gi';

const guides = [
  {
    id: 'totk',
    title: 'Tears of the Kingdom',
    description: 'Complete walkthrough, shrine locations, side quests, and collectibles',
    icon: GiSwordsPower,
    color: 'from-blue-500/20 to-transparent',
    sections: [
      {
        name: 'Main Quest Guide',
        url: '/guides/totk/main-quest',
        isExternal: false
      },
      {
        name: 'Shrine Locations',
        url: 'https://www.zeldadungeon.net/tears-of-the-kingdom-shrine-locations/',
        isExternal: true
      },
      {
        name: 'Side Quests',
        url: '/guides/totk/side-quests',
        isExternal: false
      },
      {
        name: 'Ultrahand Builds',
        url: 'https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Best_Ultrahand_Builds',
        isExternal: true
      }
    ]
  },
  {
    id: 'botw',
    title: 'Breath of the Wild',
    description: 'Comprehensive guides for Divine Beasts, shrines, and secrets',
    icon: GiTreasureMap,
    color: 'from-green-500/20 to-transparent',
    sections: [
      {
        name: 'Main Quest Guide',
        url: '/guides/botw/main-quest',
        isExternal: false
      },
      {
        name: 'Divine Beasts',
        url: 'https://www.ign.com/wikis/the-legend-of-zelda-breath-of-the-wild/Divine_Beasts',
        isExternal: true
      },
      {
        name: 'Shrine Locations',
        url: 'https://www.zeldadungeon.net/breath-of-the-wild-shrine-map/',
        isExternal: true
      },
      {
        name: 'Korok Seeds',
        url: 'https://www.zeldadungeon.net/breath-of-the-wild-interactive-map/',
        isExternal: true
      }
    ]
  },
  {
    id: 'classic',
    title: 'Classic Games',
    description: 'Guides for the legendary titles that shaped the series',
    icon: GiBookmarklet,
    color: 'from-purple-500/20 to-transparent',
    sections: [
      {
        name: 'Ocarina of Time',
        url: '/guides/classic/ocarina-of-time',
        isExternal: false
      },
      {
        name: "Majora's Mask",
        url: '/guides/classic/majoras-mask',
        isExternal: false
      },
      {
        name: 'Wind Waker',
        url: 'https://www.zeldadungeon.net/wind-waker-walkthrough/',
        isExternal: true
      },
      {
        name: 'Twilight Princess',
        url: 'https://www.ign.com/wikis/the-legend-of-zelda-twilight-princess/',
        isExternal: true
      }
    ]
  },
  {
    id: '2d',
    title: '2D Adventures',
    description: 'Complete guides for the classic top-down Zelda games',
    icon: GiPuzzle,
    color: 'from-red-500/20 to-transparent',
    sections: [
      {
        name: 'A Link to the Past',
        url: '/guides/2d/link-to-the-past',
        isExternal: false
      },
      {
        name: "Link's Awakening",
        url: 'https://www.zeldadungeon.net/links-awakening-switch-walkthrough/',
        isExternal: true
      },
      {
        name: 'Minish Cap',
        url: '/guides/2d/minish-cap',
        isExternal: false
      },
      {
        name: 'Oracle Games',
        url: 'https://www.zeldadungeon.net/oracle-of-seasons-walkthrough/',
        isExternal: true
      }
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
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Game Guides
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Comprehensive walkthroughs and strategies for every Zelda adventure
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <div key={guide.id} className="group">
                <div className={`zelda-card hover:scale-[1.02] transition-all duration-300
                              bg-[rgba(var(--primary),0.3)] backdrop-blur-sm
                              border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]`}
                >
                  <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${guide.color} opacity-20`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-[rgba(var(--gold),0.1)] rounded-lg">
                        <Icon className="text-4xl text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[rgb(var(--gold))]">{guide.title}</h2>
                        <span className="text-sm text-[rgb(var(--muted))]">{guide.sections.length} Sections</span>
                      </div>
                    </div>
                    <p className="text-[rgb(var(--muted))] mb-6">{guide.description}</p>
                    
                    {/* Guide Sections */}
                    <div className="space-y-3">
                      {guide.sections.map((section, index) => (
                        section.isExternal ? (
                          <a 
                            key={index}
                            href={section.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-lg
                                     bg-[rgba(var(--primary),0.4)] hover:bg-[rgba(var(--primary),0.6)]
                                     border border-[rgba(var(--gold),0.1)] hover:border-[rgba(var(--gold),0.3)]
                                     group/item transition-all duration-300"
                          >
                            <span className="text-[rgb(var(--muted))] group-hover/item:text-[rgb(var(--gold))]
                                           transition-colors duration-300 flex items-center gap-2">
                              {section.name}
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </span>
                            <span className="text-[rgb(var(--gold))] opacity-0 group-hover/item:opacity-100
                                           transform translate-x-2 group-hover/item:translate-x-0
                                           transition-all duration-300">
                              →
                            </span>
                          </a>
                        ) : (
                    <Link 
                            key={index}
                            href={section.url}
                            className="flex items-center justify-between p-3 rounded-lg
                                     bg-[rgba(var(--primary),0.4)] hover:bg-[rgba(var(--primary),0.6)]
                                     border border-[rgba(var(--gold),0.1)] hover:border-[rgba(var(--gold),0.3)]
                                     group/item transition-all duration-300"
                          >
                            <span className="text-[rgb(var(--muted))] group-hover/item:text-[rgb(var(--gold))]
                                           transition-colors duration-300">
                              {section.name}
                            </span>
                            <span className="text-[rgb(var(--gold))] opacity-0 group-hover/item:opacity-100
                                           transform translate-x-2 group-hover/item:translate-x-0
                                           transition-all duration-300">
                              →
                            </span>
                    </Link>
                        )
          ))}
        </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 flex justify-between items-center">
            <Link 
            href="/"
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors hover:-translate-x-1 transform duration-300"
          >
            ← Back to Home
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