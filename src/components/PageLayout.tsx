
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface PageLayoutProps {
  children: ReactNode;
  showHero?: boolean;
  title?: string;
  description?: string;
}

export const PageLayout = ({ children, showHero = false, title, description }: PageLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {showHero ? (
        <HeroSection />
      ) : (
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RCB</span>
                </div>
                <div className="ml-4">
                  <h1 className="text-lg font-bold text-gray-800">Rwanda Convention Bureau</h1>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden xl:flex items-center">
                <NavigationMenu>
                  <NavigationMenuList className="flex space-x-6">
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={`${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
                      >
                        <Link to="/">Home</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={`${isActive('/about-us') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
                      >
                        <Link to="/about-us">About Us</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors bg-transparent">
                        About the Destination
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-64 p-4 bg-white shadow-lg">
                          <NavigationMenuLink asChild>
                            <Link to="/about-destination" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Rwanda Overview
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/cities-venues" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Cities and Venues
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/fast-facts" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Fast Facts
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/key-attractions" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Key Attractions
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={`${isActive('/plan-your-event') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
                      >
                        <Link to="/plan-your-event">Plan Your Event</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={`${isActive('/calendar') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
                      >
                        <Link to="/calendar">Calendar</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors bg-transparent">
                        Media
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-48 p-4 bg-white shadow-lg">
                          <NavigationMenuLink asChild>
                            <Link to="/media" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Media Center
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/media-enquiries" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Media Enquiries
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/press-room" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Press Room
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors bg-transparent">
                        Publications
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-48 p-4 bg-white shadow-lg">
                          <NavigationMenuLink asChild>
                            <Link to="/publications" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              All Publications
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/press-releases" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Press Releases
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/careers" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Careers
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/tenders" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Tenders
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/newsletter" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded">
                              Newsletter
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white ml-4">
                        <Link to="/contact-us">Contact Us</Link>
                      </Button>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
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

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden bg-white border-t">
              <div className="px-4 py-6 space-y-4">
                <Link to="/" className={`block ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}>Home</Link>
                <Link to="/about-us" className={`block ${isActive('/about-us') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}>About Us</Link>
                <Link to="/about-destination" className={`block ${isActive('/about-destination') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}>About the Destination</Link>
                <Link to="/cities-venues" className={`block ${isActive('/cities-venues') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-4`}>Cities and Venues</Link>
                <Link to="/fast-facts" className={`block ${isActive('/fast-facts') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-4`}>Fast Facts</Link>
                <Link to="/key-attractions" className={`block ${isActive('/key-attractions') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-4`}>Key Attractions</Link>
                <Link to="/plan-your-event" className={`block ${isActive('/plan-your-event') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}>Plan Your Event</Link>
                <Link to="/calendar" className={`block ${isActive('/calendar') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}>Calendar</Link>
                <Link to="/media" className={`block ${isActive('/media') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}>Media</Link>
                <Link to="/publications" className={`block ${isActive('/publications') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}>Publications</Link>
                <div className="pt-4">
                  <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full">
                    <Link to="/contact-us">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
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
