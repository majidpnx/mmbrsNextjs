"use client"

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How quickly can I see results?',
      answer: 'Most users see measurable growth within the first week. Significant results typically appear within 2-4 weeks, depending on your current channel size and engagement levels.'
    },
    {
      question: 'Is my Telegram channel data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption and follow strict security protocols. Your data is never shared with third parties and you maintain full control over your channel.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features and see the results before making any commitment.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your service will continue until the end of your billing period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for enterprise customers.'
    },
    {
      question: 'Do you provide customer support?',
      answer: 'Yes! We offer email support for all plans, priority support for Growth plans, and 24/7 dedicated support for Enterprise customers. Our average response time is under 2 hours.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Membersgram and how it works.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;