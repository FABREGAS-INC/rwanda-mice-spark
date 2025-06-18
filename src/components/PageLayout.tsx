
import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen section-with-imigongo-2 page-sides-decoration">
      {showHero ? (
        <HeroSection />
      ) : (
        <nav className="bg-white shadow-lg relative z-50 imigongo-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo and Branding */}
              <Link to="/" className="flex items-center shrink-0">
                <div className="w-30 h-16 overflow-hidden flex items-center justify-center">
                  <img 
                    src="/logo.jpg" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              <Navigation 
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />

              <MobileNavigation 
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t section-with-imigongo-1">
              <div className="px-4 py-4 space-y-2">
                <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2 text-sm">
                  Home
                </Link>
                <Link to="/about-us" className="block text-gray-700 hover:text-blue-600 py-2 text-sm">
                  About Us
                </Link>
                
                <div className="pl-2 border-l-2 border-gray-100 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 pt-2">ABOUT DESTINATION</p>
                  <Link to="/about-destination" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Rwanda Overview
                  </Link>
                  <Link to="/cities-venues" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Cities and Venues
                  </Link>
                  <Link to="/fast-facts" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Fast Facts
                  </Link>
                  <Link to="/key-attractions" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Key Attractions
                  </Link>
                </div>

                <Link to="/plan-your-event" className="block text-gray-700 hover:text-blue-600 py-2 text-sm">
                  Plan Your Event
                </Link>
                <Link to="/calendar" className="block text-gray-700 hover:text-blue-600 py-2 text-sm">
                  Calendar
                </Link>

                <div className="pl-2 border-l-2 border-gray-100 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 pt-2">MEDIA</p>
                  <Link to="/media" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Media Center
                  </Link>
                  <Link to="/media-enquiries" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Media Enquiries
                  </Link>
                  <Link to="/press-room" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Press Room
                  </Link>
                </div>

                <div className="pl-2 border-l-2 border-gray-100 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 pt-2">PUBLICATIONS</p>
                  <Link to="/publications" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    All Publications
                  </Link>
                  <Link to="/press-releases" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Press Releases
                  </Link>
                  <Link to="/careers" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Careers
                  </Link>
                  <Link to="/tenders" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Tenders
                  </Link>
                  <Link to="/newsletter" className="block text-gray-700 hover:text-blue-600 py-1 text-sm">
                    Newsletter
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      <PageHeader title={title} description={description} />

      <main className="flex-1 section-with-imigongo-3">{children}</main>
      <Footer />
    </div>
  );
};
