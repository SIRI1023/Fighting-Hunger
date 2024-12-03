import React, { useState } from 'react';
import Modal from './Modal';

interface DonationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationForm({ isOpen, onClose }: DonationFormProps) {
  const [formData, setFormData] = useState({
    amount: '25',
    customAmount: '',
    frequency: 'one-time',
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Donation form submitted:', formData);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const predefinedAmounts = ['25', '50', '100', '250'];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Make a Donation">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Amount
          </label>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`px-4 py-2 rounded-md ${
                  formData.amount === amount
                    ? 'bg-[#34A853] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, amount }))}
              >
                ${amount}
              </button>
            ))}
          </div>
          <div className="mt-2">
            <input
              type="number"
              name="customAmount"
              placeholder="Custom amount"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
              value={formData.customAmount}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Frequency
          </label>
          <select
            name="frequency"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
            value={formData.frequency}
            onChange={handleChange}
          >
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </div>

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
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            required
            placeholder="1234 5678 9012 3456"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiry"
              required
              placeholder="MM/YY"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
              value={formData.expiry}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CVC</label>
            <input
              type="text"
              name="cvc"
              required
              placeholder="123"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#34A853] focus:ring-[#34A853]"
              value={formData.cvc}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#34A853] text-white px-4 py-2 rounded-md hover:bg-[#2D8A45] transition-colors"
        >
          Complete Donation
        </button>
      </form>
    </Modal>
  );
}