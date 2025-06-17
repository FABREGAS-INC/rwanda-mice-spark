
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'Africa Innovation Summit 2024',
    date: 'March 15-17, 2024',
    location: 'Kigali Convention Centre',
    attendees: '2,500+',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1587985628949-bfe6632bea94?w=300&h=200&fit=crop',
    status: 'Registration Open',
    description: 'Join Africa\'s premier innovation summit featuring keynotes from tech leaders, startup showcases, and networking opportunities.',
    price: '$299',
    organizer: 'Rwanda Tech Hub'
  },
  {
    id: 2,
    title: 'East Africa Healthcare Conference',
    date: 'April 8-10, 2024',
    location: 'Radisson Blu Hotel',
    attendees: '800+',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    status: 'Coming Soon',
    description: 'Advancing healthcare innovation across East Africa with leading medical professionals and researchers.',
    price: '$199',
    organizer: 'Healthcare Rwanda'
  },
  {
    id: 3,
    title: 'Sustainable Tourism Forum',
    date: 'May 20-22, 2024',
    location: 'Intare Conference Arena',
    attendees: '1,200+',
    category: 'Tourism',
    image: 'https://images.unsplash.com/photo-1464822759844-d150ad6fb1b5?w=300&h=200&fit=crop',
    status: 'Planning Phase',
    description: 'Exploring sustainable tourism practices and eco-friendly initiatives in Rwanda and beyond.',
    price: '$149',
    organizer: 'Rwanda Tourism Board'
  },
  {
    id: 4,
    title: 'International Finance Summit',
    date: 'June 12-14, 2024',
    location: 'Kigali Marriott Hotel',
    attendees: '600+',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
    status: 'Registration Open',
    description: 'Bringing together financial leaders to discuss emerging markets and investment opportunities.',
    price: '$399',
    organizer: 'Rwanda Finance Association'
  },
  {
    id: 5,
    title: 'Digital Africa Conference',
    date: 'July 5-7, 2024',
    location: 'Kigali Convention Centre',
    attendees: '1,800+',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop',
    status: 'Early Bird',
    description: 'Accelerating digital transformation across the African continent.',
    price: '$249',
    organizer: 'Digital Rwanda Initiative'
  }
];

export const EventCalendar = () => {
  const navigate = useNavigate();

  const handleLearnMore = (eventId: number) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <section id="events" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-blue-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join world-class conferences and exhibitions that shape industries and foster innovation 
            in the heart of Africa.
          </p>
        </div>

        {/* Sliding Events Container */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-slide-left space-x-6" style={{
            animation: 'slide-left 30s linear infinite',
            width: `${upcomingEvents.length * 320}px`
          }}>
            {/* Duplicate events for seamless loop */}
            {[...upcomingEvents, ...upcomingEvents].map((event, index) => (
              <Card key={`${event.id}-${index}`} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white flex-shrink-0 w-80">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge 
                      variant={event.status === 'Registration Open' ? 'default' : 'secondary'}
                      className={event.status === 'Registration Open' ? 'bg-green-600' : ''}
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-white/90 text-gray-800">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {event.date}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    size="sm"
                    onClick={() => handleLearnMore(event.id)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Host Your Event in Rwanda?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let our experienced team help you plan an unforgettable event that leverages Rwanda's 
            unique advantages and world-class infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Download Event Guide
            </Button>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
};
