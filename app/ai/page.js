"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
  const [Prompt, setPrompt] = useState('');
  const [Result, setResult] = useState(null);

  const sendMessage = async () => {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: Prompt }
        ]
      }),
    });

    const data = await res.json();
    setResult(data.result.data[0].url);
    setPrompt('');
  };

  return (
    <div className='w-[50%] m-auto mt-[24px]'>
      <div className="relative w-full mt-[24px]">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={Prompt}
          type="text"
          placeholder=" "
          id="search"
          className="peer w-full h-[48px] rounded-[8px] border border-[#E5E5E5] text-[16px] font-normal text-[#212121] pl-[16px] pt-[1px] focus:outline-none focus:ring-0 focus:border-[#1976D2]"
        />
        <label
          htmlFor="search"
          className="absolute text-[#999] text-[14px] left-[16px] top-[14px] transition-all peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-[#999] peer-focus:top-[-8px] peer-focus:text-[14px] peer-focus:text-[#1976D2] bg-white px-[4px]"
        >
          Search in questions
        </label>
      </div>

      <button onClick={sendMessage} className='border-amber-100 bg-[#f5f5f5] w-full mt-[24px]'>
        send
      </button>

      <div className="mt-4">
        {Result ? (
          <Image src={Result} alt="result" width={400} height={300} />
        ) : (
          'no result'
        )}
      </div>
    </div>
  );
};

export default Page;
