
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Users, Globe, Mountain, Leaf, Plane, Shield } from 'lucide-react';

const AboutDestination = () => {
  const highlights = [
    {
      icon: Mountain,
      title: 'Land of a Thousand Hills',
      description: 'Breathtaking landscapes with rolling hills, lakes, and mountain ranges.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'One of the safest countries in Africa with excellent security infrastructure.'
    },
    {
      icon: Leaf,
      title: 'Green & Clean',
      description: 'Committed to environmental sustainability and carbon neutrality by 2050.'
    },
    {
      icon: Globe,
      title: 'Connected Hub',
      description: 'Strategic location with excellent air connectivity across Africa and beyond.'
    }
  ];

  const facts = [
    { label: 'Capital', value: 'Kigali' },
    { label: 'Population', value: '13+ million' },
    { label: 'Languages', value: 'Kinyarwanda, English, French, Swahili' },
    { label: 'Currency', value: 'Rwandan Franc (RWF)' },
    { label: 'Time Zone', value: 'CAT (UTC+2)' },
    { label: 'Climate', value: 'Temperate tropical highland' },
    { label: 'GDP Growth', value: '8%+ annually' },
    { label: 'Ease of Business', value: '2nd in Africa' }
  ];

  return (
    <PageLayout 
      title="About the Destination"
      description="Discover Rwanda - the Land of a Thousand Hills and endless opportunities."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Content */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Welcome to Rwanda</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">The Heart of Africa</h3>
                <p className="text-gray-600 mb-4">
                  Rwanda, known as the "Land of a Thousand Hills," is a remarkable destination that 
                  combines stunning natural beauty with modern infrastructure and a thriving business environment. 
                  Located in the heart of East Africa, Rwanda has transformed itself into one of the continent's 
                  most dynamic economies and premier MICE destinations.
                </p>
                <p className="text-gray-600 mb-4">
                  From the bustling capital city of Kigali to the pristine wilderness of Volcanoes National Park, 
                  Rwanda offers a unique blend of urban sophistication and natural wonder that creates the perfect 
                  backdrop for memorable business events.
                </p>
                <p className="text-gray-600">
                  The country's commitment to excellence, innovation, and sustainability makes it an ideal choice 
                  for organizations seeking a destination that aligns with their values while delivering 
                  world-class experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Rwanda for Business Events?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Political stability and good governance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modern infrastructure and world-class venues</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strategic location with excellent connectivity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>English-speaking business environment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Visa-friendly policies for international visitors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rich culture and unique experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Rwanda Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-4">
                    <highlight.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact, index) => (
                  <div key={index} className="border-b border-gray-100 pb-2">
                    <p className="text-sm text-gray-500">{fact.label}</p>
                    <p className="font-medium text-gray-900">{fact.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Plane className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kigali International Airport</h4>
                    <p className="text-gray-600 text-sm">Modern airport with direct flights to major global destinations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">RwandAir</h4>
                    <p className="text-gray-600 text-sm">National carrier connecting Rwanda to 30+ destinations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Access</h4>
                    <p className="text-gray-600 text-sm">15 minutes from airport to city center</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ground Transportation</h4>
                    <p className="text-gray-600 text-sm">Modern taxis, ride-sharing, and professional transport services</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Kigali Overview */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Kigali - Africa's Singapore</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Modern Capital City</h3>
                <p className="text-gray-600 mb-4">
                  Kigali, Rwanda's capital and largest city, is often called "Africa's Singapore" for its 
                  cleanliness, safety, and modern infrastructure. The city serves as the political, 
                  economic, and cultural center of Rwanda and is home to the country's main business 
                  and conference facilities.
                </p>
                <p className="text-gray-600 mb-4">
                  With a population of over 1.3 million people, Kigali is a vibrant metropolis that 
                  seamlessly blends modern development with traditional Rwandan culture. The city's 
                  well-planned layout, excellent road network, and reliable utilities make it an 
                  ideal destination for international business events.
                </p>
                <p className="text-gray-600">
                  Kigali's numerous hotels, restaurants, shopping centers, and entertainment venues 
                  ensure that visitors have access to world-class amenities and services during their stay.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Business Hub</h3>
                <p className="text-gray-600 mb-4">
                  As East Africa's leading business hub, Kigali hosts numerous international organizations, 
                  multinational corporations, and regional headquarters. The city's business-friendly 
                  environment, skilled workforce, and strategic location make it an attractive destination 
                  for companies expanding into the African market.
                </p>
                <p className="text-gray-600 mb-4">
                  Key business districts include the Central Business District (CBD), Kigali Heights, 
                  and the emerging Kigali Innovation City, which will be Africa's first purpose-built 
                  smart city focused on technology and innovation.
                </p>
                <p className="text-gray-600">
                  The city's commitment to becoming a cashless society, with widespread mobile money 
                  adoption and digital payment systems, demonstrates Rwanda's leadership in 
                  financial technology and innovation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Sustainable Destination</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Rwanda is a global leader in environmental sustainability and conservation
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Green Policies</h4>
                  <p className="text-gray-600 text-sm">
                    Plastic bag ban, reforestation programs, and commitment to carbon neutrality by 2050
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Conservation Success</h4>
                  <p className="text-gray-600 text-sm">
                    40% forest cover, successful gorilla conservation, and protected national parks
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Global Recognition</h4>
                  <p className="text-gray-600 text-sm">
                    UN awards for environmental leadership and sustainable tourism practices
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default AboutDestination;
