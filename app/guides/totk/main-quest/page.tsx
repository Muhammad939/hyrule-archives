'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GiSwordsPower, GiScrollUnfurled, GiMountainRoad } from 'react-icons/gi';

const mainQuests = [
  {
    chapter: "Chapter 1: The Beginning",
    quests: [
      {
        title: "Crisis at Lookout Landing",
        description: "Your journey begins at the Great Sky Island tutorial area before heading to Lookout Landing.",
        objectives: [
          "Complete the Great Sky Island tutorial",
          "Learn the basic abilities (Ultrahand, Fuse, Ascend)",
          "Meet with Purah at Lookout Landing",
          "Receive the Purah Pad"
        ],
        rewards: ["Purah Pad", "Basic abilities"],
        location: "Great Sky Island → Lookout Landing",
        tips: "Take time to complete all tutorials on Great Sky Island - they're crucial for understanding the game's mechanics.",
        recommendedLevel: "Starting area"
      }
    ]
  },
  {
    chapter: "Chapter 2: Regional Investigation",
    description: "This is the recommended order for visiting regions based on difficulty and story progression.",
    quests: [
      {
        title: "1. Rito Village - Wind Temple",
        description: "Begin with the Rito region as it provides the most straightforward challenges and useful rewards.",
        objectives: [
          "Reach Rito Village",
          "Meet Tulin",
          "Investigate the Wind Temple",
          "Help restore power to the village"
        ],
        rewards: [
          "Tulin's company for aerial investigations",
          "Enhanced cold resistance gear",
          "Access to aerial vantage points"
        ],
        location: "Tabantha Frontier",
        tips: "Get the Warm Doublet before heading to Rito Village. The aerial advantages make future exploration easier.",
        recommendedLevel: "2-3 hearts, basic stamina"
      },
      {
        title: "2. Zora's Domain - Water Temple",
        description: "The Zora region is best tackled second due to moderate difficulty and valuable rewards.",
        objectives: [
          "Navigate to Zora's Domain",
          "Meet with King Sidon",
          "Investigate underwater anomalies",
          "Clear the Water Temple"
        ],
        rewards: [
          "Zora Armor",
          "Enhanced swimming abilities",
          "Access to underwater areas"
        ],
        location: "Lanayru Region",
        tips: "Bring shock arrows and cold resistance gear. The Zora Armor is crucial for water exploration.",
        recommendedLevel: "4-6 hearts, 1.2 stamina wheels"
      },
      {
        title: "3. Goron City - Fire Temple",
        description: "The Goron region presents significant challenges but offers crucial rewards.",
        objectives: [
          "Reach Goron City",
          "Meet Yunobo",
          "Investigate Death Mountain",
          "Clear the Fire Temple"
        ],
        rewards: [
          "Heat resistance gear",
          "Mining opportunities",
          "Access to valuable resources"
        ],
        location: "Death Mountain",
        tips: "Stock up on fireproof elixirs or get the Flamebreaker armor first. Mining provides valuable resources for upgrades.",
        recommendedLevel: "6-8 hearts, 1.4 stamina wheels"
      },
      {
        title: "4. Gerudo Town - Lightning Temple",
        description: "The Gerudo region should be tackled last among the four main regions due to its challenges.",
        objectives: [
          "Cross the Gerudo Desert",
          "Enter Gerudo Town (requires disguise)",
          "Meet Riju",
          "Clear the Lightning Temple"
        ],
        rewards: [
          "Thunder Helm",
          "Sand/Lightning protection",
          "Access to valuable desert resources"
        ],
        location: "Gerudo Desert",
        tips: "Get heat resistance gear and hydrating items. The sandstorms can be challenging without proper preparation.",
        recommendedLevel: "8-10 hearts, 1.6 stamina wheels"
      }
    ]
  },
  {
    chapter: "Chapter 3: The Depths",
    quests: [
      {
        title: "Exploring the Depths",
        description: "A crucial part of your journey involves exploring the underground realm.",
        objectives: [
          "Find Depth Wells",
          "Collect Light Roots",
          "Discover Zonai devices",
          "Map the underground realm"
        ],
        rewards: [
          "Valuable resources",
          "Ancient technology",
          "Zonai capsules",
          "Crucial story elements"
        ],
        location: "The Depths (Underground)",
        tips: "Always carry lots of Brightbloom Seeds and maintain a good supply of light sources. Create markers on your map for important locations.",
        recommendedLevel: "10+ hearts, 2 stamina wheels"
      }
    ]
  },
  {
    chapter: "Chapter 4: Final Preparations",
    quests: [
      {
        title: "Preparing for Ganondorf",
        description: "Final preparations before confronting the Demon King.",
        objectives: [
          "Collect all Dragon Tears",
          "Upgrade key armor sets",
          "Stock up on resources",
          "Master key abilities"
        ],
        rewards: ["Access to final battle"],
        location: "Various locations",
        tips: "Recommended inventory before final battle: Full stamina wheel, 15+ hearts, upgraded armor, and plenty of healing items.",
        recommendedLevel: "13+ hearts, full stamina"
      }
    ]
  }
];

export default function MainQuestPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiSwordsPower className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Main Quest Guide
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Complete walkthrough with recommended progression path
          </p>
        </div>

        {/* Quest Guide */}
        <div className="space-y-12">
          {mainQuests.map((chapter, chapterIndex) => (
            <div 
              key={chapterIndex}
              className="zelda-card bg-[rgba(var(--primary),0.3)] backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-[rgb(var(--gold))] mb-6 flex items-center gap-3">
                <GiScrollUnfurled className="text-3xl" />
                {chapter.chapter}
              </h2>
              
              {chapter.description && (
                <p className="text-[rgb(var(--muted))] mb-6 italic">
                  {chapter.description}
                </p>
              )}
              
              <div className="space-y-8">
                {chapter.quests.map((quest, questIndex) => (
                  <div 
                    key={questIndex}
                    className="border-l-2 border-[rgba(var(--gold),0.3)] pl-6 space-y-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-[rgb(var(--gold))]">
                        {quest.title}
                      </h3>
                      {quest.recommendedLevel && (
                        <span className="text-sm px-3 py-1 rounded-full bg-[rgba(var(--gold),0.1)] text-[rgb(var(--gold))]">
                          {quest.recommendedLevel}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-[rgb(var(--muted))] leading-relaxed">
                      {quest.description}
                    </p>
                    
                    {/* Objectives */}
                    <div>
                      <h4 className="font-bold text-[rgb(var(--foreground))] mb-2">Objectives:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {quest.objectives.map((objective, index) => (
                          <li 
                            key={index}
                            className="text-[rgb(var(--muted))]"
                          >
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rewards */}
                    <div>
                      <h4 className="font-bold text-[rgb(var(--foreground))] mb-2">Rewards:</h4>
                      <div className="flex flex-wrap gap-2">
                        {quest.rewards.map((reward, index) => (
                          <span 
                            key={index}
                            className="text-sm text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.4)] rounded"
                          >
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Location & Tips */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-[rgb(var(--foreground))] mb-2">
                          <GiMountainRoad className="inline-block mr-2" />
                          Location:
                        </h4>
                        <p className="text-[rgb(var(--muted))]">{quest.location}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[rgb(var(--foreground))] mb-2">Tips:</h4>
                        <p className="text-[rgb(var(--muted))]">{quest.tips}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 flex justify-between items-center">
          <Link 
            href="/guides/totk"
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors hover:-translate-x-1 transform duration-300"
          >
            ← Back to TOTK Guides
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