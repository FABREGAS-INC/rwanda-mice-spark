
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Search, ArrowUp, Send } from 'lucide-react';
import { getResponse } from '@/data/chatbotKnowledge';

const quickQuestions = [
  'What venues are available for 500+ people?',
  'Do I need a visa to visit Rwanda?',
  'What are the accommodation options in Kigali?',
  'How do I get from the airport to the city center?',
  'What are the best months for hosting events?',
  'Can you help me plan catering for my event?'
];

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your Rwanda Convention Bureau AI assistant. I can help you with venue selection, logistics, visas, and event planning. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (message: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response with actual knowledge base
    setTimeout(() => {
      const response = getResponse(message);
      
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);

    setInputValue('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
    }
  };

  const formatMessage = (content: string) => {
    // Convert markdown-style formatting to HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/🏢|🎫|🏨|🚗|🌤️|🎯|🍽️|📋|☀️|🌧️|🌡️|🏔️|🌟|🛬|📱|💻|💰|⏱️/g, '<span style="font-size: 1.1em;">$&</span>')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('<br/>');
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
                      className={`max-w-[85%] p-3 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: formatMessage(message.content) 
                        }} 
                      />
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 p-3 rounded-lg text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
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
                      className="text-xs h-6 px-2 hover:bg-blue-100"
                      onClick={() => sendMessage(question)}
                    >
                      {question.slice(0, 20)}...
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
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    size="sm"
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                  >
                    <Send className="h-4 w-4" />
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
