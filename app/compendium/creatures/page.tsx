'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiRabbit } from 'react-icons/gi';

interface Creature {
  id: string;
  name: string;
  description: string;
  image: string;
  cooking_effect?: string;
  hearts_recovered?: number;
  locations?: string[];
}

export default function CreaturesPage() {
  const [creatures, setCreatures] = useState<Creature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

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
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures');
        const data = await response.json();
        
        const processedCreatures = data.data.map((creature: any) => ({
          id: creature.id.toString(),
          name: creature.name.charAt(0).toUpperCase() + creature.name.slice(1).replace(/-/g, ' '),
          description: creature.description,
          image: creature.image,
          cooking_effect: creature.cooking_effect,
          hearts_recovered: creature.hearts_recovered,
          locations: creature.common_locations
        }));

        setCreatures(processedCreatures);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load creature data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCreatures = creatures.filter(creature => {
    const searchLower = debouncedSearch.toLowerCase();
    return (
      searchLower === '' ||
      creature.name.toLowerCase().includes(searchLower) ||
      creature.description.toLowerCase().includes(searchLower) ||
      creature.cooking_effect?.toLowerCase().includes(searchLower) ||
      creature.locations?.some(location => 
        location.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiRabbit className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Creatures of Hyrule
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Wildlife and friendly beings found throughout the realm
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, description, effects, or location..."
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
            <div className="mt-2 text-sm text-[rgb(var(--muted))]">
              Found {filteredCreatures.length} results
            </div>
          )}
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
            {filteredCreatures.map((creature) => (
              <div 
                key={creature.id} 
                className="zelda-card hover:scale-[1.02] transition-all duration-300
                         bg-[rgba(var(--primary),0.3)] backdrop-blur-sm"
              >
                {creature.image && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-black/20">
                    <Image
                      src={creature.image}
                      alt={creature.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[rgba(var(--gold),0.1)] rounded-lg">
                    <GiRabbit className="text-2xl text-[rgb(var(--gold))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[rgb(var(--gold))]">{creature.name}</h3>
                </div>
                <p className="text-sm text-[rgb(var(--muted))] mb-4 leading-relaxed">{creature.description}</p>
                
                {/* Creature Details */}
                <div className="space-y-4 border-t border-[rgba(var(--gold),0.2)] pt-4">
                  {creature.cooking_effect && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Cooking Effect:</h4>
                      <span className="text-sm text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.3)] rounded">
                        {creature.cooking_effect}
                      </span>
                    </div>
                  )}
                  
                  {creature.hearts_recovered !== undefined && creature.hearts_recovered > 0 && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Hearts Recovered:</h4>
                      <span className="text-sm text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.3)] rounded">
                        {creature.hearts_recovered}
                      </span>
                    </div>
                  )}
                  
                  {creature.locations && creature.locations.length > 0 && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Locations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {creature.locations.map((location, idx) => (
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