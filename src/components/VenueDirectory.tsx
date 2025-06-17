
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Users, Search } from 'lucide-react';

const venues = [
  {
    id: 1,
    name: 'Kigali Convention Centre',
    location: 'Kigali City Center',
    capacity: '2,600 delegates',
    image: '/images/venue1.jpg',
    description: 'State-of-the-art convention center with world-class facilities',
    features: ['Wi-Fi', 'AV Equipment', 'Catering', 'Parking'],
    type: 'Convention Center'
  },
  {
    id: 2,
    name: 'Radisson Blu Hotel & Convention Centre',
    location: 'Kigali',
    capacity: '1,200 delegates',
    image: '/images/venue2.jpg',
    description: 'Luxury hotel with comprehensive meeting facilities',
    features: ['Accommodation', 'Restaurant', 'Spa', 'Business Center'],
    type: 'Hotel'
  },
  {
    id: 3,
    name: 'Intare Conference Arena',
    location: 'Rusororo, Gasabo',
    capacity: '5,000 delegates',
    image: '/images/venue3.jpg',
    description: 'Modern multipurpose venue for large-scale events',
    features: ['Exhibition Space', 'Performance Stage', 'VIP Areas', 'Media Center'],
    type: 'Arena'
  },
  {
    id: 4,
    name: 'Kigali Marriott Hotel',
    location: 'KN 3 Ave, Kigali',
    capacity: '800 delegates',
    image: '/images/venue4.jpg',
    description: 'Premium business hotel with flexible meeting spaces',
    features: ['Executive Lounge', 'Boardrooms', 'Outdoor Terrace', 'Fine Dining'],
    type: 'Hotel'
  }
];

export const VenueDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [capacityFilter, setCapacityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredVenues = venues.filter(venue => {
    const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         venue.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCapacity = capacityFilter === 'all' || 
      (capacityFilter === 'small' && parseInt(venue.capacity) < 500) ||
      (capacityFilter === 'medium' && parseInt(venue.capacity) >= 500 && parseInt(venue.capacity) < 1500) ||
      (capacityFilter === 'large' && parseInt(venue.capacity) >= 1500);
    
    const matchesType = typeFilter === 'all' || venue.type.toLowerCase() === typeFilter;
    
    return matchesSearch && matchesCapacity && matchesType;
  });

  return (
    <section id="venues" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-green-600">Venues</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Rwanda's premier meeting and event spaces, equipped with cutting-edge technology 
            and stunning surroundings that inspire success.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search venues by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={capacityFilter} onValueChange={setCapacityFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Capacity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Capacities</SelectItem>
              <SelectItem value="small">Under 500</SelectItem>
              <SelectItem value="medium">500 - 1,500</SelectItem>
              <SelectItem value="large">1,500+</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Venue Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="hotel">Hotels</SelectItem>
              <SelectItem value="convention center">Convention Centers</SelectItem>
              <SelectItem value="arena">Arenas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVenues.map((venue) => (
            <Card key={venue.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {venue.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-900">{venue.name}</CardTitle>
                <CardDescription className="text-green-600 font-medium">
                  {venue.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center mb-3 text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">{venue.capacity}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {venue.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {venue.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {venue.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{venue.features.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  size="sm"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No venues match your search criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setCapacityFilter('all');
                setTypeFilter('all');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
