
import { createContext, useContext, useState, ReactNode } from 'react';

export interface BaseFormData {
  consentGiven: boolean;
  website?: string; // Honeypot field
}

export interface BaseFormContextType<T extends BaseFormData> {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  formData: T;
  updateFormData: (data: Partial<T>) => void;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  submissionSuccess: boolean;
  setSubmissionSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  submissionError: string | null;
  setSubmissionError: React.Dispatch<React.SetStateAction<string | null>>;
}

export function createFormContext<T extends BaseFormData>(defaultFormData: T) {
  const FormContext = createContext<BaseFormContextType<T> | undefined>(undefined);

  const FormProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<T>(defaultFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const updateFormData = (data: Partial<T>) => {
      setFormData(prevData => ({ ...prevData, ...data }));
    };

    return (
      <FormContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          formData,
          updateFormData,
          isSubmitting,
          setIsSubmitting,
          submissionSuccess,
          setSubmissionSuccess,
          submissionError,
          setSubmissionError
        }}
      >
        {children}
      </FormContext.Provider>
    );
  };

  const useFormContext = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
      throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
  };

  return { FormProvider, useFormContext, FormContext };
}
