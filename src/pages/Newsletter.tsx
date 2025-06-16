
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Newsletter = () => {
  return (
    <PageLayout 
      title="Newsletter"
      description="Stay informed with our regular updates and industry insights."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Subscribe to Our Newsletter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center text-lg">
              Newsletter subscription and archive will be displayed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Newsletter;
