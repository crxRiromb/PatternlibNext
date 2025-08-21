import { PatternlibOptionV1 } from '@liebherr/patternlib-react';

export type Countries = 'DE' | 'AT' | 'CH' | '';

export interface FormExampleData {
  // Text inputs
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  website: string;

  // Numbers
  age: number | string;
  salary: number | string;

  // Date/Time
  birthday: string;
  appointmentTime: string;

  // Text areas
  description: string;

  // Dropdowns/Selects
  country: Countries;
  city: string;

  // Checkboxes
  newsletter: boolean;
  terms: boolean;
  privacy: boolean;

  // Radio buttons
  contactPreference: string;

  // Multi-select
  skills: string[];
}

export interface FormErrors {
  [key: string]: string;
}

// Field display names for better error messages
export const fieldLabels: Record<keyof FormExampleData, string> = {
  firstname: 'First Name',
  lastname: 'Last Name',
  email: 'Email Address',
  phone: 'Phone Number',
  website: 'Website',
  age: 'Age',
  salary: 'Salary',
  birthday: 'Birthday',
  appointmentTime: 'Appointment Time',
  description: 'Description',
  country: 'Country',
  city: 'City',
  newsletter: 'Newsletter Subscription',
  terms: 'Terms and Conditions',
  privacy: 'Privacy Policy',
  contactPreference: 'Contact Preference',
  skills: 'Skills',
};
// Enhanced validation functions
export const validateField = (name: keyof FormExampleData, value: any): string => {
  switch (name) {
    case 'firstname':
    case 'lastname':
      if (!value || value.trim() === '') {
        return `${fieldLabels[name]} is required`;
      }
      if (value.trim().length < 2) {
        return `${fieldLabels[name]} must be at least 2 characters long`;
      }
      return '';
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || value.trim() === '') {
        return 'Email address is required';
      }
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address (e.g., user@example.com)';
      }
      return '';
    case 'phone':
      if (!value || value.trim() === '') {
        return 'Phone number is required';
      }
      const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        return 'Please enter a valid phone number (at least 10 digits)';
      }
      return '';
    case 'age':
      if (!value || value === '') {
        return 'Age is required';
      }
      const ageNum = Number(value);
      if (isNaN(ageNum)) {
        return 'Age must be a valid number';
      }
      if (ageNum < 18) {
        return 'You must be at least 18 years old';
      }
      if (ageNum > 120) {
        return 'Please enter a valid age (maximum 120)';
      }
      return '';
    case 'country':
      if (!value || value.trim() === '') {
        return 'Please select your country';
      }
      return '';
    case 'contactPreference':
      if (!value || value.trim() === '') {
        return 'Please select your preferred contact method';
      }
      return '';
    case 'terms':
      if (!value) {
        return 'You must accept the terms and conditions to proceed';
      }
      return '';
    default:
      return '';
  }
};

export const validateForm = (formData: FormExampleData): { isFormValid: boolean; errors: FormErrors } => {
  const newErrors: FormErrors = {};
  let isValid = true;

  // Define required fields
  const requiredFields: (keyof FormExampleData)[] = [
    'firstname',
    'lastname',
    'email',
    'phone',
    'age',
    'country',
    'contactPreference',
    'terms',
  ];

  // Validate required fields
  requiredFields.forEach(key => {
    const error = validateField(key, formData[key]);
    if (error) {
      newErrors[key] = error;
      isValid = false;
    }
  });

  return { isFormValid: isValid, errors: newErrors };
};

// Get form field status based on errors
export const getFieldStatus = (fieldName: keyof FormExampleData, errors: FormErrors): 'default' | 'error' => {
  return errors[fieldName] ? 'error' : 'default';
};

// Get form field status based on errors
export const getFieldStatusV1 = (fieldName: keyof FormExampleData, errors: FormErrors): '' | 'error' => {
  return errors[fieldName] ? 'error' : '';
};

// Generate detailed error message for form submission
export const generateDetailedErrorMessage = (errors: FormErrors): string => {
  const errorFields = Object.keys(errors).filter(key => errors[key]);

  if (errorFields.length === 0) {
    return '';
  }

  const fieldNames = errorFields.map(field => fieldLabels[field as keyof FormExampleData]).join(', ');

  if (errorFields.length === 1) {
    return `Please fix the error in: ${fieldNames}`;
  } else if (errorFields.length === 2) {
    return `Please fix the errors in: ${fieldNames}`;
  } else {
    const lastField = fieldNames.split(', ').pop();
    const otherFields = fieldNames.split(', ').slice(0, -1).join(', ');
    return `Please fix the errors in: ${otherFields}, and ${lastField}`;
  }
};

const CITY_OPTIONS = {
  DE: [
    { value: 'berlin', label: 'Berlin' },
    { value: 'munich', label: 'Munich' },
    { value: 'hamburg', label: 'Hamburg' },
  ],
  AT: [
    { value: 'vienna', label: 'Vienna' },
    { value: 'salzburg', label: 'Salzburg' },
  ],
  CH: [
    { value: 'zurich', label: 'Zurich' },
    { value: 'geneva', label: 'Geneva' },
  ],
} as const;

export const focusFirstError = (errors: FormErrors) => {
  const errorFields = Object.keys(errors).filter(key => errors[key]);
  if (errorFields.length > 0) {
    const firstErrorField = errorFields[0];
    const element = document.querySelector(`[data-field="${firstErrorField}"]`) as HTMLElement;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
};

export const CityOptions = ({ country }: { country: keyof typeof CITY_OPTIONS | '' }) => {
  if (country === '') return null;
  return (
    <>
      {CITY_OPTIONS[country].map(({ value, label }) => (
        <PatternlibOptionV1 key={value} value={value}>
          {label}
        </PatternlibOptionV1>
      ))}
    </>
  );
};
