import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  // (same testimonials as before)
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Event Director',
    company: 'Global Tech Summit',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332d2f8?w=150&h=150&fit=crop&crop=face',
    content: 'Rwanda exceeded all our expectations. The infrastructure is world-class, the people are incredibly welcoming, and the natural beauty provided an inspiring backdrop for our international conference.',
    event: 'Tech Summit 2023',
    attendees: '1,500 delegates'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Conference Organizer',
    company: 'African Business Forum',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'The Rwanda Convention Bureau team was exceptional. Their attention to detail and local expertise made our event seamless. Kigali has become our preferred destination for annual conferences.',
    event: 'Business Forum 2023',
    attendees: '800 executives'
  },
  {
    id: 3,
    name: 'Dr. Amara Okafor',
    title: 'Medical Conference Chair',
    company: 'East Africa Health Alliance',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    content: 'The combination of modern facilities and cultural richness made our medical conference truly memorable. Rwanda\'s commitment to innovation in healthcare was inspiring for all attendees.',
    event: 'Healthcare Innovation 2023',
    attendees: '600 medical professionals'
  },
  {
    id: 4,
    name: 'James Williams',
    title: 'Corporate Events Manager',
    company: 'International Finance Corp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Rwanda surprised us with its sophistication and efficiency. The visa process was smooth, venues were top-notch, and the hospitality was extraordinary. We\'ll definitely be back.',
    event: 'Finance Summit 2023',
    attendees: '400 finance leaders'
  }
];

export const TestimonialsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-yellow-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why event organizers from around the world choose Rwanda for their 
            most important gatherings and return year after year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.event}
                  </Badge>
                  <div className="text-xs text-gray-500">
                    {testimonial.attendees}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">See Rwanda in Action</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Watch highlights from recent successful events and discover why Rwanda is becoming 
            Africa's premier MICE destination.
          </p>
          <div className="relative bg-black/20 rounded-xl p-8 mb-6">
            <div className="aspect-video bg-black/30 rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source src="/videos/testmonial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="text-sm text-blue-100">
            Video testimonials from international event organizers and attendees
          </p>
        </div>
      </div>
    </section>
  );
};
