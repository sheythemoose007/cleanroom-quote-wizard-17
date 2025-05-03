# Multi-Step Form Quiz Framework

This framework provides reusable components and utilities for creating multi-step form quizzes that can be used for various applications like quote requests, surveys, and assessments.

## Key Components

### 1. Form Context Creator
`createFormContext.ts` - Create custom form contexts with type safety for different quiz applications.

### 2. Form Layout Components
- `QuizFormLayout.tsx` - Overall container for quiz forms with title, subtitle, and privacy notice
- `StepContainer.tsx` - Container for individual quiz steps with navigation
- `FormControls.tsx` - Navigation buttons for moving between steps

### 3. Form Input Components
- `ContactFormFields.tsx` - Common contact fields (name, email, phone, etc.)
- `ConsentCheckbox.tsx` - Privacy policy consent checkbox
- `HoneypotField.tsx` - Hidden field for bot detection

### 4. Progress & Feedback
- `FormStepper.tsx` - Visual progress indicator
- `EmailVerificationGate.tsx` - Lead qualification step
- `SuccessMessage.tsx` - Completion message

### 5. Utilities
- `formValidation.ts` - Field validation utilities
- `formConfig.ts` - Configuration schema for form customization

## Usage Example

```tsx
// 1. Create a form data type
interface MyQuizFormData extends BaseFormData {
  field1: string;
  field2: string;
  // ...other fields
}

// 2. Create default values
const defaultFormData: MyQuizFormData = {
  field1: '',
  field2: '',
  // ...other defaults
  consentGiven: false
};

// 3. Create a form context
const { FormProvider, useFormContext } = createFormContext<MyQuizFormData>(defaultFormData);

// 4. Create step components using StepContainer
const Step1: React.FC = () => {
  const { formData, updateFormData, setCurrentStep } = useFormContext();
  
  const handleContinue = () => {
    // Validate and proceed
    setCurrentStep(2);
  };
  
  return (
    <StepContainer
      title="Step 1"
      subtitle="Basic Information"
      onContinue={handleContinue}
      isFirstStep={true}
    >
      {/* Your form fields here */}
    </StepContainer>
  );
};

// 5. Create main quiz component
const MyQuizForm: React.FC = () => {
  return (
    <QuizFormLayout
      title="My Custom Quiz"
      subtitle="Complete this form"
      successComponent={<MySuccessMessage />}
    >
      <FormContent />
    </QuizFormLayout>
  );
};

// 6. Form content with steps
const FormContent: React.FC = () => {
  const { currentStep, submissionSuccess } = useFormContext();
  
  if (submissionSuccess) {
    return <MySuccessMessage />;
  }
  
  return (
    <>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {/* More steps */}
    </>
  );
};
```

## Customization

Use the `formConfig.ts` to define the structure and appearance of your form:

```tsx
const myFormConfig: FormConfig = {
  title: "My Custom Form",
  subtitle: "Complete this form to submit your request",
  steps: [
    // Define steps and fields
  ],
  // Theme, URLs, etc.
};
```

## Database Integration

For Supabase integration, specify the table name in the form config and implement a submission handler in your final step component.
