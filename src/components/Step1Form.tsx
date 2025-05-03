
import React, { useState } from 'react';
import { useFormContext } from '../contexts/FormContext';
import { validateStep } from '../utils/validation';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';

const Step1Form: React.FC = () => {
  const { formData, updateFormData, setCurrentStep } = useFormContext();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const quantityOptions = [
    '1-10',
    '11-50',
    '51-100',
    '100+',
    'Unsure/Budgetary'
  ];

  const sizeOptions = [
    '2\'x2\'',
    '2\'x3\'',
    '2\'x4\'',
    '4\'x4\'',
    'Custom/Other',
    'Unsure'
  ];

  const handleContinue = () => {
    const validationErrors = validateStep(1, formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setCurrentStep(2);
    setErrors({});
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Quantity & Basic Specs</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">How many FFUs do you anticipate needing?</h3>
        <div className="grid gap-4">
          <RadioGroup 
            value={formData.ffuQuantity}
            onValueChange={(value) => updateFormData({ ffuQuantity: value })}
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
          >
            {quantityOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`quantity-${option}`} />
                <Label htmlFor={`quantity-${option}`} className="text-base">{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {errors.ffuQuantity && (
            <p className="text-red-500 text-sm mt-1">{errors.ffuQuantity}</p>
          )}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-gray-700">What standard size(s) are you considering?</h3>
        <div className="grid gap-4">
          <RadioGroup 
            value={formData.ffuSize}
            onValueChange={(value) => updateFormData({ ffuSize: value })}
            className="grid grid-cols-1 md:grid-cols-3 gap-2"
          >
            {sizeOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`size-${option}`} />
                <Label htmlFor={`size-${option}`} className="text-base">{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {errors.ffuSize && (
            <p className="text-red-500 text-sm mt-1">{errors.ffuSize}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          type="button"
          onClick={handleContinue}
          className="bg-cleanroom-500 hover:bg-cleanroom-600 text-white rounded-full p-2 md:p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-x-1 group"
          aria-label="Continue to next step"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:scale-110" />
        </Button>
      </div>
    </div>
  );
};

export default Step1Form;
