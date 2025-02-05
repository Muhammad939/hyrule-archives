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

export default function SecretNews() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);

  // Konami code sequence
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newKonami = [...konami, event.key];
      if (newKonami.length > konamiCode.length) {
        newKonami.shift();
      }
      setKonami(newKonami);

      if (newKonami.join(',') === konamiCode.join(',')) {
        setVisible(true);
        setKonami([]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konami]);

  useEffect(() => {
    if (!visible) return;

    const fetchNews = async () => {
      setLoading(true);
      try {
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
    const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#2a1f3d] rounded-lg shadow-xl p-6 animate-fadeIn max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#ffd700] zelda-title flex items-center">
            <FaNewspaper className="mr-3" />
            Secret News Archive
          </h2>
          <button 
            onClick={() => setVisible(false)}
            className="text-[#4a9eff] hover:text-[#ffd700] transition-colors"
          >
            Close
          </button>
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
    </div>
  );
} 