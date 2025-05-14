// components/FaqAccordion.js
'use client';

import { useState } from 'react';

export default function FaqAccordion({ data }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section data-aos="zoom-out" className="w-[80%] mx-auto md:w-[80%] lg:w-[50%]">
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full  flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
            >
              {item.question}
              <span>{openIndexes.includes(index) ? '-' : '+'}</span>
            </button>
            {openIndexes.includes(index) && (
              <div data-aos="zoom-in" className="p-4 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">View all questions</div>
    </section>
  );
}
