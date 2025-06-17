
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const MobileNavigation = ({ mobileMenuOpen, setMobileMenuOpen }: MobileNavigationProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
            <Link 
              to="/" 
              className={`block ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className={`block ${isActive('/about-us') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-sm font-medium text-gray-500 mb-2">About the Destination</p>
              <Link 
                to="/about-destination" 
                className={`block ${isActive('/about-destination') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Rwanda Overview
              </Link>
              <Link 
                to="/cities-venues" 
                className={`block ${isActive('/cities-venues') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cities and Venues
              </Link>
              <Link 
                to="/fast-facts" 
                className={`block ${isActive('/fast-facts') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Fast Facts
              </Link>
              <Link 
                to="/key-attractions" 
                className={`block ${isActive('/key-attractions') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Key Attractions
              </Link>
            </div>

            <Link 
              to="/plan-your-event" 
              className={`block ${isActive('/plan-your-event') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan Your Event
            </Link>
            <Link 
              to="/calendar" 
              className={`block ${isActive('/calendar') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Calendar
            </Link>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-sm font-medium text-gray-500 mb-2">Media</p>
              <Link 
                to="/media" 
                className={`block ${isActive('/media') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Media Center
              </Link>
              <Link 
                to="/media-enquiries" 
                className={`block ${isActive('/media-enquiries') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Media Enquiries
              </Link>
              <Link 
                to="/press-room" 
                className={`block ${isActive('/press-room') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Press Room
              </Link>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <p className="text-sm font-medium text-gray-500 mb-2">Publications</p>
              <Link 
                to="/publications" 
                className={`block ${isActive('/publications') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                All Publications
              </Link>
              <Link 
                to="/press-releases" 
                className={`block ${isActive('/press-releases') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Press Releases
              </Link>
              <Link 
                to="/careers" 
                className={`block ${isActive('/careers') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/tenders" 
                className={`block ${isActive('/tenders') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Tenders
              </Link>
              <Link 
                to="/newsletter" 
                className={`block ${isActive('/newsletter') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors py-2 pl-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Newsletter
              </Link>
            </div>

            <div className="pt-4">
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full">
                <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
