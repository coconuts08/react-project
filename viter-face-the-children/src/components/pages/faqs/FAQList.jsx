import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import faqs from './FAQList-data';


const FAQList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-10 md:pt-20">
        <h4 className="text-sm text-orange-500 font-semibold uppercase mb-2 tracking-wide">
          Your Questions, Our Clarity
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Commitment to Child Development
        </h2>
      </div>

      <div className="space-y-4 relative">
        {faqs.map((faq, index) => (
          <div key={index} className="relative md:flex md:items-start">
            {/* Question */}
            <button
              onClick={() => handleClick(index)}
              className={`
                w-full md:w-1/2 text-left px-9 py-4 rounded-md transition
                font-medium  border border-gray-200 hover:bg-blue-300 hover:border-blue-300 hover:text-white flex
                ${activeIndex === index ? 'bg-white border-primary  text-blue-400' : ''}
                relative
              `}
            >
              <span className="mr-4 font-bold opacity-50">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="inline-block w-[calc(100%-2rem)]">{faq.question}</span>
              <ChevronRight
                className={`w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${
                  activeIndex === index ? ' text-blue-400' : ''
                }`}
              />
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div
                className={`
                  md:absolute md:left-[calc(50%+1rem)] md:top-0
                  mt-4 md:mt-0 w-full md:w-[800px]
                  border border-blue-300 bg-blue-50 p-4 rounded text-gray-700 shadow-lg z-10
                `}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQList;
