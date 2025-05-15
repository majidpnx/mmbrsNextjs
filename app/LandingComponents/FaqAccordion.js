// components/FaqAccordion.js
'use client';

import { useState } from 'react';
import UP from './../Images/Support/up.png'

import Image from 'next/image';
export default function FaqAccordion({ data }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section data-aos="zoom-out" className="w-[80%] mx-auto md:w-[80%] lg:w-[50%] ">
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full  flex justify-between items-center p-4 text-left text-[16px] font-medium text-[#212121] hover:bg-gray-100"
            >
              {item.question}
              <span >
               

                   <Image src={UP} className={`transition-transform  duration-600 ease-in-out transform ${openIndexes.includes(index) ? 'rotate-0' : 'rotate-180' }`} />
                
                  </span>
            </button>
            {openIndexes.includes(index) && (
              <div data-aos="zoom-in" className="p-4 text-[#616161] transition-all text-[12px]">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">View all questions</div>
    </section>
  );
}
