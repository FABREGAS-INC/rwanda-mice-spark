
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Clock, Plane, Shield, Globe, Wifi, Building } from 'lucide-react';

const FastFacts = () => {
  const facts = [
    {
      category: 'General Information',
      icon: Globe,
      items: [
        { label: 'Capital City', value: 'Kigali' },
        { label: 'Official Languages', value: 'Kinyarwanda, English, French, Swahili' },
        { label: 'Population', value: '13.2 million (2023)' },
        { label: 'Currency', value: 'Rwandan Franc (RWF)' },
        { label: 'Time Zone', value: 'Central Africa Time (CAT) - UTC+2' },
        { label: 'Area', value: '26,338 km² (10,169 sq mi)' }
      ]
    },
    {
      category: 'Business & Investment',
      icon: Building,
      items: [
        { label: 'Ease of Doing Business', value: '2nd in Africa (World Bank 2020)' },
        { label: 'GDP Growth Rate', value: '8.2% (2023)' },
        { label: 'Corporate Tax Rate', value: '30%' },
        { label: 'Investment Promotion', value: 'Rwanda Development Board (RDB)' },
        { label: 'Business Registration', value: '4 hours online' },
        { label: 'Key Sectors', value: 'ICT, Tourism, Manufacturing, Agriculture' }
      ]
    },
    {
      category: 'Travel & Connectivity',
      icon: Plane,
      items: [
        { label: 'Main Airport', value: 'Kigali International Airport (KGL)' },
        { label: 'Airlines', value: 'RwandAir (National Carrier)' },
        { label: 'Visa Policy', value: 'Visa-free for 30+ countries' },
        { label: 'Regional Access', value: 'Gateway to East Africa' },
        { label: 'Flight Connections', value: '30+ direct destinations' },
        { label: 'Airport to City', value: '12 km (20 minutes)' }
      ]
    },
    {
      category: 'Infrastructure',
      icon: Wifi,
      items: [
        { label: 'Internet Penetration', value: '65% (2023)' },
        { label: '4G Coverage', value: '95% of population' },
        { label: 'Fiber Optic', value: 'Nationwide coverage' },
        { label: 'Power Access', value: '65% of population' },
        { label: 'Road Network', value: '15,000+ km paved roads' },
        { label: 'Digital Payment', value: '90% mobile money adoption' }
      ]
    },
    {
      category: 'Safety & Security',
      icon: Shield,
      items: [
        { label: 'Global Peace Index', value: '2nd safest in Africa (2023)' },
        { label: 'Crime Rate', value: 'Very low' },
        { label: 'Political Stability', value: 'Highly stable since 1994' },
        { label: 'Emergency Services', value: '24/7 availability' },
        { label: 'Tourist Police', value: 'Dedicated units' },
        { label: 'Healthcare', value: 'Universal health insurance' }
      ]
    },
    {
      category: 'Meeting & Events',
      icon: Users,
      items: [
        { label: 'Convention Centre', value: 'Kigali Convention Centre (2016)' },
        { label: 'Capacity', value: '2,600 delegates' },
        { label: 'Hotel Rooms', value: '5,000+ (Kigali)' },
        { label: 'International Standards', value: 'ISO certified venues' },
        { label: 'Event Support', value: 'Rwanda Convention Bureau' },
        { label: 'Local Suppliers', value: '50+ certified providers' }
      ]
    }
  ];

  const quickStats = [
    { icon: MapPin, label: 'Location', value: 'Heart of Africa' },
    { icon: Users, label: 'Population', value: '13.2M' },
    { icon: Clock, label: 'Time Zone', value: 'UTC+2' },
    { icon: Globe, label: 'Languages', value: '4 Official' }
  ];

  return (
    <PageLayout 
      title="Fast Facts About Rwanda"
      description="Essential information for event planners and business travelers visiting Rwanda."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Facts */}
        <div className="grid md:grid-cols-2 gap-8">
          {facts.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-xl">{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start">
                      <span className="text-gray-600 font-medium">{item.label}:</span>
                      <span className="text-gray-900 text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">Why Choose Rwanda for Your Event?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Strategic Location</h4>
                <p className="text-gray-600 text-sm">
                  Located in the heart of Africa, Rwanda offers easy access to the entire African continent 
                  with excellent connectivity through RwandAir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Business-Friendly</h4>
                <p className="text-gray-600 text-sm">
                  Ranked 2nd in Africa for ease of doing business, with streamlined processes 
                  and strong government support for international events.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Modern Infrastructure</h4>
                <p className="text-gray-600 text-sm">
                  State-of-the-art venues, high-speed internet, reliable power, and world-class 
                  hospitality services ensure successful events.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default FastFacts;
