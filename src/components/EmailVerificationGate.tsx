
import React, { useState } from 'react';
import { Vault } from 'lucide-react';
import { validateBusinessEmail } from '../utils/validation';
import { useFormContext } from '../contexts/FormContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';

interface EmailVerificationGateProps {
  onVerified: () => void;
}

const EmailVerificationGate: React.FC<EmailVerificationGateProps> = ({ onVerified }) => {
  const { formData, updateFormData } = useFormContext();
  const [isVerifying, setIsVerifying] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateFields = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.businessEmail) {
      newErrors.businessEmail = "Business email is required";
    } else if (!validateBusinessEmail(formData.businessEmail)) {
      newErrors.businessEmail = "Please enter a valid business email";
    }
    
    if (!formData.companyName) {
      newErrors.companyName = "Company name is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleVerify = async () => {
    if (!validateFields()) return;
    
    setIsVerifying(true);
    
    try {
      // Here we could add an actual email domain verification API call
      // For now, we'll just simulate a verification process
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check if using common free email providers
      const domain = formData.businessEmail.split('@')[1].toLowerCase();
      const commonFreeEmails = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
      
      if (commonFreeEmails.includes(domain)) {
        toast.warning("Business email addresses are preferred for quote requests, but we'll continue with your submission.");
      } else {
        toast.success("Email successfully verified!");
      }
      
      onVerified();
    } catch (error) {
      toast.error("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto text-center transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="h-20 w-20 rounded-full bg-cleanroom-50 flex items-center justify-center text-cleanroom-500">
          <Vault size={40} />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-2 text-gray-800">UNLOCK FAN FILTER UNIT QUOTE REQUEST</h2>
      <p className="text-gray-600 mb-8">Please verify your business email to access our customized quote wizard.</p>
      
      <div className="space-y-6">
        <div className="text-left">
          <Label htmlFor="business-email" className="text-base block mb-2">Business Email*</Label>
          <Input
            id="business-email"
            type="email"
            placeholder="your.name@company.com"
            value={formData.businessEmail}
            onChange={(e) => updateFormData({ businessEmail: e.target.value })}
            className="w-full"
          />
          {errors.businessEmail && (
            <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>
          )}
        </div>
        
        <div className="text-left">
          <Label htmlFor="company-name" className="text-base block mb-2">Company Name*</Label>
          <Input
            id="company-name"
            type="text"
            placeholder="Your company name"
            value={formData.companyName}
            onChange={(e) => updateFormData({ companyName: e.target.value })}
            className="w-full"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>
        
        <Button
          onClick={handleVerify}
          disabled={isVerifying}
          className="w-full bg-cleanroom-500 hover:bg-cleanroom-600 text-white py-2 transition-colors duration-200"
        >
          {isVerifying ? 'Verifying...' : 'Unlock Quote Request'}
        </Button>
      </div>
    </div>
  );
};

export default EmailVerificationGate;
