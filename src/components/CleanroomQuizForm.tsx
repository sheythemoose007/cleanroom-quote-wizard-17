import React, { useState } from 'react';
import { FormProvider, useFormContext } from '../contexts/FormContext';
import FormStepper from './FormStepper';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import SuccessMessage from './SuccessMessage';
import EmailVerificationGate from './EmailVerificationGate';

const FormContent: React.FC = () => {
  const { currentStep, submissionSuccess } = useFormContext();
  const [isVerified, setIsVerified] = useState(false);

  // If submission was successful, show the success message
  if (submissionSuccess) {
    return <SuccessMessage />;
  }

  // If email is not verified, show the verification gate
  if (!isVerified) {
    return <EmailVerificationGate onVerified={() => setIsVerified(true)} />;
  }

  // Otherwise, show the form steps
  return (
    <div className="animate-fade-in">
      <FormStepper />
      
      <div className="min-h-[400px] relative">
        {currentStep === 1 && <Step1Form />}
        {currentStep === 2 && <Step2Form />}
        {currentStep === 3 && <Step3Form />}
      </div>
    </div>
  );
};

const CleanroomQuizForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 animate-fade-in">
          Fan Filter Unit Quote Request
        </h1>
        <div className="w-20 h-1 bg-cleanroom-500 mx-auto mt-4 mb-4 rounded-full"></div>
        <p className="text-gray-600 mt-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Complete this short form to receive a customized quote for your Fan Filter Unit (FFU) needs.
        </p>
      </div>
      
      <FormProvider>
        <FormContent />
      </FormProvider>
      
      <div className="mt-10 text-center text-xs text-gray-500">
        <p>
          Your information is secure and will only be used to process your quote request.
          See our <a href="https://www.cleanroomsolutions.com/legal/privacy-policy" className="text-cleanroom-500 hover:underline transition-colors duration-200">Privacy Policy</a> for details.
        </p>
      </div>
    </div>
  );
};

export default CleanroomQuizForm;
