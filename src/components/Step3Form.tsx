
import React, { useState } from 'react';
import { useFormContext } from '../contexts/FormContext';
import { validateStep } from '../utils/validation';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import ContactFormFields from './forms/ContactFormFields';
import ConsentCheckbox from './forms/ConsentCheckbox';
import HoneypotField from './forms/HoneypotField';
import { toast } from '@/components/ui/sonner';

const Step3Form: React.FC = () => {
  const { 
    formData, 
    updateFormData, 
    setCurrentStep,
    isSubmitting,
    setIsSubmitting,
    setSubmissionSuccess,
    setSubmissionError
  } = useFormContext();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const applicationOptions = [
    'New Cleanroom Build',
    'Existing Cleanroom Upgrade',
    'Laminar Flow Hood/Bench',
    'Equipment Integration',
    'Other'
  ];

  const handleBack = () => {
    setCurrentStep(2);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Check honeypot field
    if (formData.website) {
      console.log("Bot detected, form submission blocked");
      toast.error("Something went wrong with your submission. Please try again.");
      return;
    }

    const validationErrors = validateStep(3, formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // For now, we'll simulate a successful submission
      // In production, this would connect to Supabase
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log the form data for now (in production, this would be sent to Supabase)
      console.log("FFU Quote Request Data:", formData);
      
      setSubmissionSuccess(true);
      toast.success("Your FFU quote request has been successfully submitted!");
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionError("There was an error submitting your form. Please try again.");
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Application & Contact</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3 text-gray-700">What is the application?</h3>
          <div className="grid gap-4">
            <RadioGroup 
              value={formData.application}
              onValueChange={(value) => updateFormData({ application: value })}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {applicationOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`app-${option}`} />
                  <Label htmlFor={`app-${option}`} className="text-base">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            {errors.application && (
              <p className="text-red-500 text-sm mt-1">{errors.application}</p>
            )}
          </div>
        </div>
        
        <ContactFormFields 
          fullName={formData.fullName}
          phoneNumber={formData.phoneNumber}
          projectLocation={formData.projectLocation}
          errors={errors}
          updateFormData={updateFormData}
        />
        
        <HoneypotField
          website={formData.website}
          updateFormData={updateFormData}
        />
        
        <ConsentCheckbox
          consentGiven={formData.consentGiven}
          updateFormData={updateFormData}
          error={errors.consentGiven}
        />

        <div className="flex justify-between pt-4">
          <Button 
            type="button"
            onClick={handleBack}
            variant="outline"
            className="border-cleanroom-500 text-cleanroom-500 hover:bg-cleanroom-50"
          >
            Back
          </Button>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-cleanroom-500 hover:bg-cleanroom-600 text-white min-w-[200px]"
          >
            {isSubmitting ? 'Submitting...' : 'Get My FFU Quote'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step3Form;
