
import { PageLayout } from '@/components/PageLayout';
import { EventCalendar } from '@/components/EventCalendar';
import { InteractiveCalendarView } from '@/components/InteractiveCalendarView';

const Calendar = () => {
  return (
    <PageLayout 
      title="Event Calendar"
      description="Stay updated with upcoming events and conferences in Rwanda."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 section-with-imigongo-1">
         {/* Interactive Calendar View */}
        <InteractiveCalendarView />
        
        {/* Upcoming Events with sliding motion */}
        <div className="section-with-imigongo-2">
          <EventCalendar />
        </div>
      </div>
    </PageLayout>
  );
};

export default Calendar;
