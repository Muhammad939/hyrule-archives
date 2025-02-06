'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiMonsterGrasp } from 'react-icons/gi';

interface Monster {
  id: string;
  name: string;
  description: string;
  image: string;
  drops?: string[];
  locations?: string[];
}

export default function MonstersPage() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters');
        const data = await response.json();
        
        const processedMonsters = data.data.map((monster: any) => ({
          id: monster.id.toString(),
          name: monster.name.charAt(0).toUpperCase() + monster.name.slice(1).replace(/-/g, ' '),
          description: monster.description,
          image: monster.image,
          drops: monster.drops,
          locations: monster.common_locations
        }));

        setMonsters(processedMonsters);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load monster data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredMonsters = monsters.filter(monster =>
    searchTerm === '' || monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiMonsterGrasp className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Monsters of Hyrule
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Dangerous creatures that roam the lands
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search monsters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-lg bg-[rgba(var(--primary),0.3)] 
                     border border-[rgba(var(--gold),0.2)] text-[rgb(var(--foreground))]
                     focus:border-[rgb(var(--gold))] focus:outline-none"
          />
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(var(--gold))]"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMonsters.map((monster) => (
              <div 
                key={monster.id} 
                className="zelda-card hover:scale-[1.02] transition-all duration-300
                         bg-[rgba(var(--primary),0.3)] backdrop-blur-sm"
              >
                {monster.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-black/20">
                    <Image
                      src={monster.image}
                      alt={monster.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[rgba(var(--gold),0.1)] rounded-lg">
                    <GiMonsterGrasp className="text-2xl text-[rgb(var(--gold))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[rgb(var(--gold))]">{monster.name}</h3>
                </div>
                <p className="text-sm text-[rgb(var(--muted))] mb-4 leading-relaxed">{monster.description}</p>
                
                {/* Monster Details */}
                <div className="space-y-4 border-t border-[rgba(var(--gold),0.2)] pt-4">
                  {monster.drops && monster.drops.length > 0 && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Drops:</h4>
                      <div className="flex flex-wrap gap-2">
                        {monster.drops.map((drop, idx) => (
                          <span 
                            key={idx}
                            className="text-xs text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.3)] rounded"
                          >
                            {drop}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {monster.locations && monster.locations.length > 0 && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Locations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {monster.locations.map((location, idx) => (
                          <span 
                            key={idx}
                            className="text-xs text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.3)] rounded"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="mt-16 flex justify-between items-center">
          <Link 
            href="/compendium"
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors hover:-translate-x-1 transform duration-300"
          >
            ← Back to Compendium
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