
import React, { useState } from 'react';
import { toast } from "sonner";

interface PhoneInputProps {
  onSubmit: (phoneNumber: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits, plus, parentheses, spaces and hyphens
    const value = e.target.value.replace(/[^\d+() -]/g, '');
    setPhoneNumber(value);
  };

  const handleSubmit = () => {
    // Basic validation - only if there's input
    if (phoneNumber.trim() !== '') {
      const digitsOnly = phoneNumber.replace(/\D/g, '');
      
      if (digitsOnly.length < 3) {
        toast.error("Please enter at least 3 digits to filter");
        return;
      }
    }
    
    onSubmit(phoneNumber);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleClearAndShowAll = () => {
    setPhoneNumber('');
    onSubmit('');
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto animate-fade-in">
      <div className="mb-1 text-xs tracking-wide uppercase text-app-medium-gray font-medium">
        Filter by Phone Number (Optional)
      </div>
      <div className={`flex w-full rounded-lg overflow-hidden glass transition-all duration-300 ${isFocused ? 'ring-2 ring-app-light-blue/50' : 'ring-0'}`}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="(555) 123-4567"
          className="flex-1 px-4 py-3 bg-transparent border-none text-app-charcoal focus:outline-none"
          aria-label="Phone number input for filtering"
        />
        <button
          onClick={handleSubmit}
          className="px-6 bg-app-light-blue hover:bg-app-light-blue/90 text-white font-medium transition-all duration-200 ease-in-out pulse-effect"
          aria-label="Filter transcripts"
        >
          Filter
        </button>
      </div>
      {phoneNumber && (
        <button
          onClick={handleClearAndShowAll}
          className="mt-2 text-sm text-app-light-blue hover:underline self-end"
        >
          Clear filter & show all
        </button>
      )}
    </div>
  );
};

export default PhoneInput;
