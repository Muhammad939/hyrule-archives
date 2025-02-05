'use client';

import { useState, useEffect } from 'react';
import { FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa';

const NEWS_SOURCES = [
  {
    name: 'Nintendo Life',
    url: 'https://www.nintendolife.com/zelda',
    feed: 'https://www.nintendolife.com/feeds/latest'
  },
  {
    name: 'IGN - Zelda',
    url: 'https://www.ign.com/zelda',
    feed: 'https://www.ign.com/feed/articles'
  },
  {
    name: 'Nintendo Everything',
    url: 'https://nintendoeverything.com/category/news/',
    feed: 'https://nintendoeverything.com/feed'
  }
];

export default function ZeldaNews() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // For demo purposes, showing static news while RSS implementation would be needed
        setNews([
          {
            title: "Tears of the Kingdom Surpasses 20 Million Sales",
            date: new Date().toLocaleDateString(),
            source: "Nintendo Life",
            url: "https://www.nintendolife.com/news/2024/02/zelda-tears-of-the-kingdom-surpasses-20-million-sales",
            excerpt: "The Legend of Zelda: Tears of the Kingdom continues to break records..."
          },
          {
            title: "New Zelda Animated Series in Development",
            date: new Date().toLocaleDateString(),
            source: "IGN",
            url: "https://www.ign.com/articles/the-legend-of-zelda-live-action-series-netflix",
            excerpt: "Nintendo partners with major studio for new animated adaptation..."
          },
          {
            title: "TOTK Named Game of the Year",
            date: new Date().toLocaleDateString(),
            source: "Nintendo Everything",
            url: "https://nintendoeverything.com/zelda-tears-of-the-kingdom-wins-game-of-the-year/",
            excerpt: "The latest Zelda title receives multiple awards at ceremony..."
          }
        ]);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      setLoading(false);
    };

    fetchNews();
    // Refresh news every 24 hours
    const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#2a1f3d] rounded-lg shadow-xl p-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#ffd700] zelda-title flex items-center">
          <FaNewspaper className="mr-3" />
          Latest Zelda News
        </h2>
        <div className="flex space-x-2">
          {NEWS_SOURCES.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#4a9eff] hover:text-[#ffd700] transition-colors"
            >
              {source.name}
            </a>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffd700]"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#1a0f2b] rounded-lg p-4 hover:bg-[#4a9eff]/10 
                       transition-all duration-300 hover:transform hover:translate-x-2 group"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-[#8eb6e3] group-hover:text-[#ffd700] 
                             transition-colors flex-grow">{item.title}</h3>
                <FaExternalLinkAlt className="text-[#4a9eff] opacity-0 group-hover:opacity-100 
                                          transition-opacity ml-2 flex-shrink-0" />
              </div>
              <p className="text-[#8eb6e3]/70 mt-2 text-sm">{item.excerpt}</p>
              <div className="flex justify-between items-center mt-2 text-xs text-[#4a9eff]">
                <span>{item.source}</span>
                <span>{item.date}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
} 