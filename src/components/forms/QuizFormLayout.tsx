
import React, { useState } from 'react';
import FormStepper from '../FormStepper';
import EmailVerificationGate from '../EmailVerificationGate';
import { FormProvider } from '../../contexts/FormContext';

interface QuizFormLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  successComponent: React.ReactNode;
  requireEmailVerification?: boolean;
  footerText?: string;
  privacyPolicyUrl?: string;
}

const QuizFormLayout: React.FC<QuizFormLayoutProps> = ({
  children,
  title,
  subtitle,
  successComponent,
  requireEmailVerification = true,
  footerText = "Your information is secure and will only be used to process your request.",
  privacyPolicyUrl = "https://www.cleanroomsolutions.com/legal/privacy-policy"
}) => {
  const [isVerified, setIsVerified] = useState(!requireEmailVerification);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 animate-fade-in">
          {title}
        </h1>
        <div className="w-20 h-1 bg-cleanroom-500 mx-auto mt-4 mb-4 rounded-full"></div>
        <p className="text-gray-600 mt-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      </div>
      
      <FormProvider>
        {!isVerified && requireEmailVerification ? (
          <EmailVerificationGate onVerified={() => setIsVerified(true)} />
        ) : (
          <>
            <FormStepper />
            <div className="min-h-[400px] relative">
              {children}
            </div>
          </>
        )}
      </FormProvider>
      
      <div className="mt-10 text-center text-xs text-gray-500">
        <p>
          {footerText}{' '}
          <a href={privacyPolicyUrl} className="text-cleanroom-500 hover:underline transition-colors duration-200">
            Privacy Policy
          </a> for details.
        </p>
      </div>
    </div>
  );
};

export default QuizFormLayout;
