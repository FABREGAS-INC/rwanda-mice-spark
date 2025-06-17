
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Wifi, Car, Camera, Star, Building, Calendar } from 'lucide-react';

const CitiesAndVenues = () => {
  const cities = [
    {
      name: 'Kigali',
      description: 'Rwanda\'s vibrant capital and primary business hub',
      image: '/images/kigali.jpeg',
      highlights: [
        'Kigali Convention Centre - 2,600 capacity',
        '5,000+ hotel rooms',
        'International airport (12km)',
        'Modern business district',
        'Safe and clean environment'
      ],
      venues: [
        {
          name: 'Kigali Convention Centre',
          capacity: '2,600',
          type: 'Convention Center',
          features: ['State-of-the-art AV', 'Simultaneous interpretation', 'Exhibition space']
        },
        {
          name: 'Radisson Blu Hotel & Convention Centre',
          capacity: '1,200',
          type: 'Hotel & Conference',
          features: ['Multiple meeting rooms', 'Business center', 'Airport shuttle']
        }
      ]
    },
    {
      name: 'Musanze',
      description: 'Gateway to Volcanoes National Park and gorilla trekking',
      image: '/images/musanze.jpg',
      highlights: [
        'Mountain retreat venues',
        'Unique wildlife experiences',
        'Adventure tourism activities',
        'Boutique lodges',
        'Scenic conference settings'
      ],
      venues: [
        {
          name: 'Five Volcanoes Boutique Hotel',
          capacity: '200',
          type: 'Boutique Hotel',
          features: ['Mountain views', 'Outdoor venues', 'Cultural experiences']
        },
        {
          name: 'Bisate Lodge',
          capacity: '50',
          type: 'Luxury Lodge',
          features: ['Exclusive setting', 'Gorilla trekking', 'Premium service']
        }
      ]
    },
    {
      name: 'Rubavu (Gisenyi)',
      description: 'Beautiful lakeside city on the shores of Lake Kivu',
      image: '/images/Rubavu.jpg',
      highlights: [
        'Lake Kivu waterfront venues',
        'Resort-style accommodations',
        'Water sports activities',
        'Relaxing atmosphere',
        'Beach venues available'
      ],
      venues: [
        {
          name: 'Lake Kivu Serena Hotel',
          capacity: '400',
          type: 'Resort Hotel',
          features: ['Lakefront location', 'Multiple venues', 'Water activities']
        },
        {
          name: 'Paradis Malahide',
          capacity: '150',
          type: 'Beach Resort',
          features: ['Beach venue', 'Garden settings', 'Leisure facilities']
        }
      ]
    }
  ];

  const venueTypes = [
    {
      type: 'Convention Centers',
      icon: Building,
      description: 'Large-scale venues for major conferences and exhibitions',
      capacity: '500-2,600 delegates',
      features: ['Advanced AV systems', 'Exhibition halls', 'Multiple breakout rooms', 'Catering facilities']
    },
    {
      type: 'Hotel Conference Facilities',
      icon: Star,
      description: 'Integrated accommodation and meeting spaces',
      capacity: '50-1,200 delegates',
      features: ['On-site accommodation', 'Restaurant facilities', 'Business centers', 'Airport transfers']
    },
    {
      type: 'Unique Venues',
      icon: Camera,
      description: 'Distinctive locations for memorable events',
      capacity: '20-500 delegates',
      features: ['Scenic locations', 'Cultural experiences', 'Outdoor options', 'Photography opportunities']
    },
    {
      type: 'Business Centers',
      icon: Wifi,
      description: 'Modern facilities in business districts',
      capacity: '10-300 delegates',
      features: ['High-speed internet', 'Modern technology', 'Central locations', 'Flexible layouts']
    }
  ];

  return (
    <PageLayout 
      title="Cities and Venues"
      description="Discover Rwanda's premier destinations and world-class venues for your next event."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Event Destinations</h2>
          <div className="space-y-12">
            {cities.map((city, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{city.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{city.description}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-4">City Highlights</h4>
                    <ul className="space-y-2 mb-6">
                      {city.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-4">Featured Venues</h4>
                    <div className="space-y-3">
                      {city.venues.map((venue, venueIndex) => (
                        <div key={venueIndex} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium text-gray-900">{venue.name}</h5>
                            <span className="text-sm text-blue-600">{venue.type}</span>
                          </div>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-600">Up to {venue.capacity}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {venue.features.map((feature, featureIndex) => (
                              <span 
                                key={featureIndex}
                                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Venue Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Venue Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venueTypes.map((venueType, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <venueType.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{venueType.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{venueType.description}</p>
                  <div className="text-center mb-4">
                    <span className="text-blue-600 font-semibold text-sm">{venueType.capacity}</span>
                  </div>
                  <div className="space-y-2">
                    {venueType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <CardContent className="p-8">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Plan Your Event?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you find the perfect venue for your event. Contact us for personalized 
              recommendations and assistance with venue selection, booking, and event planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Request Venue Information
              </Button>
              <Button variant="outline">
                Download Venue Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default CitiesAndVenues;
