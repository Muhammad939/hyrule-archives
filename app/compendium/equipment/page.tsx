'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiSwordsPower } from 'react-icons/gi';

interface Equipment {
  id: string;
  name: string;
  description: string;
  image: string;
  attack?: number;
  defense?: number;
  category?: string;
  locations?: string[];
  games: string[];
}

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment');
        const data = await response.json();
        
        const processedEquipment = data.data.map((item: any) => {
          // List of items that appear in both games
          const dualGameItems = [
            // Iconic Equipment
            'master sword',
            'hylian shield',
            'bow of light',
            
            // Basic Weapons
            'tree branch',
            'torch',
            'wooden stick',
            'rusty sword',
            'rusty shield',
            'rusty claymore',
            'rusty broadsword',
            
            // Bows
            'wooden bow',
            'ancient bow',
            'royal bow',
            'knight\'s bow',
            'traveler\'s bow',
            
            // Shields
            'wooden shield',
            'royal shield',
            'knight\'s shield',
            'traveler\'s shield',
            
            // Swords & Other Weapons
            'royal broadsword',
            'royal claymore',
            'knight\'s broadsword',
            'knight\'s claymore',
            'traveler\'s sword',
            'traveler\'s claymore',
            'wooden stick',
            'boomerang',
            'throwing spear',
            'wooden spear',
            
            // Special Weapons
            'ancient sword',
            'ancient spear',
            'ancient shield',
            'guardian sword',
            'guardian spear',
            'guardian shield'
          ];

          return {
            id: item.id.toString(),
            name: item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-/g, ' '),
            description: item.description,
            image: item.image,
            attack: item.attack,
            defense: item.defense,
            category: item.category,
            locations: item.common_locations,
            games: dualGameItems.includes(item.name) 
              ? ['Breath of the Wild', 'Tears of the Kingdom']
              : ['Breath of the Wild']
          };
        });

        setEquipment(processedEquipment);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load equipment data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get unique categories
  const categories = ['all'];
  const categorySet = new Set<string>();
  equipment.forEach(item => {
    if (item.category && !categorySet.has(item.category)) {
      categorySet.add(item.category);
      categories.push(item.category);
    }
  });

  const filteredEquipment = equipment.filter(item => {
    const searchLower = debouncedSearch.toLowerCase();
    const matchesSearch = searchLower === '' ||
      item.name.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.category?.toLowerCase().includes(searchLower) ||
      item.locations?.some(location => location.toLowerCase().includes(searchLower)) ||
      item.games.some(game => game.toLowerCase().includes(searchLower));
    
    return matchesSearch && (categoryFilter === 'all' || item.category === categoryFilter);
  });

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiSwordsPower className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Equipment of Hyrule
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Weapons, bows, and shields used in combat
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, description, category, location, or game..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 rounded-lg bg-[rgba(var(--primary),0.3)] 
                       border border-[rgba(var(--gold),0.2)] text-[rgb(var(--foreground))]
                       focus:border-[rgb(var(--gold))] focus:outline-none
                       transition-all duration-300"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[rgb(var(--muted))]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {searchTerm && (
            <div className="text-sm text-[rgb(var(--muted))]">
              Found {filteredEquipment.length} results
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300
                          ${categoryFilter === category
                            ? 'bg-[rgba(var(--gold),0.2)] text-[rgb(var(--gold))]'
                            : 'bg-[rgba(var(--primary),0.3)] text-[rgb(var(--muted))] hover:text-[rgb(var(--gold))]'
                          }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
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
            {filteredEquipment.map((item) => (
              <div 
                key={item.id} 
                className="zelda-card hover:scale-[1.02] transition-all duration-300
                         bg-[rgba(var(--primary),0.3)] backdrop-blur-sm"
              >
                {item.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-black/20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[rgba(var(--gold),0.1)] rounded-lg">
                    <GiSwordsPower className="text-2xl text-[rgb(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(var(--gold))]">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[rgb(var(--muted))]">{item.category}</span>
                      <span className="text-xs text-[rgb(var(--gold))]">•</span>
                      <span className="text-xs text-[rgb(var(--muted))]">
                        {item.games.join(' • ')}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[rgb(var(--muted))] mb-4 leading-relaxed">{item.description}</p>
                
                {/* Equipment Details */}
                <div className="space-y-4 border-t border-[rgba(var(--gold),0.2)] pt-4">
                  {item.attack !== undefined && item.attack > 0 && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Attack Power:</h4>
                      <span className="text-sm text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.3)] rounded">
                        {item.attack}
                      </span>
                    </div>
                  )}
                  
                  {item.defense !== undefined && item.defense > 0 && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Defense:</h4>
                      <span className="text-sm text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.3)] rounded">
                        {item.defense}
                      </span>
                    </div>
                  )}
                  
                  {item.locations && item.locations.length > 0 && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Locations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.locations.map((location, idx) => (
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