
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, Search, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1587985628949-bfe6632bea94?w=1200&h=800&fit=crop',
    title: 'Kigali Convention Centre',
    subtitle: 'World-class facilities in the heart of Africa'
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759844-d150ad6fb1b5?w=1200&h=800&fit=crop',
    title: 'Rwanda\'s Natural Beauty',
    subtitle: 'Inspire your attendees with breathtaking landscapes'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
    title: 'Modern Meeting Spaces',
    subtitle: 'Technology-enabled venues for the digital age'
  }
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-green-900/50 to-yellow-900/30" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">RCB</span>
          </div>
          <div className="text-white">
            <h1 className="text-xl font-bold">Rwanda Convention Bureau</h1>
            <p className="text-sm opacity-90">Visit Rwanda</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center text-white">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink href="#home" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors px-3 py-2">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-yellow-300 transition-colors">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <NavigationMenuLink href="#about" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      About RCB
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#team" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      Our Team
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-yellow-300 transition-colors">
                  About the Destination
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <NavigationMenuLink href="#destination" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      Rwanda Overview
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#culture" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      Culture & Heritage
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#facts" className="text-white hover:text-yellow-300 transition-colors px-3 py-2">
                  Fast Facts
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#venues" className="text-white hover:text-yellow-300 transition-colors px-3 py-2">
                  Cities and Venues
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#attractions" className="text-white hover:text-yellow-300 transition-colors px-3 py-2">
                  Key Attractions
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#events" className="text-white hover:text-yellow-300 transition-colors px-3 py-2">
                  Plan Your Event
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#calendar" className="text-white hover:text-yellow-300 transition-colors px-3 py-2">
                  Calendar
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-yellow-300 transition-colors">
                  Media
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <NavigationMenuLink href="#news" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      News & Updates
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#gallery" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      Photo Gallery
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#videos" className="block px-3 py-2 hover:bg-gray-100 rounded">
                      Videos
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="#publications" className="text-white hover:text-yellow-300 transition-colors px-3 py-2">
                  Publications
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 ml-4">
                  Contact Us
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
        <div className="absolute top-0 left-0 right-0 z-20 bg-black/95 backdrop-blur-sm xl:hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RCB</span>
                </div>
                <div className="text-white">
                  <h1 className="text-lg font-bold">Rwanda Convention Bureau</h1>
                </div>
              </div>
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
              <a href="#home" className="block text-yellow-300 font-semibold py-2">Home</a>
              <a href="#about" className="block hover:text-yellow-300 transition-colors py-2">About Us</a>
              <a href="#destination" className="block hover:text-yellow-300 transition-colors py-2">About the Destination</a>
              <a href="#facts" className="block hover:text-yellow-300 transition-colors py-2">Fast Facts</a>
              <a href="#venues" className="block hover:text-yellow-300 transition-colors py-2">Cities and Venues</a>
              <a href="#attractions" className="block hover:text-yellow-300 transition-colors py-2">Key Attractions</a>
              <a href="#events" className="block hover:text-yellow-300 transition-colors py-2">Plan Your Event</a>
              <a href="#calendar" className="block hover:text-yellow-300 transition-colors py-2">Calendar</a>
              <a href="#media" className="block hover:text-yellow-300 transition-colors py-2">Media</a>
              <a href="#publications" className="block hover:text-yellow-300 transition-colors py-2">Publications</a>
              <div className="pt-4">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 w-full">
                  Contact Us
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
            {heroImages[currentImage].subtitle}
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
              className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg"
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

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
