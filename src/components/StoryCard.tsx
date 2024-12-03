import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface StoryCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

export default function StoryCard({
  image,
  title,
  excerpt,
  date,
  link,
}: StoryCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar size={16} className="mr-2" />
          {date}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          to={link}
          className="text-[#34A853] hover:text-[#2D8A45] font-medium inline-flex items-center"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}