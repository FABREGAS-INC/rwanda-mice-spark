
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, Search } from 'lucide-react';

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
        
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#venues" className="hover:text-yellow-300 transition-colors">Venues</a>
          <a href="#events" className="hover:text-yellow-300 transition-colors">Events</a>
          <a href="#testimonials" className="hover:text-yellow-300 transition-colors">Testimonials</a>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
            Contact Us
          </Button>
        </div>
      </nav>

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
