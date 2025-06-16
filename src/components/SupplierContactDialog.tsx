
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

interface Company {
  name: string;
  email: string;
  phone: string;
  website?: string;
  address?: string;
}

interface SupplierContactDialogProps {
  category: string;
  description: string;
  companies: Company[];
  children: React.ReactNode;
}

export const SupplierContactDialog = ({ category, description, companies, children }: SupplierContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient">{category}</DialogTitle>
          <p className="text-gray-600">{description}</p>
        </DialogHeader>
        <div className="space-y-4 mt-6">
          {companies.map((company, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg text-gray-900 mb-4">{company.name}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <a 
                        href={`mailto:${company.email}`} 
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        {company.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <a 
                        href={`tel:${company.phone}`} 
                        className="text-gray-700 hover:text-green-600 text-sm"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {company.website && (
                      <div className="flex items-center space-x-3">
                        <Globe className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <a 
                          href={company.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:underline text-sm break-all"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                    {company.address && (
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{company.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
