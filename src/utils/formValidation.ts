
export interface ValidationOptions {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  isEmail?: boolean;
  isPhone?: boolean;
  isBusiness?: boolean;
}

export const validateField = (
  value: any, 
  fieldName: string, 
  options: ValidationOptions = {}
): string | null => {
  // Handle empty values
  if (options.required && 
     ((typeof value === 'string' && value.trim() === '') || 
      (Array.isArray(value) && value.length === 0) ||
      value === null || 
      value === undefined)) {
    return `${fieldName} is required`;
  }
  
  // Skip further validation if field is empty and not required
  if ((value === '' || value === null || value === undefined) && !options.required) {
    return null;
  }
  
  // String validations
  if (typeof value === 'string') {
    if (options.minLength && value.length < options.minLength) {
      return `${fieldName} must be at least ${options.minLength} characters`;
    }
    
    if (options.maxLength && value.length > options.maxLength) {
      return `${fieldName} cannot exceed ${options.maxLength} characters`;
    }
    
    if (options.pattern && !options.pattern.test(value)) {
      return `${fieldName} format is invalid`;
    }
    
    // Email validation
    if (options.isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return `Please enter a valid email address`;
      }
      
      // Business email validation
      if (options.isBusiness) {
        const commonFreeEmailDomains = [
          'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
          'aol.com', 'icloud.com', 'me.com', 'mail.com', 
          'protonmail.com', 'zoho.com'
        ];
        
        const domain = value.split('@')[1].toLowerCase();
        if (commonFreeEmailDomains.includes(domain)) {
          return `Please enter a business email address`;
        }
      }
    }
    
    // Phone validation
    if (options.isPhone) {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        return `Please enter a valid phone number`;
      }
    }
  }
  
  // Boolean validation (for checkboxes)
  if (typeof value === 'boolean' && options.required && value === false) {
    return `${fieldName} is required`;
  }
  
  return null;
};

export const validateStep = (
  stepFields: Record<string, ValidationOptions>,
  formData: Record<string, any>
): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.entries(stepFields).forEach(([fieldName, options]) => {
    const error = validateField(formData[fieldName], fieldName, options);
    if (error) {
      errors[fieldName] = error;
    }
  });
  
  return errors;
};

export const generateStepValidator = (
  stepValidationRules: Record<number, Record<string, ValidationOptions>>
) => {
  return (step: number, formData: Record<string, any>): Record<string, string> => {
    const stepFields = stepValidationRules[step];
    if (!stepFields) {
      return {};
    }
    
    return validateStep(stepFields, formData);
  };
};
