
import { PageLayout } from '@/components/PageLayout';
import { VenueDirectory } from '@/components/VenueDirectory';
import { EventCalendar } from '@/components/EventCalendar';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ChatBot } from '@/components/ChatBot';

const Index = () => {
  return (
    <PageLayout showHero={true}>
      <div className="section-with-imigongo-1">
        <VenueDirectory />
      </div>
      <div className="section-with-imigongo-2">
        <EventCalendar />
      </div>
      <div className="section-with-imigongo-3">
        <TestimonialsSection />
      </div>
      <ChatBot />
    </PageLayout>
  );
};

export default Index;
