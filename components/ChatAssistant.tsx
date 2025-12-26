
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { generateBotResponse } from '../services/geminiService';
import { PHONE_NUMBER } from '../constants';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      text: "Hi! I'm your Roto-Rooter assistant. How can I help you with your plumbing or drain needs in Manhattan today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Prepare history for Gemini
    const history = messages.map(msg => ({
      role: (msg.role === 'bot' ? 'model' : 'user') as 'user' | 'model',
      parts: [{ text: msg.text }]
    }));

    const botText = await generateBotResponse(inputValue, history);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'bot',
      text: botText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col mb-4 overflow-hidden border border-gray-100 transition-all transform animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#002855] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img 
                  src="https://www.rotorooter.com/favicon.ico" 
                  alt="Roto-Rooter Logo" 
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">Manhattan Smart Help</h3>
                <div className="flex items-center gap-1.5 text-[10px] opacity-80">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Active Now
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#e21a22] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-400 p-3 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1 shadow-sm">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can we help today?"
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e21a22]"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="bg-[#e21a22] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#c0161b] transition-colors disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
            <div className="mt-2 text-[10px] text-center text-gray-400">
              Need immediate help? Call <a href={`tel:${PHONE_NUMBER}`} className="font-bold text-[#e21a22]">{PHONE_NUMBER}</a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#e21a22] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group relative"
      >
        {isOpen ? (
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        ) : (
          <i className="fa-solid fa-comments text-2xl"></i>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white text-[#e21a22] text-[8px] font-bold items-center justify-center">1</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;
