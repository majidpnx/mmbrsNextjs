import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Digital Marketing Director',
      company: 'TechFlow',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b93c?w=150&h=150&fit=crop&crop=face',
      content: 'Membersgram helped us grow our Telegram channel from 500 to 15,000 members in just 3 months. The analytics are incredibly detailed.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The automation features saved us hours every week. Our engagement rates doubled since we started using their AI recommendations.',
      rating: 5
    },
    {
      name: 'Emily Thompson',
      role: 'Content Creator',
      company: 'Creative Minds',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Best investment for my content business. The growth has been consistent and the community management tools are top-notch.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by{' '}
            <span className="text-blue-600">Thousands</span>{' '}
            of Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {"Don't just take our word for it. Here's what our customers say about their growth journey."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  width={12}
                  height={12}
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;