
import { PageLayout } from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MediaEnquiries = () => {
  return (
    <PageLayout 
      title="Media Enquiries"
      description="Contact our media team for press information and interviews."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-gradient text-center">Media Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center text-lg">
              Media enquiry form and contact information will be displayed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default MediaEnquiries;
