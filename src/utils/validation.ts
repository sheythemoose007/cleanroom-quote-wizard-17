
// Email validation - checks if email appears to be a business email
export const validateBusinessEmail = (email: string): boolean => {
  if (!email) return false;
  
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;
  
  // Check for common free email providers
  const commonFreeEmailDomains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'aol.com',
    'icloud.com',
    'me.com',
    'mail.com',
    'protonmail.com',
    'zoho.com'
  ];
  
  const domain = email.split('@')[1].toLowerCase();
  
  // Return true (valid) if it's NOT in the list of common free email domains
  // Note: We're not rejecting free emails, just flagging them as less ideal
  return !commonFreeEmailDomains.includes(domain);
};

// Phone number validation
export const validatePhoneNumber = (phone: string): boolean => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Check if we have at least 10 digits
  return digitsOnly.length >= 10;
};

// Form field validation
export const validateField = (name: string, value: string | boolean | string[]): string | null => {
  if (name === 'specificFeatures' && Array.isArray(value)) {
    return null; // Features are optional
  }
  
  if (typeof value === 'string' && value.trim() === '') {
    return 'This field is required';
  }
  
  if (name === 'businessEmail') {
    if (!validateBusinessEmail(value as string)) {
      return 'Please enter a valid business email address';
    }
  }
  
  if (name === 'phoneNumber') {
    if (!validatePhoneNumber(value as string)) {
      return 'Please enter a valid phone number';
    }
  }
  
  if (name === 'consentGiven' && value === false) {
    return 'You must agree to the terms';
  }
  
  return null;
};

// Validate the current step
export const validateStep = (step: number, formData: any): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  // Fields to validate for each step
  const stepFields: Record<number, string[]> = {
    1: ['ffuQuantity', 'ffuSize'],
    2: ['filtrationLevel'],
    3: ['application', 'fullName', 'businessEmail', 'phoneNumber', 'companyName', 'projectLocation', 'consentGiven']
  };
  
  // Validate each field for the current step
  stepFields[step]?.forEach(field => {
    const error = validateField(field, formData[field]);
    if (error) {
      errors[field] = error;
    }
  });
  
  return errors;
};
