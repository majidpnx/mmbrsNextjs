import React from 'react';
import { Bot, BarChart3, Target, Zap, Shield, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Growth',
      description: 'Smart algorithms analyze your content and suggest optimal posting times and strategies.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into member behavior, engagement rates, and growth patterns.'
    },
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Create and manage targeted marketing campaigns to attract your ideal audience.'
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Automate welcome messages, member verification, and content scheduling.'
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Built-in spam protection and compliance tools to keep your channel secure.'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Powerful moderation tools and member management features.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="text-blue-600">Scale Fast</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed specifically for Telegram growth and community management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;