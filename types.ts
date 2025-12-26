
export interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
}

export interface ServiceItem {
  icon: string;
  title: string;
  link: string;
}
