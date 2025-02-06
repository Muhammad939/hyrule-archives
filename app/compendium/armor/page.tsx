'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiArmorVest } from 'react-icons/gi';

interface Armor {
  id: string;
  name: string;
  description: string;
  image: string;
  defense?: number;
  category?: string;
  locations?: string[];
}

export default function ArmorPage() {
  const [armor, setArmor] = useState<Armor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/armor');
        const data = await response.json();
        
        const processedArmor = data.data.map((item: any) => ({
          id: item.id.toString(),
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1).replace(/-/g, ' '),
          description: item.description,
          image: item.image,
          defense: item.defense,
          category: item.category,
          locations: item.common_locations
        }));

        setArmor(processedArmor);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load armor data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = ['all', ...new Set(armor.map(item => item.category || ''))];

  const filteredArmor = armor.filter(item =>
    (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (categoryFilter === 'all' || item.category === categoryFilter)
  );

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiArmorVest className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Armor of Hyrule
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Protective gear and special clothing
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search armor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-lg bg-[rgba(var(--primary),0.3)] 
                     border border-[rgba(var(--gold),0.2)] text-[rgb(var(--foreground))]
                     focus:border-[rgb(var(--gold))] focus:outline-none"
          />
          
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
            {filteredArmor.map((item) => (
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
                    <GiArmorVest className="text-2xl text-[rgb(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(var(--gold))]">{item.name}</h3>
                    <span className="text-xs text-[rgb(var(--muted))]">{item.category}</span>
                  </div>
                </div>
                <p className="text-sm text-[rgb(var(--muted))] mb-4 leading-relaxed">{item.description}</p>
                
                {/* Armor Details */}
                <div className="space-y-4 border-t border-[rgba(var(--gold),0.2)] pt-4">
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