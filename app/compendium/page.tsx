'use client';

import Link from 'next/link';
import { GiSpellBook, GiMonsterGrasp, GiSwordsPower, GiRabbit, GiArmorVest } from 'react-icons/gi';

const categories = [
  {
    id: 'monsters',
    title: 'Monsters',
    description: 'Dangerous creatures that roam the lands of Hyrule',
    icon: GiMonsterGrasp,
    color: 'from-red-500/20 to-transparent',
    count: '80+ Entries'
  },
  {
    id: 'creatures',
    title: 'Creatures',
    description: 'Wildlife and friendly beings found throughout the realm',
    icon: GiRabbit,
    color: 'from-green-500/20 to-transparent',
    count: '50+ Entries'
  },
  {
    id: 'equipment',
    title: 'Equipment',
    description: 'Weapons, bows, and shields used in combat',
    icon: GiSwordsPower,
    color: 'from-blue-500/20 to-transparent',
    count: '100+ Entries'
  },
  {
    id: 'armor',
    title: 'Armor',
    description: 'Protective gear and special clothing',
    icon: GiArmorVest,
    color: 'from-purple-500/20 to-transparent',
    count: '40+ Entries'
  }
];

export default function CompendiumPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiSpellBook className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Hyrule Compendium
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Discover the creatures and equipment of the Legend of Zelda
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.id}
                href={`/compendium/${category.id}`}
                className="group relative overflow-hidden"
              >
                <div className={`zelda-card hover:scale-[1.02] transition-all duration-300
                              bg-[rgba(var(--primary),0.3)] backdrop-blur-sm
                              border border-[rgba(var(--gold),0.2)] hover:border-[rgba(var(--gold),0.5)]`}
                >
                  <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${category.color} opacity-20`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-[rgba(var(--gold),0.1)] rounded-lg">
                        <Icon className="text-4xl text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[rgb(var(--gold))]">{category.title}</h2>
                        <span className="text-sm text-[rgb(var(--muted))]">{category.count}</span>
                      </div>
                    </div>
                    <p className="text-[rgb(var(--muted))] mb-4">{category.description}</p>
                    <div className="text-[rgb(var(--gold))] group-hover:translate-x-2 transition-transform duration-300">
                      View Collection →
                    </div>
                  </div>
                </div>
              </Link>
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