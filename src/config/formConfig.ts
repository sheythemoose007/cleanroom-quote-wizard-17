
export interface FormStep {
  title: string;
  description?: string;
  fields: string[];
}

export interface FormConfig {
  title: string;
  subtitle: string;
  steps: FormStep[];
  requireEmailVerification: boolean;
  privacyPolicyUrl: string;
  footerText: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    backgroundColor: string;
  };
  redirectUrl?: string;
  supabaseTable?: string;
}

export const defaultFormConfig: FormConfig = {
  title: "Multi-Step Form",
  subtitle: "Complete this form to submit your request",
  steps: [
    {
      title: "Step 1",
      description: "Basic Information",
      fields: ["field1", "field2"]
    },
    {
      title: "Step 2",
      description: "Additional Details",
      fields: ["field3", "field4"]
    },
    {
      title: "Step 3",
      description: "Contact Information",
      fields: ["fullName", "email", "phone"]
    }
  ],
  requireEmailVerification: true,
  privacyPolicyUrl: "/privacy-policy",
  footerText: "Your information is secure and will only be used to process your request.",
  theme: {
    primaryColor: "#3b82f6", // Blue
    secondaryColor: "#f3f4f6", // Light gray
    textColor: "#1f2937", // Dark gray
    backgroundColor: "#ffffff" // White
  }
};

export const ffuFormConfig: FormConfig = {
  title: "Fan Filter Unit Quote Request",
  subtitle: "Complete this form to receive a customized FFU quote",
  steps: [
    {
      title: "Quantity & Basic Specs",
      fields: ["ffuQuantity", "ffuSize"]
    },
    {
      title: "Performance & Features",
      fields: ["filtrationLevel", "airflowRequirements", "specificFeatures"]
    },
    {
      title: "Application & Contact",
      fields: ["application", "fullName", "businessEmail", "phoneNumber", "companyName", "projectLocation", "consentGiven"]
    }
  ],
  requireEmailVerification: true,
  privacyPolicyUrl: "https://www.cleanroomsolutions.com/legal/privacy-policy",
  footerText: "Your information is secure and will only be used to process your quote request.",
  theme: {
    primaryColor: "#4f46e5", // Indigo
    secondaryColor: "#f9fafb", // Very light gray
    textColor: "#1f2937", // Dark gray
    backgroundColor: "#ffffff" // White
  },
  supabaseTable: "ffu_quote_requests"
};
