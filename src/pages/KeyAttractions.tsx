
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Clock, Star, Users, Mountain, TreePine, Waves } from 'lucide-react';

const KeyAttractions = () => {
  const attractions = [
    {
      name: 'Volcanoes National Park',
      category: 'Wildlife & Nature',
      icon: Mountain,
      image: '/images/volcanoes.jpg',
      description: 'Home to the endangered mountain gorillas and part of the Virunga Mountains.',
      highlights: [
        'Mountain Gorilla Trekking',
        'Golden Monkey Tracking',
        'Volcano Hiking',
        'Cultural Village Visits',
        'Bird Watching'
      ],
      distance: '116 km from Kigali',
      duration: '2-3 days recommended',
      bestFor: 'Incentive trips, team building, unique experiences'
    },
    {
      name: 'Lake Kivu',
      category: 'Lakes & Water Activities',
      icon: Waves,
      image: '/images/kivu.jpg',
      description: 'One of Africa\'s Great Lakes, offering beautiful scenery and water activities.',
      highlights: [
        'Boat Cruises',
        'Water Sports',
        'Beach Relaxation',
        'Island Visits',
        'Fishing Experiences'
      ],
      distance: '120 km from Kigali',
      duration: '1-2 days',
      bestFor: 'Relaxation, team outings, water-based activities'
    },
    {
      name: 'Akagera National Park',
      category: 'Wildlife Safari',
      icon: TreePine,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
      description: 'Rwanda\'s only Big Five park, home to lions, elephants, rhinos, and more.',
      highlights: [
        'Big Five Safari',
        'Boat Safari on Lake Ihema',
        'Bird Watching (500+ species)',
        'Night Game Drives',
        'Camping & Lodges'
      ],
      distance: '110 km from Kigali',
      duration: '2-3 days recommended',
      bestFor: 'Wildlife enthusiasts, photography, adventure activities'
    },
    {
      name: 'Nyungwe Forest National Park',
      category: 'Forest & Primates',
      icon: TreePine,
      image: '/images/nyungwe.jpg',
      description: 'Ancient rainforest with chimpanzees, canopy walks, and incredible biodiversity.',
      highlights: [
        'Chimpanzee Tracking',
        'Canopy Walk Experience',
        'Bird Watching',
        'Nature Trails',
        'Waterfall Visits'
      ],
      distance: '225 km from Kigali',
      duration: '2-3 days recommended',
      bestFor: 'Nature lovers, adventure seekers, eco-tourism'
    },
    // {
    //   name: 'Kigali Genocide Memorial',
    //   category: 'History & Culture',
    //   icon: Star,
    //   image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    //   description: 'A moving memorial and museum documenting Rwanda\'s history and transformation.',
    //   highlights: [
    //     'Historical Exhibitions',
    //     'Memorial Gardens',
    //     'Educational Programs',
    //     'Documentation Center',
    //     'Guided Tours'
    //   ],
    //   distance: 'Central Kigali',
    //   duration: '2-3 hours',
    //   bestFor: 'Cultural understanding, educational visits, reflection'
    // },
    {
      name: 'King\'s Palace Museum',
      category: 'History & Culture',
      icon: Star,
      image: '/images/palace.jpg',
      description: 'Traditional royal residence showcasing Rwandan culture and history.',
      highlights: [
        'Traditional Architecture',
        'Cultural Performances',
        'Inyambo Cattle',
        'Craft Demonstrations',
        'Historical Artifacts'
      ],
      distance: '132 km from Kigali',
      duration: 'Half day',
      bestFor: 'Cultural experiences, traditional performances, history'
    }
  ];

  const experienceTypes = [
    {
      type: 'Wildlife Encounters',
      icon: Camera,
      description: 'Close encounters with Rwanda\'s incredible wildlife',
      attractions: ['Volcanoes National Park', 'Akagera National Park', 'Nyungwe Forest']
    },
    {
      type: 'Cultural Immersion',
      icon: Users,
      description: 'Deep dive into Rwandan culture and traditions',
      attractions: ['King\'s Palace Museum', 'Cultural Villages', 'Local Markets']
    },
    {
      type: 'Adventure Activities',
      icon: Mountain,
      description: 'Thrilling outdoor experiences and adventures',
      attractions: ['Canopy Walk', 'Volcano Hiking', 'Water Sports']
    },
    {
      type: 'Relaxation & Wellness',
      icon: Waves,
      description: 'Peaceful retreats and wellness experiences',
      attractions: ['Lake Kivu', 'Hot Springs', 'Spa Resorts']
    }
  ];

  return (
    <PageLayout 
      title="Key Attractions"
      description="Discover Rwanda's breathtaking attractions perfect for enriching your event experience."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Experience Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Experience Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceTypes.map((experience, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <experience.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{experience.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                  <div className="space-y-1">
                    {experience.attractions.map((attraction, attractionIndex) => (
                      <div key={attractionIndex} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {attraction}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Featured Attractions</h2>
          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {attraction.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{attraction.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{attraction.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {attraction.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-blue-600 rounded-full flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Visit Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{attraction.distance}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{attraction.duration}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Star className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{attraction.bestFor}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Learn More & Book Experience
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="p-8">
            <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhance Your Event with Unique Experiences</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Rwanda's attractions offer perfect opportunities for pre and post-event activities, 
              team building exercises, and unforgettable experiences for your delegates. 
              Let us help you create a comprehensive itinerary that combines business with adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Plan Attraction Visits
              </Button>
              <Button variant="outline">
                Download Travel Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default KeyAttractions;
