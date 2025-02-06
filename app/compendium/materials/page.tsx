'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiCrystalGrowth } from 'react-icons/gi';

interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  cooking_effect?: string;
  hearts_recovered?: number;
  category: string;
  locations?: string[];
  common_locations?: string[];
}

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Debug log
        
        if (!data.data || !Array.isArray(data.data)) {
          throw new Error('Invalid data format received from API');
        }

        const processedMaterials = data.data.map((material: any) => {
          console.log('Processing material:', material); // Debug log
          return {
            id: material.id.toString(),
            name: material.name.charAt(0).toUpperCase() + material.name.slice(1).replace(/-/g, ' '),
            description: material.description || 'No description available',
            image: material.image || '',
            cooking_effect: material.cooking_effect || null,
            hearts_recovered: material.hearts_recovered || null,
            category: material.category || 'Other',
            locations: material.common_locations || []
          };
        });

        console.log('Processed Materials:', processedMaterials); // Debug log

        if (processedMaterials.length === 0) {
          throw new Error('No materials data found');
        }

        setMaterials(processedMaterials);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load materials data. The API might be temporarily unavailable. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get unique categories
  const categories = ['all'];
  const categorySet = new Set<string>();
  materials.forEach(item => {
    if (item.category && !categorySet.has(item.category)) {
      categorySet.add(item.category);
      categories.push(item.category);
    }
  });

  const filteredMaterials = materials.filter(item =>
    (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (categoryFilter === 'all' || item.category === categoryFilter)
  );

  console.log('Filtered Materials:', filteredMaterials); // Debug log

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiCrystalGrowth className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Materials of Hyrule
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Resources, ingredients, and treasures found throughout the realm
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search materials..."
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
            {filteredMaterials.map((item) => (
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
                      loading="lazy"
                      onError={(e: any) => {
                        console.error('Image failed to load:', item.image);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[rgba(var(--gold),0.1)] rounded-lg">
                    <GiCrystalGrowth className="text-2xl text-[rgb(var(--gold))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(var(--gold))]">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[rgb(var(--muted))]">{item.category}</span>
                      {item.hearts_recovered && (
                        <>
                          <span className="text-xs text-[rgb(var(--gold))]">•</span>
                          <span className="text-xs text-[rgb(var(--muted))]">Hearts: {item.hearts_recovered}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[rgb(var(--muted))] mb-4 leading-relaxed">{item.description}</p>
                
                {/* Item Details */}
                <div className="space-y-4 border-t border-[rgba(var(--gold),0.2)] pt-4">
                  {item.cooking_effect && (
                    <div>
                      <h4 className="font-bold text-[rgb(var(--gold))] mb-2">Cooking Effect:</h4>
                      <span className="text-sm text-[rgb(var(--muted))] p-2 bg-[rgba(var(--primary),0.3)] rounded">
                        {item.cooking_effect}
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