import React, { useState } from 'react';
import Modal from './Modal';

interface CampaignFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CampaignForm({ isOpen, onClose }: CampaignFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interests: [],
    skills: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Campaign form submitted:', formData);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join Our Campaign">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Areas of Interest
          </label>
          <div className="space-y-2">
            {[
              'Policy Advocacy',
              'Public Awareness',
              'Community Organizing',
              'Social Media',
            ].map((interest) => (
              <label key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  value={interest}
                  onChange={handleInterestChange}
                  className="rounded border-gray-300 text-[#34A853] focus:ring-[#34A853]"
                />
                <span className="ml-2 text-sm text-gray-600">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Relevant Skills
          </label>
          <textarea
            name="skills"
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Why do you want to join?
          </label>
          <textarea
            name="message"
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#34A853] text-white px-4 py-2 rounded-md hover:bg-[#2D8A45] transition-colors"
        >
          Join Campaign
        </button>
      </form>
    </Modal>
  );
}