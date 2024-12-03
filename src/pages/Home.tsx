import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Leaf, Truck, Gavel } from 'lucide-react';
import SolutionCard from '../components/SolutionCard';
import StatCard from '../components/StatCard';

export default function Home() {
  const solutions = [
    {
      icon: <Leaf size={32} />,
      title: 'Sustainable Agriculture',
      description: 'Promoting eco-friendly farming practices for sustainable food production.',
      link: '/solutions#agriculture',
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80',
    },
    {
      icon: <Truck size={32} />,
      title: 'Food Distribution',
      description: 'Optimizing distribution networks to reduce waste and improve accessibility.',
      link: '/solutions#distribution',
      imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80',
    },
    {
      icon: <Users size={32} />,
      title: 'Farmer Empowerment',
      description: 'Supporting smallholder farmers with training and resources.',
      link: '/solutions#farmers',
      imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80',
    },
    {
      icon: <Gavel size={32} />,
      title: 'Policy Advocacy',
      description: 'Working to influence policies for better food security.',
      link: '/solutions#policy',
      imageUrl: 'https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Join the movement to eliminate hunger
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Building a future where no one goes hungry
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <Link
              to="/about"
              className="bg-[#34A853] text-white px-8 py-3 rounded-full hover:bg-[#2D8A45] transition-colors inline-block"
            >
              Learn More
            </Link>
            <Link
              to="/get-involved"
              className="bg-[#FF9800] text-white px-8 py-3 rounded-full hover:bg-[#F57C00] transition-colors inline-block"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together, we're making a difference in the fight against hunger
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={<Users size={32} />}
              title="People Helped"
              value="1M+"
              description="Individuals received food assistance"
            />
            <StatCard
              icon={<Leaf size={32} />}
              title="Sustainable Farms"
              value="500+"
              description="Farms supported with sustainable practices"
            />
            <StatCard
              icon={<Truck size={32} />}
              title="Food Distributed"
              value="5M+"
              description="Meals delivered to communities in need"
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive approaches to combat hunger and promote food security
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#34A853] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create a hunger-free world. Every action counts.
          </p>
          <Link
            to="/get-involved"
            className="bg-white text-[#34A853] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block font-semibold"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}