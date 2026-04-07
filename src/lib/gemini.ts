import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini API client
// The API key is automatically injected by AI Studio via vite.config.ts define
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export async function getChatResponse(
  history: { role: 'user' | 'model', content: string }[], 
  newMessage: string,
  customSystemInstruction?: string
) {
  if (!apiKey) {
    return "Error: Gemini API key is missing. Please configure it in the environment.";
  }

  try {
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const defaultInstruction = "You are a helpful, professional, and knowledgeable AI banking assistant for 'All Banks Pakistan'. You help users with financial questions, navigating the site, understanding AI banking features, and general banking inquiries. You are knowledgeable about State Bank of Pakistan (SBP) regulations, Raast payments, Roshan Digital Accounts (RDA), and Islamic Banking (Shariah compliance). You can understand and respond in English, Urdu, and Roman Urdu. Keep your responses concise, friendly, and easy to read. Use formatting like bullet points when listing options.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: customSystemInstruction || defaultInstruction,
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}
