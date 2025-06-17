
import { useParams, useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, DollarSign, User, ArrowLeft } from 'lucide-react';

const eventDetails = {
  1: {
    title: 'Africa Innovation Summit 2024',
    date: 'March 15-17, 2024',
    time: '9:00 AM - 6:00 PM',
    location: 'Kigali Convention Centre',
    attendees: '2,500+',
    category: 'Technology',
    price: '$299',
    organizer: 'Rwanda Tech Hub',
    image: 'https://images.unsplash.com/photo-1587985628949-bfe6632bea94?w=800&h=400&fit=crop',
    status: 'Registration Open',
    description: 'Join Africa\'s premier innovation summit featuring keynotes from tech leaders, startup showcases, and networking opportunities. This three-day event brings together entrepreneurs, investors, and technology enthusiasts from across the continent.',
    agenda: [
      { time: '9:00 AM', title: 'Registration & Welcome Coffee' },
      { time: '10:00 AM', title: 'Opening Keynote: The Future of African Tech' },
      { time: '11:30 AM', title: 'Panel: Fintech Revolution in Africa' },
      { time: '1:00 PM', title: 'Networking Lunch' },
      { time: '2:30 PM', title: 'Startup Pitch Competition' },
      { time: '4:00 PM', title: 'Workshop: Building Scalable Tech Solutions' },
      { time: '5:30 PM', title: 'Closing Remarks & Cocktail Reception' }
    ],
    speakers: [
      { name: 'John Doe', title: 'CEO, TechAfrica', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
      { name: 'Jane Smith', title: 'Founder, InnovateRW', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b812?w=100&h=100&fit=crop&crop=face' },
      { name: 'Mike Johnson', title: 'CTO, Digital Rwanda', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
    ]
  },
  2: {
    title: 'East Africa Healthcare Conference',
    date: 'April 8-10, 2024',
    time: '8:30 AM - 5:30 PM',
    location: 'Radisson Blu Hotel',
    attendees: '800+',
    category: 'Healthcare',
    price: '$199',
    organizer: 'Healthcare Rwanda',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
    status: 'Coming Soon',
    description: 'Advancing healthcare innovation across East Africa with leading medical professionals and researchers. Focus on digital health, medical technology, and healthcare accessibility.',
    agenda: [
      { time: '8:30 AM', title: 'Registration & Breakfast' },
      { time: '9:30 AM', title: 'Opening Address: Healthcare in Digital Age' },
      { time: '11:00 AM', title: 'Medical Technology Showcase' },
      { time: '12:30 PM', title: 'Lunch & Networking' },
      { time: '2:00 PM', title: 'Panel: Telemedicine Solutions' },
      { time: '3:30 PM', title: 'Workshop: AI in Healthcare' },
      { time: '5:00 PM', title: 'Closing Ceremony' }
    ],
    speakers: [
      { name: 'Dr. Sarah Wilson', title: 'Chief Medical Officer', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face' },
      { name: 'Dr. James Mugabo', title: 'Rwanda Health Ministry', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face' }
    ]
  }
  // Add more event details as needed
};

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventId = parseInt(id || '1');
  const event = eventDetails[eventId as keyof typeof eventDetails];

  if (!event) {
    return (
      <PageLayout title="Event Not Found" description="The requested event could not be found.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h2>
          <Button onClick={() => navigate('/calendar')}>Back to Calendar</Button>
        </div>
      </PageLayout>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: 'bg-blue-600',
      Healthcare: 'bg-green-600',
      Tourism: 'bg-purple-600',
      Finance: 'bg-orange-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <PageLayout title={event.title} description={event.description}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate('/calendar')}
          className="mb-6 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Calendar
        </Button>

        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6 md:p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Badge className={`${getCategoryColor(event.category)} text-white`}>
                  {event.category}
                </Badge>
                <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                  {event.status}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
              <p className="text-lg opacity-90">{event.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Attendees</p>
                      <p className="text-gray-600">{event.attendees} expected</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium min-w-fit">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Featured Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{speaker.name}</h4>
                        <p className="text-gray-600">{speaker.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="text-2xl font-bold text-blue-600">{event.price}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Organizer</p>
                    <p className="text-gray-600">{event.organizer}</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Register Now
                </Button>
                <Button variant="outline" className="w-full">
                  Download Brochure
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Need More Information?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Contact our events team for more details about this event.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Email:</strong> events@rcb.rw
                  </p>
                  <p className="text-sm">
                    <strong>Phone:</strong> +250 788 123 456
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EventDetail;
