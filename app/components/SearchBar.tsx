'use client';

import { useState } from 'react';
import { FaSearch, FaGamepad, FaBook, FaNewspaper, FaQuestionCircle } from 'react-icons/fa';
import { GiTriforce } from 'react-icons/gi';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = [
    // Games & Guides
    { 
      title: 'Tears of the Kingdom Guide',
      category: 'Guides',
      href: 'https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom',
      icon: <FaGamepad className="text-[#ffd700]" />
    },
    { 
      title: 'BOTW Shrine Locations',
      category: 'Guides',
      href: 'https://www.ign.com/wikis/the-legend-of-zelda-breath-of-the-wild/Shrines',
      icon: <FaGamepad className="text-[#ffd700]" />
    },
    // News & Updates
    { 
      title: 'Latest Zelda News',
      category: 'News',
      href: 'https://www.nintendolife.com/zelda',
      icon: <FaNewspaper className="text-[#4a9eff]" />
    },
    { 
      title: 'Nintendo Direct Updates',
      category: 'News',
      href: 'https://www.nintendo.com/nintendo-direct/archive/',
      icon: <FaNewspaper className="text-[#4a9eff]" />
    },
    // Lore & Timeline
    { 
      title: 'Official Timeline',
      category: 'Timeline',
      href: 'https://zelda.nintendo.com/about/',
      icon: <GiTriforce className="text-[#ffd700]" />
    },
    { 
      title: 'Hyrule Historia',
      category: 'Lore',
      href: 'https://www.amazon.com/Legend-Zelda-Hyrule-Historia/dp/1616550414',
      icon: <FaBook className="text-[#ffd700]" />
    },
    // Community & Theories
    { 
      title: 'Zelda Theory Hub',
      category: 'Theories',
      href: 'https://www.reddit.com/r/zeldaconspiracies/',
      icon: <FaQuestionCircle className="text-[#4a9eff]" />
    }
  ].filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative group">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Hyrule Archives..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full px-4 py-2 pl-10 bg-[#2a1f3d] border border-[#4a9eff]/30 rounded-lg 
                   text-[#8eb6e3] placeholder-[#8eb6e3]/50 focus:outline-none focus:border-[#ffd700]
                   transition-all duration-300 hover:border-[#ffd700]/50 shadow-lg hover:shadow-[#ffd700]/20"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8eb6e3]
                          group-hover:text-[#ffd700] transition-colors duration-300" />
      </div>

      {isOpen && searchTerm && (
        <div className="absolute w-full mt-2 bg-[#2a1f3d] border border-[#4a9eff]/30 rounded-lg shadow-xl
                      backdrop-blur-lg bg-opacity-95 animate-fadeIn z-50">
          {searchResults.length > 0 ? (
            <ul className="divide-y divide-[#4a9eff]/10">
              {searchResults.map((result, index) => (
                <li key={index} className="hover:bg-[#4a9eff]/10 transition-colors duration-200">
                  <a
                    href={result.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-[#8eb6e3] group/item"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3 opacity-75 group-hover/item:opacity-100 transition-opacity">
                      {result.icon}
                    </span>
                    <div>
                      <span className="font-medium block group-hover/item:text-[#ffd700] transition-colors">
                        {result.title}
                      </span>
                      <span className="text-sm text-[#8eb6e3]/70 group-hover/item:text-[#8eb6e3]">
                        in {result.category}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-[#8eb6e3] flex items-center">
              <FaSearch className="mr-2 opacity-50" />
              <span>No results found</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 