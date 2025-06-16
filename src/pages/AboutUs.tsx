
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Globe, Award } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: 'Excellence in Service',
      description: 'We are committed to providing world-class service that exceeds expectations.'
    },
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'Positioning Rwanda as the premier MICE destination in Africa.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Meeting international standards while celebrating our unique culture.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Leveraging technology and creativity to enhance event experiences.'
    }
  ];

  return (
    <PageLayout 
      title="About Rwanda Convention Bureau"
      description="Dedicated to promoting Rwanda as a world-class destination for meetings, incentives, conferences, and exhibitions."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To position Rwanda as the premier business events destination in Africa by promoting 
                our world-class venues, exceptional service standards, and unique cultural experiences 
                that create unforgettable memories for event organizers and attendees.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To be the leading convention bureau in Africa, recognized globally for our innovative 
                approach to business events, sustainable practices, and the remarkable transformation 
                story of Rwanda - where business truly meets extraordinary.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About Rwanda */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Why Choose Rwanda?</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">A Remarkable Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Rwanda has undergone one of the most remarkable transformations in modern history. 
                  From the devastating genocide of 1994 to becoming one of Africa's fastest-growing 
                  economies, Rwanda's story of resilience, unity, and progress inspires visitors 
                  from around the world.
                </p>
                <p className="text-gray-600">
                  Today, Rwanda is known for its political stability, economic growth, technological 
                  innovation, and commitment to environmental sustainability. The country has earned 
                  recognition as one of the safest and most efficient destinations in Africa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Business-Friendly Environment</h3>
                <p className="text-gray-600 mb-4">
                  Rwanda consistently ranks as one of the easiest places to do business in Africa. 
                  The government's commitment to reducing bureaucracy, embracing technology, and 
                  promoting transparency has created an environment where events and businesses thrive.
                </p>
                <p className="text-gray-600">
                  With state-of-the-art infrastructure, world-class venues, and a growing reputation 
                  as a hub for innovation and technology, Rwanda offers everything needed for 
                  successful business events.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
