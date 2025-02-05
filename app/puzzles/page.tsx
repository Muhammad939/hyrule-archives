'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GiTriforce } from 'react-icons/gi';

export default function Puzzles() {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the answer to your backend
  };

  return (
    <div className="min-h-screen bg-[#f5e6d3] bg-opacity-90 p-8">
      <Link 
        href="/"
        className="inline-block mb-8 text-green-800 hover:text-green-600 transition-colors"
      >
        ← Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-600 mb-8 font-[Cinzel] text-center">
          Weekly Puzzle Challenge
        </h1>

        <div className="bg-white/80 rounded-lg p-8 shadow-lg mb-8">
          <div className="flex justify-center mb-6">
            <GiTriforce className="text-5xl text-yellow-600" />
          </div>

          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
            The Ancient Riddle
          </h2>

          <p className="text-gray-700 mb-6 text-center">
            "In Hyrule's realm, three golden lights,<br />
            Each piece a power, divine and bright.<br />
            Power, Wisdom, Courage true,<br />
            Which piece would best describe you?"
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-green-800 mb-2">Hints:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Think about the characteristics of each Triforce piece</li>
              <li>Consider which trait you value most in your adventures</li>
              <li>There is no wrong answer, but your reasoning matters</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="answer"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Answer:
              </label>
              <textarea
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={4}
                placeholder="Explain your choice and reasoning..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit Answer
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
              Thank you for your submission! Your answer has been recorded.
            </div>
          )}
        </div>

        <div className="text-center text-gray-600">
          <p>New puzzles are released every Monday at 12:00 PM EST.</p>
          <p className="mt-2">
            Previous winners will be announced in our{' '}
            <Link href="/newsletter" className="text-green-800 hover:underline">
              weekly newsletter
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
} 