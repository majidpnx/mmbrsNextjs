import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Users } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

const Hero = () => {
 
  return (
      <section className="bg-white py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Buy Telegram Members <br /> & Grow Faster in 2025
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get real, active Telegram users. No bots. No fake numbers. Just fast & reliable growth for your channel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold shadow hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-base font-semibold hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1">
          
              <Image src="/hero1.png" alt="Phone Mockup" width={3000} height={3000} className='rounded-2xl' />
             

          </div>
        </div>
      </section>
    
  );
};

export default Hero;