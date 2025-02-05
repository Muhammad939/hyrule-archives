import Link from 'next/link';
import { FaNewspaper } from 'react-icons/fa';

const newsItems = [
  {
    title: "Tears of the Kingdom Breaks Sales Records",
    date: "2024-02-15",
    excerpt: "The Legend of Zelda: Tears of the Kingdom continues to break sales records worldwide...",
    category: "Game News",
    imageUrl: "/news/totk-sales.jpg"
  },
  {
    title: "New Zelda Animated Series Announced",
    date: "2024-02-10",
    excerpt: "Nintendo partners with major studio to create new animated series based on The Legend of Zelda...",
    category: "Entertainment",
    imageUrl: "/news/zelda-animated.jpg"
  },
  {
    title: "Classic Zelda Games Coming to Switch Online",
    date: "2024-02-05",
    excerpt: "Nintendo announces more classic Zelda titles coming to Nintendo Switch Online service...",
    category: "Game News",
    imageUrl: "/news/switch-online.jpg"
  }
];

export default function News() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] p-8">
      <Link href="/" className="inline-block mb-8 text-green-800 hover:text-green-600 transition-colors">
        ← Back to Home
      </Link>
      
      <header className="text-center mb-12">
        <FaNewspaper className="mx-auto text-6xl text-[#ffd700]" />
        <h1 className="text-4xl font-bold text-green-800 mb-4 zelda-title">Latest Zelda News</h1>
        <p className="text-lg text-green-600">Stay updated with the latest news from Hyrule and beyond</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <div className="h-48 w-full md:w-48 bg-[#2a1f3d]"></div>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-[#4a9eff] font-semibold">
                    {item.category}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-green-800">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="mx-2 text-gray-500">•</span>
                    <Link
                      href="#"
                      className="text-[#4a9eff] hover:text-[#ffd700] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 