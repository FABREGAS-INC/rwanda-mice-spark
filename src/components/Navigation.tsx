
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface NavigationProps {
  openDropdown: string | null;
  setOpenDropdown: Dispatch<SetStateAction<string | null>>;
}

export const Navigation = ({ openDropdown, setOpenDropdown }: NavigationProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="hidden xl:flex items-center">
      <div className="flex space-x-6">
        <Link
          to="/"
          className={`${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
        >
          Home
        </Link>
        
        <Link
          to="/about-us"
          className={`${isActive('/about-us') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
        >
          About Us
        </Link>

        {/* About the Destination Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 focus:outline-none"
            onClick={() => handleDropdownToggle('destination')}
          >
            About the Destination
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === 'destination' ? 'rotate-180' : ''}`} />
          </button>
          {openDropdown === 'destination' && (
            <div className="absolute top-full left-0 w-64 bg-white shadow-xl border rounded-md z-[100] mt-1">
              <Link 
                to="/about-destination" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Rwanda Overview
              </Link>
              <Link 
                to="/cities-venues" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Cities and Venues
              </Link>
              <Link 
                to="/fast-facts" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Fast Facts
              </Link>
              <Link 
                to="/key-attractions" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Key Attractions
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/plan-your-event"
          className={`${isActive('/plan-your-event') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
        >
          Plan Your Event
        </Link>

        <Link
          to="/calendar"
          className={`${isActive('/calendar') ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors px-3 py-2`}
        >
          Calendar
        </Link>

        {/* Media Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 focus:outline-none"
            onClick={() => handleDropdownToggle('media')}
          >
            Media
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === 'media' ? 'rotate-180' : ''}`} />
          </button>
          {openDropdown === 'media' && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl border rounded-md z-[100] mt-1">
              <Link 
                to="/media" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Media Center
              </Link>
              <Link 
                to="/media-enquiries" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Media Enquiries
              </Link>
              <Link 
                to="/press-room" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Press Room
              </Link>
            </div>
          )}
        </div>

        {/* Publications Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 focus:outline-none"
            onClick={() => handleDropdownToggle('publications')}
          >
            Publications
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === 'publications' ? 'rotate-180' : ''}`} />
          </button>
          {openDropdown === 'publications' && (
            <div className="absolute top-full left-0 w-48 bg-white shadow-xl border rounded-md z-[100] mt-1">
              <Link 
                to="/publications" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                All Publications
              </Link>
              <Link 
                to="/press-releases" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Press Releases
              </Link>
              <Link 
                to="/careers" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Careers
              </Link>
              <Link 
                to="/tenders" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Tenders
              </Link>
              <Link 
                to="/newsletter" 
                className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                Newsletter
              </Link>
            </div>
          )}
        </div>

        <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white ml-4">
          <Link to="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};
