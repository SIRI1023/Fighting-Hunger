import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HandHeart, DollarSign, Megaphone } from 'lucide-react';
import VolunteerForm from '../components/VolunteerForm';
import DonationForm from '../components/DonationForm';
import CampaignForm from '../components/CampaignForm';

export default function GetInvolved() {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showCampaignForm, setShowCampaignForm] = useState(false);

  const opportunities = [
    {
      icon: <HandHeart className="w-12 h-12" />,
      title: 'Volunteer',
      description: 'Join our team to make a direct impact on food security efforts.',
      actions: [
        'Food distribution support',
        'Community garden maintenance',
        'Event organization',
        'Administrative assistance',
      ],
      cta: 'Sign Up to Volunteer',
      onAction: () => setShowVolunteerForm(true),
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80',
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Donate',
      description: 'Your contributions can help provide meals and resources to those in need.',
      actions: [
        'Fund sustainable farming projects',
        'Support food distribution programs',
        'Enable farmer training initiatives',
        'Contribute to advocacy campaigns',
      ],
      cta: 'Make a Donation',
      onAction: () => setShowDonationForm(true),
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80',
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: 'Advocate',
      description: 'Support our campaigns to influence policies and bring about meaningful change.',
      actions: [
        'Share awareness campaigns',
        'Sign petitions',
        'Contact policymakers',
        'Organize community events',
      ],
      cta: 'Join the Campaign',
      onAction: () => setShowCampaignForm(true),
      image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80',
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
              Get Involved
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be the Change You Want to See
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      {opportunities.map((opportunity, index) => (
        <section
          key={opportunity.title}
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
                <div className="text-[#34A853]">{opportunity.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900">{opportunity.title}</h2>
                <p className="text-gray-600 text-lg">{opportunity.description}</p>
                <ul className="space-y-4">
                  {opportunity.actions.map((action, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#34A853] mr-2">•</span>
                      <span className="text-gray-600">{action}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={opportunity.onAction}
                  className="bg-[#34A853] text-white px-6 py-3 rounded-full hover:bg-[#2D8A45] transition-colors"
                >
                  {opportunity.cta}
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={index % 2 === 1 ? 'md:col-start-1' : ''}
              >
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Forms */}
      <VolunteerForm
        isOpen={showVolunteerForm}
        onClose={() => setShowVolunteerForm(false)}
      />
      <DonationForm
        isOpen={showDonationForm}
        onClose={() => setShowDonationForm(false)}
      />
      <CampaignForm
        isOpen={showCampaignForm}
        onClose={() => setShowCampaignForm(false)}
      />
    </div>
  );
}