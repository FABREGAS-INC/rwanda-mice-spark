
import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { VenueDirectory } from '@/components/VenueDirectory';
import { EventCalendar } from '@/components/EventCalendar';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ChatBot } from '@/components/ChatBot';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <HeroSection />
      <VenueDirectory />
      <EventCalendar />
      <TestimonialsSection />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
