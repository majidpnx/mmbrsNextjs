import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'API Docs', 'Integrations'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Resources: ['Blog', 'Help Center', 'Community', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR']
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Telegram Channel?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful creators and marketers who trust Membersgram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                Membersgram
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                The most powerful platform for growing and managing your Telegram communities.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Membersgram. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-gray-400">
              Made with ❤️ for the Telegram community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;