
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const PlaceCall: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCallInProgress, setIsCallInProgress] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits, plus, parentheses, spaces and hyphens
    const value = e.target.value.replace(/[^\d+() -]/g, '');
    setPhoneNumber(value);
  };

  const handleCall = () => {
    // Basic validation
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    
    if (digitsOnly.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    setIsCallInProgress(true);
    
    // Simulate call in progress
    toast.success(`Calling ${phoneNumber}...`);
    
    // Simulate call completion after delay
    setTimeout(() => {
      setIsCallInProgress(false);
      toast.success(`Call to ${phoneNumber} completed`);
    }, 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-12 animate-fade-in">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Place Call</h2>
        <p className="text-app-medium-gray max-w-2xl mx-auto">
          Enter a phone number to make a call
        </p>
      </div>
      
      <div className="mb-1 text-xs tracking-wide uppercase text-app-medium-gray font-medium">
        Phone Number
      </div>
      
      <div className="flex w-full gap-2">
        <Input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="(555) 123-4567"
          className="flex-1 glass"
          disabled={isCallInProgress}
        />
        <Button 
          onClick={handleCall}
          className="bg-app-light-blue hover:bg-app-light-blue/90 flex-none"
          disabled={isCallInProgress}
        >
          <Phone className="mr-1 h-4 w-4" />
          {isCallInProgress ? "Calling..." : "Call"}
        </Button>
      </div>
      
      <div className="mt-4 flex justify-center">
        <div className="h-px w-1/3 bg-app-subtle-gray"></div>
      </div>
    </div>
  );
};

export default PlaceCall;
