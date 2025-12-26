
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBotResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I'm having trouble connecting to my brain right now. Please call us at 212-687-1662 for immediate assistance!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm experiencing a technical hiccup. Please call our Manhattan office directly at 212-687-1662 so we can help you right away!";
  }
};
