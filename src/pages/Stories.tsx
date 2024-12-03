import React from 'react';
import { motion } from 'framer-motion';
import StoryCard from '../components/StoryCard';

export default function Stories() {
  const stories = [
    {
      image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80',
      title: 'From Hunger to Hope: Maya\'s Farm',
      excerpt: 'How sustainable farming transformed a community and created food security for hundreds of families.',
      date: 'March 15, 2024',
      link: '/stories/mayas-farm',
    },
    {
      image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80',
      title: 'Reducing Food Waste in Urban Areas',
      excerpt: 'Innovative solutions for food distribution that helped reduce waste by 60% in metropolitan regions.',
      date: 'March 10, 2024',
      link: '/stories/reducing-waste',
    },
    {
      image: 'https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?auto=format&fit=crop&q=80',
      title: 'Policy Advocacy Success',
      excerpt: 'How community action led to policy changes that improved food access for millions.',
      date: 'March 5, 2024',
      link: '/stories/policy-success',
    },
    {
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80',
      title: 'Community Gardens Initiative',
      excerpt: 'Urban farming projects that brought fresh produce to food deserts.',
      date: 'March 1, 2024',
      link: '/stories/community-gardens',
    },
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
      title: 'Empowering Local Farmers',
      excerpt: 'Training programs that helped small-scale farmers increase their yields sustainably.',
      date: 'February 25, 2024',
      link: '/stories/empowering-farmers',
    },
    {
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80',
      title: 'Volunteer Impact Stories',
      excerpt: 'Meet the dedicated volunteers making a difference in their communities.',
      date: 'February 20, 2024',
      link: '/stories/volunteer-impact',
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
              Stories of Change
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real Impact, Real People
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <StoryCard {...story} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}