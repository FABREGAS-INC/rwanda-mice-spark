
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutDestination = () => {
  return (
    <PageLayout 
      title="About the Destination"
      description="Discover Rwanda - the Land of a Thousand Hills and endless opportunities."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Rwanda Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center text-lg">
              Content for Rwanda destination overview will be added here.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default AboutDestination;
