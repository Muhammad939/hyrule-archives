'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GiSpellBook } from 'react-icons/gi';

export default function UltrahandBuildsRedirect() {
  const router = useRouter();
  const externalUrl = 'https://www.ign.com/wikis/the-legend-of-zelda-tears-of-the-kingdom/Best_Ultrahand_Builds';

  useEffect(() => {
    window.location.href = externalUrl;
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] flex items-center justify-center">
      <div className="text-center p-8">
        <GiSpellBook className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))] animate-spin" />
        <h1 className="text-2xl font-bold text-[rgb(var(--gold))] mb-4">
          Redirecting to Ultrahand Builds Guide...
        </h1>
        <p className="text-[rgb(var(--muted))]">
          If you are not redirected automatically, {' '}
          <a 
            href={externalUrl}
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))]"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
} 