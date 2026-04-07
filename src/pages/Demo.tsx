import React, { useState, useRef, useEffect } from "react";
import { Bot, Send, BrainCircuit, MessageSquareText, LineChart, Cpu, Sparkles, Moon } from "lucide-react";
import { getChatResponse } from "@/lib/gemini";
import Markdown from "react-markdown";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

const aiModels = [
  {
    id: "generative",
    name: "Generative AI",
    icon: BrainCircuit,
    description: "Generates personalized financial reports, insights, and custom content. It turns complex data into easy-to-understand narratives.",
    prompt: "You are the Generative AI for All Banks Pakistan. Your job is to create content, draft financial reports, and generate personalized insights. Be creative, detailed, and focus on content creation. When a user asks a question, generate a comprehensive and well-structured response."
  },
  {
    id: "conversational",
    name: "Conversational / Chatbot AI",
    icon: MessageSquareText,
    description: "Understands natural language (English, Urdu, and Roman Urdu) to provide 24/7 support and answer inquiries seamlessly.",
    prompt: "You are the Conversational AI for All Banks Pakistan. Your job is to be extremely empathetic, natural, and helpful in answering user queries. You fluently understand and can respond in English, Urdu, and Roman Urdu. Act like a highly advanced, human-like chatbot. Keep the conversation flowing naturally."
  },
  {
    id: "predictive",
    name: "Analytical / Predictive AI",
    icon: LineChart,
    description: "Analyzes data to forecast market trends, PKR exchange rates, and potential risks for businesses and overseas Pakistanis.",
    prompt: "You are the Analytical and Predictive AI for All Banks Pakistan. Your job is to analyze numbers, provide forecasts (including PKR forex rates), and assess risks. Be highly logical, data-driven, precise, and focus on predictions and probabilities."
  },
  {
    id: "agentic",
    name: "Agentic / Task-performing AI",
    icon: Cpu,
    description: "Autonomously executes tasks like Raast instant payments, utility bill payments, and payroll management.",
    prompt: "You are the Agentic Task-performing AI for All Banks Pakistan. Your job is to execute tasks like Raast transfers and bill payments. When a user asks you to do something, confirm the details and simulate executing the task autonomously. Focus on action, execution, and confirmation."
  },
  {
    id: "islamic",
    name: "Islamic Finance AI Advisor",
    icon: Moon,
    description: "Analyzes investments and transactions to ensure strict compliance with Shariah law and Islamic banking principles.",
    prompt: "You are the Islamic Finance AI Advisor for All Banks Pakistan. Your job is to ensure all financial advice and transactions are Shariah-compliant. You understand concepts like Mudarabah, Murabaha, and Zakat. Provide guidance based strictly on Islamic banking principles."
  }
];

export default function Demo() {
  const [selectedModel, setSelectedModel] = useState(aiModels[0]);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "bot", content: `Hello! I am the **${aiModels[0].name}**. How can I assist you today?` },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleModelChange = (model: typeof aiModels[0]) => {
    setSelectedModel(model);
    setMessages([
      { id: Date.now().toString(), role: "bot", content: `Switched to **${model.name}**. How can I help you?` }
    ]);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    const newUserMsg: Message = { id: Date.now().toString(), role: "user", content: userText };
    
    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role === 'bot' ? 'model' : 'user',
        content: msg.content
      })) as { role: 'user' | 'model', content: string }[];

      const responseText = await getChatResponse(history, userText, selectedModel.prompt);

      setMessages((prev) => [...prev, { 
        id: Date.now().toString(), 
        role: "bot", 
        content: responseText || "I'm sorry, I couldn't process that request." 
      }]);
    } catch (error) {
      setMessages((prev) => [...prev, { 
        id: Date.now().toString(), 
        role: "bot", 
        content: "I'm currently experiencing technical difficulties. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)] py-12">
      <Helmet>
        <title>Interactive AI Demo | All Banks</title>
        <meta name="description" content="Experience our 4 distinct AI models: Generative, Conversational, Analytical, and Agentic AI." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Interactive AI Demo</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Select one of our specialized AI models below to see how they differ and interact with them in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 h-[700px]">
          {/* Left Sidebar - AI Selection */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4 overflow-y-auto">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-600" /> Choose AI Model
            </h2>
            
            {aiModels.map(model => {
              const isSelected = selectedModel.id === model.id;
              return (
                <button 
                  key={model.id}
                  onClick={() => handleModelChange(model)} 
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all duration-200 group", 
                    isSelected 
                      ? "border-blue-600 bg-blue-50 shadow-md ring-1 ring-blue-600" 
                      : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn("p-2 rounded-lg", isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 group-hover:bg-blue-200")}>
                      <model.icon className="w-5 h-5" />
                    </div>
                    <h3 className={cn("font-semibold", isSelected ? "text-blue-900" : "text-slate-900")}>
                      {model.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {model.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Side - Chat Interface */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-slate-900 p-5 text-white flex items-center gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <selectedModel.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{selectedModel.name}</h3>
                <p className="text-sm text-slate-300">Powered by Abdul Ahad</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex gap-3", msg.role === "user" ? "justify-end" : "justify-start")}>
                  {msg.role === "bot" && (
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-auto mb-auto border border-blue-200">
                      <selectedModel.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "p-4 rounded-2xl max-w-[85%] text-sm shadow-sm",
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : "bg-white border border-slate-200 text-slate-800 rounded-tl-sm"
                    )}
                  >
                    {msg.role === "user" ? (
                      <span className="whitespace-pre-wrap">{msg.content}</span>
                    ) : (
                      <div className="markdown-body">
                        <Markdown
                          components={{
                            p: ({node, ...props}) => <p className="mb-3 last:mb-0 leading-relaxed" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-3 space-y-1" {...props} />,
                            li: ({node, ...props}) => <li className="" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-semibold text-slate-900" {...props} />,
                            a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                          }}
                        >
                          {msg.content}
                        </Markdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 border border-blue-200">
                    <selectedModel.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 rounded-tl-sm shadow-sm flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-200 flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask the ${selectedModel.name}...`}
                disabled={isTyping}
                className="flex-1 px-5 py-3 bg-slate-100 border-transparent rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-sm"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
