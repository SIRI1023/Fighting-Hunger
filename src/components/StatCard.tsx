import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

export default function StatCard({ icon, title, value, description }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center mb-4 text-[#34A853]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-[#34A853] mb-2">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}