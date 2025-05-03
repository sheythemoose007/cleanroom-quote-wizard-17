
import React from 'react';
import { useFormContext } from '../contexts/FormContext';
import { Check } from 'lucide-react';

interface StepItem {
  number: number;
  title: string;
}

const steps: StepItem[] = [
  { number: 1, title: 'Quantity & Basic Specs' },
  { number: 2, title: 'Performance & Features' },
  { number: 3, title: 'Application & Contact' },
];

const FormStepper: React.FC = () => {
  const { currentStep } = useFormContext();

  return (
    <div className="mb-8 transition-all duration-300 ease-in-out">
      <div className="hidden sm:flex items-center justify-between">
        {steps.map((step, index) => {
          return (
            <div key={step.number} className="flex items-center">
              {/* Step indicator */}
              <div className="flex flex-col items-center group">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ease-in-out transform 
                  ${currentStep === step.number ? 'border-cleanroom-500 bg-cleanroom-500 text-white scale-110 shadow-md' : 
                    currentStep > step.number ? 'border-cleanroom-500 bg-cleanroom-100 text-cleanroom-500' : 
                    'border-gray-300 bg-white text-gray-400 hover:border-cleanroom-300'}`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5 animate-[fadeIn_0.5s_ease-out]" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                <span className={`mt-2 text-xs font-medium transition-colors duration-300
                  ${currentStep >= step.number ? 'text-cleanroom-600' : 'text-gray-400'}`}>
                  {step.title}
                </span>
              </div>
              
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4 relative">
                  <div className="h-0.5 bg-gray-300 absolute inset-0"></div>
                  <div 
                    className="h-0.5 bg-cleanroom-500 absolute inset-0 transition-all duration-500 ease-in-out"
                    style={{ width: currentStep > index + 1 ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Mobile stepper */}
      <div className="sm:hidden">
        <p className="text-sm font-medium text-cleanroom-600">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
        </p>
        <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-cleanroom-500 rounded-full transition-all duration-700 ease-in-out" 
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FormStepper;
