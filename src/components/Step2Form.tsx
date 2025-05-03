
import React, { useState } from 'react';
import { useFormContext } from '../contexts/FormContext';
import { validateStep } from '../utils/validation';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';

const Step2Form: React.FC = () => {
  const { formData, updateFormData, setCurrentStep } = useFormContext();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const filtrationOptions = [
    'HEPA 99.99% @ 0.3µm',
    'ULPA 99.9995% @ 0.12µm',
    'Other',
    'Unsure'
  ];

  const featureOptions = [
    'Low profile',
    'Specific voltage',
    'Room-side replaceable filter',
    'Integrated controls',
    'Stainless steel housing',
    'Monitoring system integration',
    'Energy-efficient operation'
  ];

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleContinue = () => {
    const validationErrors = validateStep(2, formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setCurrentStep(3);
    setErrors({});
  };

  const handleFeatureToggle = (feature: string) => {
    const currentFeatures = [...(formData.specificFeatures || [])];
    
    if (currentFeatures.includes(feature)) {
      updateFormData({ 
        specificFeatures: currentFeatures.filter(f => f !== feature) 
      });
    } else {
      updateFormData({ 
        specificFeatures: [...currentFeatures, feature]
      });
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Performance & Features</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">What filtration level is required?</h3>
        <div className="grid gap-4">
          <RadioGroup 
            value={formData.filtrationLevel}
            onValueChange={(value) => updateFormData({ filtrationLevel: value })}
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
          >
            {filtrationOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`filtration-${option}`} />
                <Label htmlFor={`filtration-${option}`} className="text-base">{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {errors.filtrationLevel && (
            <p className="text-red-500 text-sm mt-1">{errors.filtrationLevel}</p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Do you have specific airflow (CFM) requirements?</h3>
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            placeholder="e.g., 650-750 CFM"
            value={formData.airflowRequirements}
            onChange={(e) => updateFormData({ airflowRequirements: e.target.value })}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">Leave blank if unsure</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Any specific features needed?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {featureOptions.map((feature) => (
            <div key={feature} className="flex items-start space-x-2">
              <Checkbox
                id={`feature-${feature}`}
                checked={formData.specificFeatures.includes(feature)}
                onCheckedChange={() => handleFeatureToggle(feature)}
                className="mt-0.5"
              />
              <Label htmlFor={`feature-${feature}`} className="text-base">{feature}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <Button 
          type="button"
          onClick={handleBack}
          variant="outline"
          className="border-cleanroom-500 text-cleanroom-500 hover:bg-cleanroom-50"
        >
          Back
        </Button>
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

export default Step2Form;
