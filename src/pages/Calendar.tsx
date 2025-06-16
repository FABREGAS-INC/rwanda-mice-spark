
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Calendar = () => {
  return (
    <PageLayout 
      title="Event Calendar"
      description="Stay updated with upcoming events and conferences in Rwanda."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center text-lg">
              Interactive event calendar will be displayed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Calendar;
