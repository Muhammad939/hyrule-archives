'use client';

import Link from 'next/link';
import { GiScrollUnfurled, GiQuillInk } from 'react-icons/gi';

const featuredTheory = {
  title: "The Connection Between Ancient Zonai and the Twili",
  author: "HyruleScholar",
  date: "March 2024",
  content: `
    The ancient Zonai civilization from Tears of the Kingdom shares many 
    architectural and technological similarities with the Twili from Twilight Princess. 
    Both civilizations:
    
    1. Possessed advanced technology beyond their time
    2. Mysteriously vanished from history
    3. Left behind structures with similar geometric patterns
    4. Had a strong connection to ancient magic
    
    Could the Zonai have been the ancestors of the Twili, banished to the Twilight Realm?
    Or perhaps they were parallel civilizations, sharing knowledge across dimensions?
  `
};

const relatedTheories = [
  {
    title: "The True Identity of the Wind Fish",
    excerpt: "Exploring the connection between Link's Awakening and ancient Hyrulean deities...",
    author: "DreamIsland",
    likes: 342
  },
  {
    title: "Time Travel Paradoxes in Ocarina of Time",
    excerpt: "A detailed analysis of the timeline splits and their implications...",
    author: "TimeKeeper",
    likes: 287
  },
  {
    title: "The Secret of the Happy Mask Salesman",
    excerpt: "Evidence suggesting his connection to the ancient ones...",
    author: "MaskCollector",
    likes: 256
  }
];

export default function Theories() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] bg-opacity-90 p-8">
      <Link 
        href="/"
        className="inline-block mb-8 text-green-800 hover:text-green-600 transition-colors"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-600 mb-8 font-[Cinzel] text-center">
          Fan Theories
        </h1>

        {/* Featured Theory */}
        <div className="bg-white/80 rounded-lg p-8 shadow-lg mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <GiScrollUnfurled className="text-2xl text-green-800" />
              <h2 className="text-2xl font-bold text-green-800">
                Featured Theory of the Month
              </h2>
            </div>
            <span className="text-gray-600">{featuredTheory.date}</span>
          </div>

          <h3 className="text-xl font-bold text-yellow-600 mb-4">
            {featuredTheory.title}
          </h3>
          
          <div className="text-gray-700 mb-4 whitespace-pre-line">
            {featuredTheory.content}
          </div>

          <div className="flex items-center justify-between text-gray-600">
            <span>By {featuredTheory.author}</span>
            <button className="text-green-800 hover:text-green-600 transition-colors">
              Share Theory
            </button>
          </div>
        </div>

        {/* Related Theories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {relatedTheories.map((theory, index) => (
            <div 
              key={index}
              className="bg-white/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-green-800 mb-2">
                {theory.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {theory.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">By {theory.author}</span>
                <span className="text-yellow-600">{theory.likes} likes</span>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Theory CTA */}
        <div className="bg-green-800 text-white rounded-lg p-8 text-center">
          <GiQuillInk className="text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Have Your Own Theory?</h2>
          <p className="mb-6">
            Share your insights with fellow theorists and contribute to unraveling 
            the mysteries of Hyrule.
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Submit Your Theory
          </button>
        </div>
      </div>
    </div>
  );
} 