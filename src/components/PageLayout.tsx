
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';
import { PageHeader } from './PageHeader';

interface PageLayoutProps {
  children: ReactNode;
  showHero?: boolean;
  title?: string;
  description?: string;
}

export const PageLayout = ({ children, showHero = false, title, description }: PageLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {showHero ? (
        <HeroSection />
      ) : (
        <nav className="bg-white shadow-lg relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RCB</span>
                </div>
                <div className="ml-4 hidden sm:block">
                  <h1 className="text-lg font-bold text-gray-800">Rwanda Convention Bureau</h1>
                </div>
              </Link>

              <Navigation />
              <MobileNavigation 
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          </div>
        </nav>
      )}
      
      {!showHero && <PageHeader title={title} description={description} />}
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
