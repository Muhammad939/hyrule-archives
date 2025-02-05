import './globals.css';
import { GiShardSword } from 'react-icons/gi';
import { FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';
import { ThemeProvider } from './components/ThemeProvider';
import SearchBar from './components/SearchBar';
import MobileMenu from './components/MobileMenu';

export const metadata = {
  title: 'The Hyrule Archives',
  description: 'Your gateway to the world of Zelda - Explore lore, guides, puzzles, and theories.',
};

const navLinks = [
  { href: '/timeline', label: 'Timeline' },
  { href: '/guides', label: 'Guides' },
  { href: '/puzzles', label: 'Puzzles' },
  { href: '/theories', label: 'Theories' }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="dark:bg-[#0a0f12] transition-colors duration-200">
          <nav className="bg-[#1a2329] text-white sticky top-0 z-50 shadow-lg border-b border-[#64a6bd]/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center space-x-2">
                  <GiShardSword className="text-2xl text-[#64a6bd]" />
                  <span className="font-bold zelda-title text-[#64a6bd]">Hyrule Archives</span>
                </Link>
                
                <div className="hidden md:flex items-center space-x-8">
                  <div className="w-64">
                    <SearchBar />
                  </div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[#64a6bd] hover:text-[#9cc8db] transition-colors zelda-title text-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <MobileMenu links={navLinks} />
              </div>
            </div>
          </nav>

          <main className="min-h-screen">{children}</main>

          <footer className="bg-[#1a2329] text-white py-8 border-t border-[#64a6bd]/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-[#64a6bd] zelda-title">About</h3>
                  <p className="text-sm text-[#9cc8db]">
                    The Hyrule Archives Is A Website That Contains Information About The Legend Of Zelda Series. And Also Contains Guides, Puzzles, And More!
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-[#64a6bd] zelda-title">Quick Links</h3>
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#9cc8db] hover:text-[#64a6bd] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-[#64a6bd] zelda-title">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/privacy"
                        className="text-sm text-[#9cc8db] hover:text-[#64a6bd] transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-sm text-[#9cc8db] hover:text-[#64a6bd] transition-colors"
                      >
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#64a6bd]/20 text-center text-sm text-[#9cc8db]">
                <p>
                  © 2024 The Hyrule Archives.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
