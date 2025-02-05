'use client';

import Link from 'next/link';
import { GiTimeBomb, GiSwordClash, GiScrollUnfurled, GiBirdClaw } from 'react-icons/gi';

const timelineItems = [
  {
    era: 'The Beginning',
    year: '1986',
    title: 'The Legend of Zelda',
    description: 'Link must collect the eight pieces of the Triforce of Wisdom to rescue Princess Zelda from Ganon.',
    branch: 'unified',
    icon: GiBirdClaw
  },
  {
    era: 'The Golden Era',
    year: '1991',
    title: 'A Link to the Past',
    description: 'Link travels between Light and Dark worlds to prevent Ganon\'s resurrection.',
    branch: 'unified',
    icon: GiSwordClash
  },
  {
    era: 'Era of the Hero of Time',
    year: '1998',
    title: 'Ocarina of Time',
    description: 'A young Link must travel through time to prevent Ganondorf from obtaining the complete Triforce.',
    branch: 'split',
    splitPoint: true,
    icon: GiTimeBomb
  },
  {
    era: 'Child Timeline',
    year: '2000',
    title: 'Majora\'s Mask',
    description: 'The Hero of Time ventures to Termina to stop the moon from crashing.',
    branch: 'child',
    icon: GiTimeBomb
  },
  {
    era: 'Adult Timeline',
    year: '2002',
    title: 'The Wind Waker',
    description: 'In a flooded Hyrule, a new hero must awaken the power to defeat Ganondorf.',
    branch: 'adult',
    icon: GiScrollUnfurled
  },
  {
    era: 'Downfall Timeline',
    year: '1992',
    title: 'Link\'s Awakening',
    description: 'Link finds himself on Koholint Island, where he must wake the Wind Fish.',
    branch: 'downfall',
    icon: GiSwordClash
  },
  {
    era: 'New Era',
    year: '2017',
    title: 'Breath of the Wild',
    description: 'Link awakens from a 100-year slumber to defeat Calamity Ganon and save Princess Zelda.',
    branch: 'unified',
    icon: GiBirdClaw
  },
  {
    era: 'Era of Upheaval',
    year: '2023',
    title: 'Tears of the Kingdom',
    description: 'Link must explore the mysterious Sky Islands and underground depths to uncover ancient secrets.',
    branch: 'unified',
    icon: GiBirdClaw
  }
];

export default function Timeline() {
  return (
    <div className="min-h-screen bg-[#1a0f2b] bg-opacity-95 p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hylian-pattern.png')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#ffd700] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#4a9eff] rounded-full blur-[120px] opacity-10"></div>
      </div>

      <Link 
        href="/"
        className="relative inline-block mb-8 text-[#4a9eff] hover:text-[#ffd700] transition-colors zelda-title"
      >
        ← Back to Home
      </Link>
      
      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#ffd700] mb-12 zelda-title text-center">
          The Legend of Zelda Timeline
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4a9eff]/30"></div>

          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'text-right pr-16 md:ml-auto md:mr-[50%]' : 'text-left pl-16 md:ml-[50%]'
                }`}
              >
                <div className={`
                  bg-[#2a1f3d]/90 rounded-lg p-6 shadow-lg border-2
                  transform transition-all duration-300 hover:scale-105 hover:shadow-[#4a9eff]/20
                  ${item.splitPoint ? 'border-[#ffd700] shadow-[#ffd700]/20' : 'border-[#4a9eff]/30'}
                  ${item.branch === 'child' ? 'border-[#00ffff]/30 hover:border-[#00ffff]' : ''}
                  ${item.branch === 'adult' ? 'border-[#4a9eff]/30 hover:border-[#4a9eff]' : ''}
                  ${item.branch === 'downfall' ? 'border-[#ff6b6b]/30 hover:border-[#ff6b6b]' : ''}
                `}>
                  {/* Era marker */}
                  <div className={`
                    absolute top-1/2 ${index % 2 === 0 ? '-right-12' : '-left-12'} transform -translate-y-1/2
                    w-8 h-8 rounded-full border-2
                    flex items-center justify-center
                    ${item.splitPoint ? 'bg-[#2a1f3d] border-[#ffd700]' : 'bg-[#2a1f3d] border-[#4a9eff]'}
                    ${item.branch === 'child' ? 'bg-[#2a1f3d] border-[#00ffff]' : ''}
                    ${item.branch === 'adult' ? 'bg-[#2a1f3d] border-[#4a9eff]' : ''}
                    ${item.branch === 'downfall' ? 'bg-[#2a1f3d] border-[#ff6b6b]' : ''}
                  `}>
                    <Icon className={`text-lg
                      ${item.splitPoint ? 'text-[#ffd700]' : 'text-[#4a9eff]'}
                      ${item.branch === 'child' ? 'text-[#00ffff]' : ''}
                      ${item.branch === 'adult' ? 'text-[#4a9eff]' : ''}
                      ${item.branch === 'downfall' ? 'text-[#ff6b6b]' : ''}
                    `} />
                  </div>

                  <div className="mb-2">
                    <span className="text-sm font-semibold text-[#4a9eff]/70">{item.year}</span>
                    <h3 className="text-xl font-bold text-[#ffd700] mb-1 zelda-title">{item.title}</h3>
                    <h4 className="text-md font-semibold text-[#4a9eff] zelda-title">{item.era}</h4>
                  </div>
                  <p className="text-[#8eb6e3]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-[#2a1f3d]/90 rounded-lg p-6 shadow-lg border-2 border-[#4a9eff]/30">
          <h2 className="text-2xl font-bold text-[#ffd700] mb-4 zelda-title">Timeline Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#2a1f3d] border border-[#00ffff]/30">
              <h3 className="font-bold text-[#00ffff] mb-2 zelda-title">Child Timeline</h3>
              <p className="text-sm text-[#8eb6e3]">The timeline where Link returns to his childhood after defeating Ganon.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#2a1f3d] border border-[#4a9eff]/30">
              <h3 className="font-bold text-[#4a9eff] mb-2 zelda-title">Adult Timeline</h3>
              <p className="text-sm text-[#8eb6e3]">The timeline that continues after Link's victory in the future.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#2a1f3d] border border-[#ff6b6b]/30">
              <h3 className="font-bold text-[#ff6b6b] mb-2 zelda-title">Downfall Timeline</h3>
              <p className="text-sm text-[#8eb6e3]">The timeline where Link fails to defeat Ganon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 