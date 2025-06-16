
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PressRoom = () => {
  return (
    <PageLayout 
      title="Press Room"
      description="Official press releases and media materials."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Press Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center text-lg">
              Press room content and downloadable materials will be displayed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default PressRoom;
