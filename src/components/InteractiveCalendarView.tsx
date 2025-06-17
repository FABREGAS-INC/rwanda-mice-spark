import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const eventsByYear = {
  2024: {
    March: [
      { id: 1, title: 'Africa Innovation Summit 2024', date: '15-17', location: 'Kigali Convention Centre', category: 'Technology' },
      { id: 6, title: 'Women in Business Conference', date: '25-26', location: 'Radisson Blu Hotel', category: 'Business' }
    ],
    April: [
      { id: 2, title: 'East Africa Healthcare Conference', date: '8-10', location: 'Radisson Blu Hotel', category: 'Healthcare' }
    ],
    May: [
      { id: 3, title: 'Sustainable Tourism Forum', date: '20-22', location: 'Intare Conference Arena', category: 'Tourism' }
    ],
    June: [
      { id: 4, title: 'International Finance Summit', date: '12-14', location: 'Kigali Marriott Hotel', category: 'Finance' }
    ],
    July: [
      { id: 5, title: 'Digital Africa Conference', date: '5-7', location: 'Kigali Convention Centre', category: 'Technology' }
    ]
  },
  2025: {
    January: [
      { id: 7, title: 'New Year Innovation Kickoff', date: '15-16', location: 'Kigali Convention Centre', category: 'Technology' }
    ],
    February: [
      { id: 8, title: 'African Agricultural Summit', date: '10-12', location: 'Intare Conference Arena', category: 'Agriculture' }
    ],
    March: [
      { id: 9, title: 'East Africa Energy Conference', date: '20-22', location: 'Radisson Blu Hotel', category: 'Energy' }
    ],
    April: [
      { id: 10, title: 'Digital Banking Summit', date: '5-7', location: 'Kigali Marriott Hotel', category: 'Finance' }
    ],
    September: [
      { id: 11, title: 'Rwanda Innovation Week', date: '15-20', location: 'Multiple Venues', category: 'Technology' }
    ]
  },
  2026: {
    June: [
      { id: 12, title: 'Future of Africa Summit', date: '10-12', location: 'Kigali Convention Centre', category: 'Business' }
    ],
    October: [
      { id: 13, title: 'Climate Action Conference', date: '25-27', location: 'Intare Conference Arena', category: 'Environment' }
    ]
  }
};

export const InteractiveCalendarView = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const navigate = useNavigate();

  const years = Object.keys(eventsByYear).map(Number).sort();

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    setSelectedMonth(null);
  };

  const handleMonthClick = (month: string) => {
    setSelectedMonth(month);
  };

  const handleViewDetails = (eventId: number) => {
    navigate(`/event/${eventId}`);
  };

  const goBack = () => {
    if (selectedMonth) {
      setSelectedMonth(null);
    } else if (selectedYear) {
      setSelectedYear(null);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: 'bg-blue-600',
      Healthcare: 'bg-green-600',
      Tourism: 'bg-purple-600',
      Finance: 'bg-orange-600',
      Business: 'bg-gray-600',
      Agriculture: 'bg-yellow-600',
      Energy: 'bg-red-600',
      Environment: 'bg-emerald-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="mt-16">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl text-gradient">
              {!selectedYear && 'Event Calendar'}
              {selectedYear && !selectedMonth && `Events in ${selectedYear}`}
              {selectedYear && selectedMonth && `${selectedMonth} ${selectedYear} Events`}
            </CardTitle>
            {(selectedYear || selectedMonth) && (
              <Button variant="outline" onClick={goBack} className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {/* Year Selection View */}
          {!selectedYear && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {years.map((year) => (
                <Card
                  key={year}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-green-50"
                  onClick={() => handleYearClick(year)}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{year}</h3>
                    <p className="text-gray-600">
                      {Object.values(eventsByYear[year as keyof typeof eventsByYear]).flat().length} events
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Month Selection View */}
          {selectedYear && !selectedMonth && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(eventsByYear[selectedYear as keyof typeof eventsByYear] || {}).map(([month, events]) => (
                <Card
                  key={month}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-blue-50"
                  onClick={() => handleMonthClick(month)}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{month}</h3>
                    <p className="text-gray-600">{events.length} events</p>
                    <div className="mt-3 space-y-1">
                      {events.slice(0, 2).map((event) => (
                        <div key={event.id} className="text-xs text-gray-500 truncate">
                          {event.title}
                        </div>
                      ))}
                      {events.length > 2 && (
                        <div className="text-xs text-blue-600">+{events.length - 2} more</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Events List View */}
          {selectedYear && selectedMonth && (
            <div className="space-y-4">
              {(eventsByYear[selectedYear as keyof typeof eventsByYear]?.[selectedMonth as keyof typeof eventsByYear[2024]] || []).map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                          <Badge className={`${getCategoryColor(event.category)} text-white`}>
                            {event.category}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{selectedMonth} {event.date}, {selectedYear}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button
                          onClick={() => handleViewDetails(event.id)}
                          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
