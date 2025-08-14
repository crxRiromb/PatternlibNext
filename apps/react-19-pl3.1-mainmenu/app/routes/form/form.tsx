import type { LhMultipleOptionSelectEvent, LhOptionItem } from '@liebherr/patternlib';
import type {
  PatternlibCheckboxV1CustomEvent,
  PatternlibDatepickerSingleCustomEvent,
  PatternlibDropdownV1CustomEvent,
  PatternlibRadiobuttonCustomEvent,
} from '@liebherr/patternlib/dist/types/components';
import { PatternlibButton, PatternlibIcon } from '@liebherr/patternlib-react';
import React, { useRef, useState } from 'react';
import type { MetaFunction } from 'react-router';

import {
  focusFirstError,
  type FormErrors,
  type FormExampleData,
  generateDetailedErrorMessage,
  validateForm,
} from '~/routes/form/form.util';
import { AdditionalInformationSection } from '~/routes/form/formfields/additional-information-section';
import { AgreementSection } from '~/routes/form/formfields/agreement-section';
import { LocationInformationSection } from '~/routes/form/formfields/lcoation-information-section';
import { PreferencesSection } from '~/routes/form/formfields/peferences-section';
import { PersonalInfoSection } from '~/routes/form/formfields/personal-info-section';
import { SkillsSection } from '~/routes/form/formfields/skills-section';

export const meta: MetaFunction = () => {
  return [
    { title: 'Form Examples - React Template' },
    { name: 'description', content: 'Best practices form examples using PatternLib components in React' },
  ];
};

export default function FormPage() {
  const [formData, setFormData] = useState<FormExampleData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    website: '',
    age: '',
    salary: '',
    birthday: '',
    appointmentTime: '',
    description: '',
    country: '',
    city: '',
    newsletter: false,
    terms: false,
    privacy: false,
    contactPreference: '',
    skills: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string>('');

  // Refs for accessibility
  const formRef = useRef<HTMLFormElement>(null);
  const multiSelectRef = useRef<HTMLPatternlibMultiselectElement>(null);
  const submitStatusRef = useRef<HTMLDivElement>(null);

  // Focus management for errors

  // Input handlers for text inputs
  const handleInputChange = (name: keyof FormExampleData) => (event: CustomEvent) => {
    const { value } = event.detail;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handler for PatternlibCheckOption - single checkbox
  const handleCheckboxSelect =
    (name: keyof FormExampleData) => (event: PatternlibCheckboxV1CustomEvent<{ checked: boolean; name: string }>) => {
      const { checked } = event.detail;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }));

      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: '',
        }));
      }
    };

  const handleDatepickerSingleChange =
    (name: keyof FormExampleData) => (event: PatternlibDatepickerSingleCustomEvent<Date>) => {
      const value = event.detail;
      setFormData(prev => ({
        ...prev,
        [name]: value.toISOString(),
      }));
    };

  const handleDropdownOptionSelect =
    (name: keyof FormExampleData) => (event: PatternlibDropdownV1CustomEvent<string>) => {
      const value = event.detail;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when selection is made
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: '',
        }));
      }
    };

  const handleRadioButtonChange =
    (name: keyof FormExampleData) => (event: PatternlibRadiobuttonCustomEvent<{ value: string; name: string }>) => {
      const { value } = event.detail;
      if (value) {
        setFormData(prev => ({
          ...prev,
          [name]: value,
        }));

        // Clear error when selection is made
        if (errors[name]) {
          setErrors(prev => ({
            ...prev,
            [name]: '',
          }));
        }
      }
    };

  const handleMultiselectChange =
    (name: keyof FormExampleData) => (event: CustomEvent<LhMultipleOptionSelectEvent>) => {
      const optionItems: LhOptionItem[] = event.detail.selected as unknown as LhOptionItem[];
      const value = optionItems.map(item => item.value);

      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));

      if (multiSelectRef.current) {
        multiSelectRef.current.value = value;
      }

      // Clear error when selection is made
      if (errors[name] && value && value.length > 0) {
        setErrors(prev => ({
          ...prev,
          skills: '',
        }));
      }
    };

  const handleSubmit = async (event: CustomEvent | React.FormEvent) => {
    event.preventDefault();
    const { isFormValid, errors } = validateForm(formData);
    setErrors(errors);
    if (!isFormValid) {
      const detailedErrorMessage = generateDetailedErrorMessage(errors);
      setSubmitResult(detailedErrorMessage);

      // Focus first error field
      setTimeout(() => focusFirstError(errors), 100);

      return;
    }

    setIsSubmitting(true);
    setSubmitResult('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitResult('Form submitted successfully!');

      console.log('Form Data:', formData);

      // Focus success message
      setTimeout(() => {
        submitStatusRef.current?.focus();
      }, 100);
    } catch (error) {
      const errorMessage = 'An error occurred while submitting the form. Please try again.';
      setSubmitResult(errorMessage);

      // Focus error message
      setTimeout(() => {
        submitStatusRef.current?.focus();
      }, 100);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      website: '',
      age: '',
      salary: '',
      birthday: '',
      appointmentTime: '',
      description: '',
      country: '',
      city: '',
      newsletter: false,
      terms: false,
      privacy: false,
      contactPreference: '',
      skills: [],
    });
    setErrors({});
    setSubmitResult('');

    // Focus first field after reset
    setTimeout(() => {
      const firstField = document.querySelector('[data-field="firstname"]') as HTMLElement;
      firstField?.focus();
    }, 100);
  };

  // Skip to main content link (for keyboard users)
  const SkipToMainLink = () => (
    <a
      href="#main-form"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                 bg-blue-600 text-white px-4 py-2 rounded-md z-50
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Skip to main form
    </a>
  );

  const renderSubmitResult = () => {
    if (!submitResult) return;
    return (
      <div
        ref={submitStatusRef}
        role={submitResult.includes('success') ? 'status' : 'alert'}
        aria-live={submitResult.includes('success') ? 'polite' : 'assertive'}
        tabIndex={-1}
        className={`p-4 rounded-lg border ${
          submitResult.includes('success')
            ? 'bg-green-50 text-green-800 border-green-200 focus:ring-green-500'
            : 'bg-red-50 text-red-800 border-red-200 focus:ring-red-500'
        }`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            {submitResult.includes('success') ? (
              <PatternlibIcon iconName={'checkmark'} />
            ) : (
              <PatternlibIcon iconName={'x'} />
            )}
          </div>
          <div className="ml-3">
            <p className="font-medium">{submitResult.includes('success') ? 'Success!' : 'Error!'}</p>
            <p className="mt-1 text-sm">{submitResult}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SkipToMainLink />

      <div className="page-content mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">React Form Best Practices</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            This form demonstrates best practices for React forms using PatternLib components with comprehensive
            validation, error handling, and accessibility features.
          </p>
        </header>

        <main>
          <form
            id="main-form"
            noValidate
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8"
            aria-describedby="form-instructions"
            role="form"
          >
            <PersonalInfoSection
              errors={errors}
              handleInputChange={handleInputChange}
              onDateChange={handleDatepickerSingleChange}
              formData={formData}
            />

            <LocationInformationSection
              errors={errors}
              handleInputChange={handleInputChange}
              formData={formData}
              handleDropdownOptionSelect={handleDropdownOptionSelect}
            ></LocationInformationSection>

            <AdditionalInformationSection
              description={formData.description}
              handleInputChange={handleInputChange}
            ></AdditionalInformationSection>
            <SkillsSection
              multiSelectRef={multiSelectRef}
              handleMultiselectChange={handleMultiselectChange}
            ></SkillsSection>

            <PreferencesSection errors={errors} handleRadioButtonChange={handleRadioButtonChange}></PreferencesSection>

            {/* Agreement Section */}
            <AgreementSection
              errors={errors}
              formData={formData}
              handleCheckboxSelect={handleCheckboxSelect}
            ></AgreementSection>

            {/* Submit Result */}
            {renderSubmitResult()}

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
              <PatternlibButton
                type="primary"
                disabled={isSubmitting}
                onClick={handleSubmit}
                aria-describedby="submit-button-hint"
              >
                {isSubmitting ? 'Submitting Form...' : 'Submit Form'}
              </PatternlibButton>
              <div id="submit-button-hint" className="sr-only">
                {isSubmitting
                  ? 'Form is currently being submitted. Please wait.'
                  : 'Submit the form after filling in all required fields.'}
              </div>

              <PatternlibButton
                type="secondary"
                disabled={isSubmitting}
                onClick={resetForm}
                aria-describedby="reset-button-hint"
              >
                Reset Form
              </PatternlibButton>
              <div id="reset-button-hint" className="sr-only">
                Reset all form fields to their default values. This action cannot be undone.
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
