
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface StepContainerProps {
  title: string;
  subtitle?: string;
  onContinue: () => void;
  onBack?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  children: React.ReactNode;
}

const StepContainer: React.FC<StepContainerProps> = ({
  title,
  subtitle,
  onContinue,
  onBack,
  isFirstStep = false,
  isLastStep = false,
  children
}) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
      <div className="space-y-6 mb-8">
        {children}
      </div>

      <div className="flex justify-between">
        {!isFirstStep && onBack && (
          <Button 
            type="button"
            onClick={onBack}
            variant="outline"
            className="border-cleanroom-500 text-cleanroom-500 hover:bg-cleanroom-50"
          >
            Back
          </Button>
        )}
        <div className={!isFirstStep ? "ml-auto" : ""}>
          <Button 
            type="button"
            onClick={onContinue}
            className="bg-cleanroom-500 hover:bg-cleanroom-600 text-white rounded-full p-2 md:p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-x-1 group"
            aria-label={isLastStep ? "Submit" : "Continue to next step"}
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepContainer;
