
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Search, ArrowUp } from 'lucide-react';

const quickQuestions = [
  'What venues are available for 500+ people?',
  'Do I need a visa to visit Rwanda?',
  'What are the accommodation options in Kigali?',
  'How do I get from the airport to the city center?',
  'What are the best months for hosting events?',
  'Can you help me plan catering for my event?'
];

const chatResponses = {
  venues: 'For 500+ delegates, I recommend the Kigali Convention Centre (2,600 capacity), Intare Conference Arena (5,000 capacity), or Radisson Blu Hotel (1,200 capacity). All feature modern AV equipment and catering services.',
  visa: 'Most visitors can obtain a visa on arrival or apply for an e-visa online. The process typically takes 2-3 business days. I can connect you with our visa assistance team for specific requirements.',
  accommodation: 'Kigali offers excellent accommodation from luxury hotels like Marriott and Radisson Blu to boutique lodges. Most venues have partnerships with nearby hotels for group bookings.',
  transport: 'Kigali International Airport is 10km from the city center. We can arrange airport transfers, and taxi services are readily available. Many hotels offer complimentary airport shuttles.',
  timing: 'Rwanda has a pleasant climate year-round. The dry seasons (June-September and December-February) are ideal for outdoor activities and exhibitions.',
  catering: 'Our partner venues offer diverse catering options including international cuisine, local Rwandan specialties, and dietary accommodations. We can arrange tastings and custom menus.'
};

export const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your Rwanda Convention Bureau AI assistant. I can help you with venue selection, logistics, visas, and event planning. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const sendMessage = (message) => {
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      let response = "Thank you for your question! I'm here to help with information about venues, logistics, visas, and event planning in Rwanda. For specific requirements, I can connect you with our expert team.";
      
      // Simple keyword matching for demo
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('venue') || lowerMessage.includes('capacity')) {
        response = chatResponses.venues;
      } else if (lowerMessage.includes('visa')) {
        response = chatResponses.visa;
      } else if (lowerMessage.includes('hotel') || lowerMessage.includes('accommodation')) {
        response = chatResponses.accommodation;
      } else if (lowerMessage.includes('airport') || lowerMessage.includes('transport')) {
        response = chatResponses.transport;
      } else if (lowerMessage.includes('weather') || lowerMessage.includes('month') || lowerMessage.includes('time')) {
        response = chatResponses.timing;
      } else if (lowerMessage.includes('catering') || lowerMessage.includes('food')) {
        response = chatResponses.catering;
      }

      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`transition-all duration-300 ${isMinimized ? 'w-16 h-16' : 'w-96 h-[500px]'} shadow-xl border-0 bg-gradient-to-br from-blue-600 to-green-600`}>
        {isMinimized ? (
          <div 
            onClick={() => setIsMinimized(false)}
            className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-white/20 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowUp className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        ) : (
          <>
            <CardHeader 
              className="pb-3 text-white cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => setIsMinimized(true)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Rwanda AI Assistant</CardTitle>
                  <p className="text-sm text-blue-100">Ask me about venues, visas, logistics</p>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  Online
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="p-3 bg-gray-50 border-t">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 px-2"
                      onClick={() => sendMessage(question)}
                    >
                      {question.slice(0, 25)}...
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-3 bg-white border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about venues, visas, logistics..."
                    className="flex-1 text-sm"
                  />
                  <Button 
                    type="submit" 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};
