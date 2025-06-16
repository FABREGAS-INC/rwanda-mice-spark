
import { ReactNode } from 'react';
import { HeroSection } from './HeroSection';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  showHero?: boolean;
  title?: string;
  description?: string;
}

export const PageLayout = ({ children, showHero = false, title, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {showHero ? (
        <HeroSection />
      ) : (
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RCB</span>
                </div>
                <div className="ml-4">
                  <h1 className="text-lg font-bold text-gray-800">Rwanda Convention Bureau</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
      
      {!showHero && (title || description) && (
        <div className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {title && <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>}
            {description && <p className="text-xl text-white/90 max-w-3xl mx-auto">{description}</p>}
          </div>
        </div>
      )}
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
