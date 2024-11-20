import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Target, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We believe in treating everyone with dignity and respect.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our solutions reach communities worldwide.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Long-term solutions for lasting change.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building strong networks for collective action.',
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
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we can end hunger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
                alt="Volunteers working together"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                  Our mission is to tackle hunger and malnutrition by promoting
                  sustainable food systems and improving food accessibility for everyone.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg">
                  A world where every individual has access to nutritious and
                  affordable food, ensuring no one goes to bed hungry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide our work and shape our approach to fighting
              hunger worldwide.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-[#34A853] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-gray-600 text-lg">
                Since our inception, we've been dedicated to creating lasting change
                in communities worldwide. Through partnerships with local
                organizations, farmers, and volunteers, we've:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#34A853] mr-2">•</span>
                  Provided over 5 million meals to families in need
                </li>
                <li className="flex items-start">
                  <span className="text-[#34A853] mr-2">•</span>
                  Supported 500+ sustainable farming initiatives
                </li>
                <li className="flex items-start">
                  <span className="text-[#34A853] mr-2">•</span>
                  Trained 1,000+ farmers in sustainable practices
                </li>
                <li className="flex items-start">
                  <span className="text-[#34A853] mr-2">•</span>
                  Established 50+ food distribution centers
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                alt="Community impact"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}