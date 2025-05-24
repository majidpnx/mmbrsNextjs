"use client"
import { Button } from "./components/button";
import { FAQ } from "./components/faq";
import { MoveRight } from "lucide-react";
import { useState ,useEffect} from 'react';
import { Menu, X } from 'lucide-react';
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
   // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);
  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <img src="/logo.png" alt="Membersgram Logo" className="h-8 w-auto" /> */}
            <span className="font-bold text-lg text-gray-800">Membersgram</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
            <a href="#faqs" className="text-gray-600 hover:text-blue-600 transition">FAQs</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </nav>

          {/* Hamburger Icon */}
          <button
            className="z-50 p-2 md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a
            href="#get-started"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>

      {/* Hero Section */}

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
            <img
              src="/hero-telegram-growth.png"
              alt="Telegram Channel Growth Illustration"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-12">Why Choose Membersgram?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Real Users, No Bots",
                desc: "We connect your channel to genuine users who care about your content.",
              },
              {
                title: "Targeted Reach",
                desc: "Customize your audience by country, language, or niche.",
              },
              {
                title: "Instant Start",
                desc: "Your campaign begins within hours of submitting your channel.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white shadow p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-10">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              "Choose your promotion package",
              "Target your audience by country or niche",
              "Watch real subscribers join in days"
            ].map((step, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl">
                <span className="text-blue-600 font-bold text-xl">Step {i + 1}</span>
                <p className="mt-2 text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 mb-4">Trusted by Channels in:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {Array(12).fill().map((_, i) => (
              <div key={i} className="w-12 h-12 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">FAQs</h3>
        <FAQ question="Are members real people?" answer="Yes. We only deliver authentic users who match your target." />
        <FAQ question="How fast is delivery?" answer="Most campaigns start within a few hours and complete in 2-3 days." />
        <FAQ question="Is it safe?" answer="Yes. We use Telegram-compliant promotion methods." />
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © 2025 Membersgram. All rights reserved.
      </footer>
    </div>
  );
}
