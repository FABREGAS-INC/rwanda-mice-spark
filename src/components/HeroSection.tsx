'use client';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, Search, Menu, X, ChevronDown } from 'lucide-react';

type NavItem = {
  path: string;
  label: string;
};

type DropdownMenu = {
  trigger: string;
  links: NavItem[];
};

export const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  const mainNavItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/plan-your-event', label: 'Plan Your Event' },
    { path: '/calendar', label: 'Calendar' },
  ];

  const dropdownMenus: DropdownMenu[] = [
    {
      trigger: 'About the Destination',
      links: [
        { path: '/about-destination', label: 'Rwanda Overview' },
        { path: '/cities-venues', label: 'Cities and Venues' },
        { path: '/fast-facts', label: 'Fast Facts' },
        { path: '/key-attractions', label: 'Key Attractions' },
      ],
    },
    {
      trigger: 'Media',
      links: [
        { path: '/media', label: 'Media Center' },
        { path: '/media-enquiries', label: 'Media Enquiries' },
        { path: '/press-room', label: 'Press Room' },
      ],
    },
    {
      trigger: 'Publications',
      links: [
        { path: '/publications', label: 'All Publications' },
        { path: '/press-releases', label: 'Press Releases' },
        { path: '/careers', label: 'Careers' },
        { path: '/tenders', label: 'Tenders' },
        { path: '/newsletter', label: 'Newsletter' },
      ],
    },
  ];

  const mobileNavItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/about-destination', label: 'About the Destination' },
    { path: '/cities-venues', label: 'Cities and Venues' },
    { path: '/fast-facts', label: 'Fast Facts' },
    { path: '/key-attractions', label: 'Key Attractions' },
    { path: '/plan-your-event', label: 'Plan Your Event' },
    { path: '/calendar', label: 'Calendar' },
    { path: '/media', label: 'Media' },
    { path: '/publications', label: 'Publications' },
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-green-900/50 to-yellow-900/30" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <Link to="/" className="flex items-center space-x-4">
          <div className="w-80 h-30 overflow-hidden flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-white">
            {/* <h1 className="text-xl font-bold">Rwanda Convention Bureau</h1> */}
            {/* <p className="text-sm opacity-90">Visit Rwanda</p> */}
          </div>
        </Link>

        {/* Desktop Navigation - Using the working dropdown implementation */}
        <div className="hidden xl:flex items-center text-white">
          <div className="flex space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${isActive(item.path) ? 'text-yellow-300 font-semibold' : 'text-white'} hover:text-yellow-300 transition-colors px-3 py-2`}
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown Menus - Using the working implementation */}
            {dropdownMenus.map((menu) => (
              <div
                key={menu.trigger}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(menu.trigger)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-yellow-300 transition-colors px-3 py-2">
                  {menu.trigger}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === menu.trigger && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border rounded-md z-50">
                    {menu.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
<Button 
  asChild 
  variant="outline" 
  className="border-white text-blue-600 hover:bg-white hover:text-green-800 ml-4"
>
  <Link to="/contact-us">Contact Us</Link>
</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/20"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm xl:hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RCB</span>
                </div>
                <div className="text-white">
                  <h1 className="text-lg font-bold">Rwanda Convention Bureau</h1>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="space-y-4 text-white">
              {mobileNavItems.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block ${isActive(link.path) ? 'text-yellow-300 font-semibold' : ''} hover:text-yellow-300 transition-colors py-2`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 w-full">
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 bg-clip-text text-transparent">
            Rwanda
          </h1>
          <p className="text-2xl lg:text-4xl mb-4 font-light">
            Where Business Meets Extraordinary
          </p>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover world-class venues, breathtaking landscapes, and vibrant culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Plan Your Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-white hover:text-green-800 ml-4"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Venues
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};