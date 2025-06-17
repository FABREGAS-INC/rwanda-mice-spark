
import { PageLayout } from '@/components/PageLayout';
import { EventCalendar } from '@/components/EventCalendar';
import { InteractiveCalendarView } from '@/components/InteractiveCalendarView';

const Calendar = () => {
  return (
    <PageLayout 
      title="Event Calendar"
      description="Stay updated with upcoming events and conferences in Rwanda."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events with sliding motion */}
        <EventCalendar />
        
        {/* Interactive Calendar View */}
        <InteractiveCalendarView />
      </div>
    </PageLayout>
  );
};

export default Calendar;
