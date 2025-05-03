
import React from 'react';
import { useFormContext } from '../contexts/FormContext';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import SuccessMessage from './SuccessMessage';
import QuizFormLayout from './forms/QuizFormLayout';

const FormContent: React.FC = () => {
  const { currentStep, submissionSuccess } = useFormContext();
  
  // If submission was successful, show the success message
  if (submissionSuccess) {
    return <SuccessMessage />;
  }

  // Show the appropriate step form
  return (
    <>
      {currentStep === 1 && <Step1Form />}
      {currentStep === 2 && <Step2Form />}
      {currentStep === 3 && <Step3Form />}
    </>
  );
};

const CleanroomQuizForm: React.FC = () => {
  return (
    <QuizFormLayout
      title="Fan Filter Unit Quote Request"
      subtitle="Complete this short form to receive a customized quote for your Fan Filter Unit (FFU) needs."
      successComponent={<SuccessMessage />}
      requireEmailVerification={true}
      footerText="Your information is secure and will only be used to process your quote request. See our"
      privacyPolicyUrl="https://www.cleanroomsolutions.com/legal/privacy-policy"
    >
      <FormContent />
    </QuizFormLayout>
  );
};

export default CleanroomQuizForm;
