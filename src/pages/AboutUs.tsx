
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Globe, Award, Heart, Shield, Lightbulb, Trophy } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Ubwiyunge (Integrity)',
      description: 'We conduct our business with honesty, transparency, and ethical practices.'
    },
    {
      icon: Users,
      title: 'Ubufatanye (Unity)',
      description: 'Working together as one team to achieve common goals and promote Rwanda.'
    },
    {
      icon: Shield,
      title: 'Gukunda Igihugu (Patriotism)',
      description: 'Passionate commitment to promoting Rwanda as a world-class destination.'
    },
    // {
    //   icon: Lightbulb,
    //   title: 'Ubwoba bw\'Imana (God-fearing)',
    //   description: 'Conducting our work with humility, respect, and moral principles.'
    // }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Leading MICE Destination',
      description: 'Recognized as one of Africa\'s premier business events destinations.'
    },
    {
      icon: Globe,
      title: 'International Recognition',
      description: 'Rwanda consistently ranks high in global competitiveness and ease of doing business.'
    },
    {
      icon: Award,
      title: 'Sustainable Practices',
      description: 'Pioneer in sustainable tourism and green conference practices in Africa.'
    },
    {
      icon: Users,
      title: 'World-Class Service',
      description: 'Delivered exceptional experiences for thousands of international events.'
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
              <p className="text-gray-600 leading-relaxed mb-4">
                To position Rwanda as the premier business events destination in Africa by promoting 
                our world-class venues, exceptional service standards, and unique cultural experiences 
                that create unforgettable memories for event organizers and attendees.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We serve as the official marketing arm for Rwanda's MICE industry, connecting event 
                planners with the best suppliers, venues, and experiences our beautiful country has to offer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                To be the leading convention bureau in Africa, recognized globally for our innovative 
                approach to business events, sustainable practices, and the remarkable transformation 
                story of Rwanda - where business truly meets extraordinary.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By 2030, we envision Rwanda as the top choice for international conferences, 
                contributing significantly to the country's economic growth and global reputation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Rwanda Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Our Values - Ndi Umunyarwanda</h2>
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
        <Card className="mb-16">
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
                <p className="text-gray-600 mb-4">
                  Today, Rwanda is known for its political stability, economic growth, technological 
                  innovation, and commitment to environmental sustainability. The country has earned 
                  recognition as one of the safest and most efficient destinations in Africa.
                </p>
                <p className="text-gray-600">
                  Our motto "Ubwiyunge, Ubufatanye, Gukunda Igihugu" (Integrity, Unity, Patriotism) 
                  guides everything we do as we build a better future for our nation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Business-Friendly Environment</h3>
                <p className="text-gray-600 mb-4">
                  Rwanda consistently ranks as one of the easiest places to do business in Africa. 
                  The government's commitment to reducing bureaucracy, embracing technology, and 
                  promoting transparency has created an environment where events and businesses thrive.
                </p>
                <p className="text-gray-600 mb-4">
                  With state-of-the-art infrastructure, world-class venues like the Kigali Convention Centre, 
                  and a growing reputation as a hub for innovation and technology, Rwanda offers everything 
                  needed for successful business events.
                </p>
                <p className="text-gray-600">
                  Our strategic location in the heart of Africa, coupled with excellent connectivity 
                  through RwandAir and visa-friendly policies, makes Rwanda the perfect gateway to 
                  the African market.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gradient mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-100 to-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <achievement.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Leadership & Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Rwanda Convention Bureau is led by a dedicated team of professionals committed to 
                promoting Rwanda as a premier MICE destination. Our team combines local expertise 
                with international standards to deliver exceptional service.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Leadership</h4>
                  <p className="text-gray-600 text-sm">Visionary guidance aligned with national development goals</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Industry Expertise</h4>
                  <p className="text-gray-600 text-sm">Deep knowledge of MICE industry and event management</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Focus</h4>
                  <p className="text-gray-600 text-sm">Dedicated to exceeding client expectations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
