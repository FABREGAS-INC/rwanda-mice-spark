import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface PageLayoutProps {
  children: ReactNode;
  showHero?: boolean;
  title?: string;
  description?: string;
}

export const PageLayout = ({ children, showHero = false, title, description }: PageLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {showHero ? (
        <HeroSection />
      ) : (
        <nav className="bg-white shadow-lg relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo and Branding - Made more compact */}
              <Link to="/" className="flex items-center shrink-0">
                <div className="w-30 h-16 overflow-hidden flex items-center justify-center">
                  <img 
                    src="/logo.jpg" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3 hidden sm:block">
                  {/* <h1 className="text-lg font-bold text-gray-800 leading-tight">Rwanda Convention Bureau</h1> */}
                  {/* <p className="text-xs text-gray-600">Visit Rwanda</p> */}
                </div>
              </Link>

              {/* Desktop Navigation - Made more compact */}
              <div className="hidden lg:flex items-center space-x-1 ml-4">
                <div className="flex items-center space-x-1">
                  <Link
                    to="/"
                    className={`${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-2 py-2 text-sm`}
                  >
                    Home
                  </Link>

                  <Link
                    to="/about-us"
                    className={`${isActive('/about-us') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-2 py-2 text-sm`}
                  >
                    About Us
                  </Link>

                  {/* Compact Dropdowns */}
                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown('destination')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 text-sm">
                      Destination
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </button>
                    {openDropdown === 'destination' && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-lg border rounded-md z-50">
                        <Link to="/about-destination" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Rwanda Overview
                        </Link>
                        <Link to="/cities-venues" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Cities & Venues
                        </Link>
                        <Link to="/fast-facts" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Fast Facts
                        </Link>
                        <Link to="/key-attractions" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Key Attractions
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/plan-your-event"
                    className={`${isActive('/plan-your-event') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-2 py-2 text-sm`}
                  >
                    Plan Event
                  </Link>

                  <Link
                    to="/calendar"
                    className={`${isActive('/calendar') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-2 py-2 text-sm`}
                  >
                    Calendar
                  </Link>

                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown('media')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 text-sm">
                      Media
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </button>
                    {openDropdown === 'media' && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-lg border rounded-md z-50">
                        <Link to="/media" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Media Center
                        </Link>
                        <Link to="/media-enquiries" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Media Enquiries
                        </Link>
                        <Link to="/press-room" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Press Room
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown('publications')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-2 py-2 text-sm">
                      Publications
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </button>
                    {openDropdown === 'publications' && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-lg border rounded-md z-50">
                        <Link to="/publications" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          All Publications
                        </Link>
                        <Link to="/press-releases" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Press Releases
                        </Link>
                        <Link to="/careers" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Careers
                        </Link>
                        <Link to="/tenders" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Tenders
                        </Link>
                        <Link to="/newsletter" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                          Newsletter
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <Button 
                  asChild 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white ml-2 text-sm h-8"
                >
                  <Link to="/contact-us">Contact</Link>
                </Button>
              </div>

              {/* Mobile Menu Button - Always visible on mobile */}
              <div className="lg:hidden flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:bg-gray-100"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Improved spacing */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-2">
                <Link to="/" className={`block ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 py-2 text-sm`}>
                  Home
                </Link>
                <Link to="/about-us" className={`block ${isActive('/about-us') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 py-2 text-sm`}>
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

                <div className="pt-3">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full text-sm"
                  >
                    <Link to="/contact-us">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Page Header */}
      {!showHero && (title || description) && (
        <div className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {title && <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h1>}
            {description && <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{description}</p>}
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};