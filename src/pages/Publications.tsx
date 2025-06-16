
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Publications = () => {
  return (
    <PageLayout 
      title="Publications"
      description="Browse our collection of guides, reports, and resources."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Our Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center text-lg">
              Publication library will be displayed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Publications;
