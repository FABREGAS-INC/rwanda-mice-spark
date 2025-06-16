
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const KeyAttractions = () => {
  return (
    <PageLayout 
      title="Key Attractions"
      description="Discover Rwanda's most captivating destinations and experiences."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Must-Visit Attractions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center text-lg">
              Featured attractions and experiences will be showcased here.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default KeyAttractions;
