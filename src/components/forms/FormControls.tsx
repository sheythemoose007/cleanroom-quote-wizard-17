
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface FormControlsProps {
  onBack: () => void;
  isSubmitting: boolean;
}

const FormControls: React.FC<FormControlsProps> = ({
  onBack,
  isSubmitting
}) => {
  return (
    <div className="flex justify-between pt-4">
      <Button 
        type="button"
        onClick={onBack}
        variant="outline"
        className="border-cleanroom-500 text-cleanroom-500 hover:bg-cleanroom-50"
      >
        Back
      </Button>
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="bg-cleanroom-500 hover:bg-cleanroom-600 text-white rounded-full p-2 md:p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-x-1 group"
        aria-label={isSubmitting ? 'Submitting...' : 'Get Quote'}
      >
        {isSubmitting ? (
          <span className="animate-pulse">•••</span>
        ) : (
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:scale-110" />
        )}
      </Button>
    </div>
  );
};

export default FormControls;
