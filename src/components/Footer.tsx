
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">RCB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Rwanda Convention Bureau</h3>
                <p className="text-sm text-gray-400">Visit Rwanda</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Promoting Rwanda as Africa's premier destination for meetings, incentives, 
              conferences, and exhibitions. Where business meets extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#venues" className="text-gray-300 hover:text-white transition-colors">Venues</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Rwanda</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Venue Selection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Event Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Visa Assistance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accommodation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Transportation</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news about venues, events, and opportunities in Rwanda.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Rwanda Convention Bureau. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Rwanda Convention Bureau | Kigali, Rwanda</p>
          <p>Email: info@rcb.rw | Phone: +250 78xxxxxx</p>
        </div>
      </div>
    </footer>
  );
};
