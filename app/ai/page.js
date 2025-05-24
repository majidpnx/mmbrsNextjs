'use client';
import { useState, useRef, useEffect } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', type: 'text', content: '' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', type: 'text', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    let response;
    if (input.startsWith('!image')) {
      const prompt = input.replace('!image', '').trim();
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, type: 'image' }),
      });
      const data = await res.json();
      response = { role: 'assistant', type: 'image', content: data.result.data[0].url };
    } else {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          type: 'text'
        }),
      });
      const data = await res.json();
      response = { role: 'assistant', type: 'text', content: data.result.choices?.[0]?.message?.content || 'خطا!' };
    }

    setMessages((prev) => [...prev, response]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto p-4 h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto border rounded-lg p-4 space-y-2 bg-white shadow">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] text-right ${
              msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
            }`}
          >
            {msg.type === 'image' ? (
              <img src={msg.content} alt="Generated" className="rounded-md max-w-full h-auto" />
            ) : (
              <pre className="whitespace-pre-wrap">{msg.content}</pre>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="پیام بنویس یا !image برای تصویر"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}
