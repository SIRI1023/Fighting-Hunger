import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Truck, Users, Gavel } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 'agriculture',
      icon: <Leaf className="w-12 h-12" />,
      title: 'Sustainable Agriculture',
      description: 'Investing in eco-friendly farming practices to boost food production without harming the environment.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80',
      details: [
        'Promoting organic farming methods',
        'Supporting local seed banks',
        'Implementing water conservation techniques',
        'Developing climate-resilient crops',
      ],
    },
    {
      id: 'distribution',
      icon: <Truck className="w-12 h-12" />,
      title: 'Food Distribution',
      description: 'Streamlining distribution networks to reduce food waste and ensure accessibility.',
      image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80',
      details: [
        'Optimizing supply chain logistics',
        'Reducing food waste through better storage',
        'Creating efficient distribution networks',
        'Implementing cold chain solutions',
      ],
    },
    {
      id: 'farmers',
      icon: <Users className="w-12 h-12" />,
      title: 'Supporting Farmers',
      description: 'Providing smallholder farmers with training, resources, and fair market access.',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80',
      details: [
        'Training in modern farming techniques',
        'Access to agricultural inputs',
        'Market linkage programs',
        'Financial literacy support',
      ],
    },
    {
      id: 'policy',
      icon: <Gavel className="w-12 h-12" />,
      title: 'Policy Advocacy',
      description: 'Developing and supporting policies to stabilize food prices and promote affordability.',
      image: 'https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?auto=format&fit=crop&q=80',
      details: [
        'Research and policy development',
        'Stakeholder engagement',
        'Public awareness campaigns',
        'Government collaboration',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical Actions for a Hunger-Free World
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`space-y-6 ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}
              >
                <div className="text-[#34A853]">{solution.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                <p className="text-gray-600 text-lg">{solution.description}</p>
                <ul className="space-y-4">
                  {solution.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#34A853] mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={index % 2 === 1 ? 'md:col-start-1' : ''}
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}