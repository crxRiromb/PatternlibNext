import type { PatternlibRadiobuttonCustomEvent } from '@liebherr/patternlib/dist/types/components';
import { PatternlibRadiobutton, PatternlibRadiobuttonItem } from '@liebherr/patternlib-react';
import React from 'react';

import { type FormErrors, type FormExampleData, getFieldStatus } from '~/routes/form/form.util';

type PreferencesSectionProps = {
  errors: FormErrors;
  handleRadioButtonChange: (
    name: keyof FormExampleData,
  ) => (event: PatternlibRadiobuttonCustomEvent<{ value: string; name: string }>) => void;
};

export const PreferencesSection: React.FC<PreferencesSectionProps> = ({ errors, handleRadioButtonChange }) => (
  <fieldset className="space-y-6">
    <legend className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">Preferences</legend>

    {/* Contact Preference */}
    <div
      role="radiogroup"
      aria-labelledby="contact-preference-label"
      aria-required="true"
      aria-invalid={errors.contactPreference ? 'true' : 'false'}
      aria-describedby={errors.contactPreference ? 'contact-preference-error' : 'contact-preference-hint'}
    >
      <div id="contact-preference-label" className="block text-sm font-medium text-gray-700 mb-2">
        Preferred Contact Method *
      </div>
      <div id="contact-preference-hint" className="sr-only">
        Select your preferred method of contact. Choose either phone or email.
      </div>

      <PatternlibRadiobutton
        data-field="contactPreference"
        onLhChange={handleRadioButtonChange('contactPreference')}
        status={getFieldStatus('contactPreference', errors)}
        aria-errormessage={errors.contactPreference}
      >
        <PatternlibRadiobuttonItem value="phone">Phone</PatternlibRadiobuttonItem>
        <PatternlibRadiobuttonItem value="mail">Email</PatternlibRadiobuttonItem>
      </PatternlibRadiobutton>

      {errors.contactPreference && (
        <div id="contact-preference-error" role="alert" aria-live="polite" className="text-red-600 text-sm mt-2">
          {errors.contactPreference}
        </div>
      )}
    </div>
  </fieldset>
);
