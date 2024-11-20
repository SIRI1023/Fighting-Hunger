import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export default function SolutionCard({
  icon,
  title,
  description,
  link,
  imageUrl,
}: SolutionCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transform group-hover:scale-110 transition-transform duration-500"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4 flex-grow">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-white hover:text-[#34A853] transition-colors"
        >
          Learn More <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}