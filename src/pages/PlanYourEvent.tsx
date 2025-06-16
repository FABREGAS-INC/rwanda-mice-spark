
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Mail, Phone, Users, MapPin, Clock } from 'lucide-react';

const PlanYourEvent = () => {
  const suppliers = [
    {
      category: 'Professional Conference Organizers (PCO)',
      description: 'Event Management Companies',
      icon: Users
    },
    {
      category: 'Destination Management Companies (DMCs)',
      description: 'Focusing on Incentive Travel',
      icon: MapPin
    },
    {
      category: 'Sound System & AV',
      description: 'Event Production companies',
      icon: Clock
    },
    {
      category: 'Construction & Exhibition Booths',
      description: 'Supply of exhibition booths',
      icon: Users
    },
    {
      category: 'Translation Services',
      description: 'Equipment & service',
      icon: Users
    },
    {
      category: 'Marketing Communication',
      description: 'Advertising services',
      icon: Users
    },
    {
      category: 'Transport Services',
      description: 'Professional transportation',
      icon: Users
    },
    {
      category: 'Printing and PR',
      description: 'Print and public relations',
      icon: Users
    }
  ];

  return (
    <PageLayout 
      title="Plan Your Event"
      description="Let us be your first point of contact to assist you organize memorable events. Plan your event with us."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information */}
        <div className="mb-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Get Started Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:sales.marketing@rcb.rw" className="text-lg text-blue-600 hover:underline">
                  sales.marketing@rcb.rw
                </a>
              </div>
              <p className="text-gray-600">
                Our team is ready to help you create an unforgettable event experience in Rwanda.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Event Planning Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <span>Event Planning Form</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input id="organization" placeholder="Your organization name" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+250 XXX XXX XXX" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="incentive">Incentive Travel</SelectItem>
                      <SelectItem value="exhibition">Exhibition</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="attendees">Expected Attendees</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of attendees" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50</SelectItem>
                        <SelectItem value="51-100">51-100</SelectItem>
                        <SelectItem value="101-250">101-250</SelectItem>
                        <SelectItem value="251-500">251-500</SelectItem>
                        <SelectItem value="501-1000">501-1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Estimated Budget (USD)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Preferred Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="endDate">Preferred End Date</Label>
                    <Input id="endDate" type="date" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="requirements">Special Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Please describe any special requirements for your event..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Submit Event Request
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Suppliers Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Our Trusted Suppliers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  We work with a network of professional suppliers to ensure your event runs smoothly.
                </p>
                <div className="space-y-4">
                  {suppliers.map((supplier, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <supplier.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{supplier.category}</h4>
                        <p className="text-sm text-gray-600">{supplier.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>Need Immediate Assistance?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our event planning team is available to discuss your requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">sales.marketing@rcb.rw</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="text-sm">+250 788 XXX XXX</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Schedule a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PlanYourEvent;
