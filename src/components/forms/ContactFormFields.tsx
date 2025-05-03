
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ContactFormFieldProps {
  fullName: string;
  phoneNumber: string;
  projectLocation: string;
  errors: Record<string, string>;
  updateFormData: (data: any) => void;
}

const ContactFormFields: React.FC<ContactFormFieldProps> = ({
  fullName,
  phoneNumber,
  projectLocation,
  errors,
  updateFormData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="fullName" className="text-base block mb-2">Full Name*</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Your full name"
          value={fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          className="w-full"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="phoneNumber" className="text-base block mb-2">Phone Number*</Label>
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="Your phone number"
          value={phoneNumber}
          onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
          className="w-full"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      <div>
        <Label htmlFor="businessEmail" className="text-base block mb-2">Business Email*</Label>
        <Input
          id="businessEmail"
          type="email"
          placeholder="your.name@company.com"
          value={formData.businessEmail || ""}
          onChange={(e) => updateFormData({ businessEmail: e.target.value })}
          className="w-full"
        />
        {errors.businessEmail && (
          <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="companyName" className="text-base block mb-2">Company Name*</Label>
        <Input
          id="companyName"
          type="text"
          placeholder="Your company name"
          value={formData.companyName || ""}
          onChange={(e) => updateFormData({ companyName: e.target.value })}
          className="w-full"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
        )}
      </div>
      
      <div className="md:col-span-2">
        <Label htmlFor="projectLocation" className="text-base block mb-2">Project Location (City, State/Country)*</Label>
        <Input
          id="projectLocation"
          type="text"
          placeholder="e.g., Boston, MA, USA"
          value={projectLocation}
          onChange={(e) => updateFormData({ projectLocation: e.target.value })}
          className="w-full"
        />
        {errors.projectLocation && (
          <p className="text-red-500 text-sm mt-1">{errors.projectLocation}</p>
        )}
      </div>
    </div>
  );
};

export default ContactFormFields;
