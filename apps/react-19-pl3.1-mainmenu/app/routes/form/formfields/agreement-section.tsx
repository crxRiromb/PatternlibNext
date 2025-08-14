import type { PatternlibCheckboxV1CustomEvent } from '@liebherr/patternlib/dist/types/components';
import { PatternlibCheckboxV1 } from '@liebherr/patternlib-react';
import React from 'react';

import { type FormErrors, type FormExampleData, getFieldStatusV1 } from '~/routes/form/form.util';

type AgreementSectionProps = {
  errors: FormErrors;
  handleCheckboxSelect: (
    name: keyof FormExampleData,
  ) => (event: PatternlibCheckboxV1CustomEvent<{ checked: boolean; name: string }>) => void;
  formData: FormExampleData;
};

export const AgreementSection: React.FC<AgreementSectionProps> = ({ errors, handleCheckboxSelect, formData }) => (
  <fieldset className="space-y-6">
    <legend className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
      Agreements and Consents
    </legend>

    <div className="space-y-4">
      <div>
        <PatternlibCheckboxV1
          data-field="terms"
          controlled={true}
          checked={formData.terms}
          onLhChange={handleCheckboxSelect('terms')}
          aria-required="true"
          aria-invalid={errors.terms ? 'true' : 'false'}
          aria-describedby={errors.terms ? 'terms-error' : 'terms-hint'}
          status={getFieldStatusV1('terms', errors)}
          {...{ 'aria-errormessage': errors.terms !== '' ? errors.terms : undefined }}
        >
          I agree to the{' '}
          <a
            href="#terms"
            className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
            aria-label="Terms and Conditions (opens in new window)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions
          </a>{' '}
          *
        </PatternlibCheckboxV1>
        <div id="terms-hint" className="sr-only">
          Required agreement. You must accept the terms and conditions to proceed.
        </div>
        {errors.terms && (
          <div id="terms-error" role="alert" aria-live="polite" className="text-red-600 text-sm mt-2">
            {errors.terms}
          </div>
        )}
      </div>

      <PatternlibCheckboxV1
        data-field="privacy"
        controlled={true}
        checked={formData.privacy}
        onLhChange={handleCheckboxSelect('privacy')}
        aria-describedby="privacy-hint"
      >
        I agree to the{' '}
        <a
          href="#privacy"
          className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
          aria-label="Privacy Policy (opens in new window)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </PatternlibCheckboxV1>
      <div id="privacy-hint" className="sr-only">
        Optional agreement. Check this box if you agree to the privacy policy.
      </div>

      <PatternlibCheckboxV1
        data-field="newsletter"
        controlled={true}
        checked={formData.newsletter}
        onLhChange={handleCheckboxSelect('newsletter')}
        aria-describedby="newsletter-hint"
      >
        Subscribe to newsletter for updates and offers
      </PatternlibCheckboxV1>
      <div id="newsletter-hint" className="sr-only">
        Optional subscription. Check this box to receive newsletters with updates and offers.
      </div>
    </div>
  </fieldset>
);
