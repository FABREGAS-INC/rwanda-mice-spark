
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

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
        <div className="relative group">
          <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 focus:outline-none">
            About the Destination
            <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 w-64 bg-white shadow-xl border rounded-md z-[100] mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <Link 
              to="/about-destination" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Rwanda Overview
            </Link>
            <Link 
              to="/cities-venues" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Cities and Venues
            </Link>
            <Link 
              to="/fast-facts" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Fast Facts
            </Link>
            <Link 
              to="/key-attractions" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Key Attractions
            </Link>
          </div>
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
        <div className="relative group">
          <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 focus:outline-none">
            Media
            <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 w-48 bg-white shadow-xl border rounded-md z-[100] mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <Link 
              to="/media" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Media Center
            </Link>
            <Link 
              to="/media-enquiries" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Media Enquiries
            </Link>
            <Link 
              to="/press-room" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Press Room
            </Link>
          </div>
        </div>

        {/* Publications Dropdown */}
        <div className="relative group">
          <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 focus:outline-none">
            Publications
            <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 w-48 bg-white shadow-xl border rounded-md z-[100] mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <Link 
              to="/publications" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              All Publications
            </Link>
            <Link 
              to="/press-releases" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Press Releases
            </Link>
            <Link 
              to="/careers" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Careers
            </Link>
            <Link 
              to="/tenders" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Tenders
            </Link>
            <Link 
              to="/newsletter" 
              className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Newsletter
            </Link>
          </div>
        </div>

        <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white ml-4">
          <Link to="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};
