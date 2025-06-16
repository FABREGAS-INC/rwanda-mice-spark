
import { PageLayout } from '@/components/PageLayout';
import { VenueDirectory } from '@/components/VenueDirectory';
import { EventCalendar } from '@/components/EventCalendar';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ChatBot } from '@/components/ChatBot';

const Index = () => {
  return (
    <PageLayout showHero={true}>
      <VenueDirectory />
      <EventCalendar />
      <TestimonialsSection />
      <ChatBot />
    </PageLayout>
  );
};

export default Index;
