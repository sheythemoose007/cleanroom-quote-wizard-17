
import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormContext } from '../contexts/FormContext';

const SuccessMessage: React.FC = () => {
  const { formData, setCurrentStep, updateFormData } = useFormContext();
  
  const handleReset = () => {
    // Reset form to initial state
    updateFormData({
      ffuQuantity: '',
      ffuSize: '',
      filtrationLevel: '',
      airflowRequirements: '',
      specificFeatures: [],
      application: '',
      fullName: '',
      businessEmail: '',
      phoneNumber: '',
      companyName: '',
      projectLocation: '',
      consentGiven: false,
    });
    setCurrentStep(1);
  };

  return (
    <div className="animate-fade-in text-center py-10">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Quote Request Submitted!</h2>
      
      <p className="text-lg text-gray-600 mb-4">
        Thank you, {formData.fullName}! Your Fan Filter Unit quote request has been successfully submitted.
      </p>
      
      <p className="text-md text-gray-600 mb-8">
        A member of our team will contact you at {formData.businessEmail} within 1-2 business days to discuss your 
        {' '}{formData.ffuSize}{' '}
        FFU requirements for your {formData.application.toLowerCase()} project.
      </p>

      <div className="flex justify-center">
        <Button 
          type="button"
          onClick={handleReset}
          variant="outline"
          className="border-cleanroom-500 text-cleanroom-500 hover:bg-cleanroom-50"
        >
          Submit Another Request
        </Button>
      </div>
    </div>
  );
};

export default SuccessMessage;
