import type { PatternlibDropdownV1CustomEvent } from '@liebherr/patternlib/dist/types/components';
import { PatternlibDropdownV1, PatternlibOptionV1 } from '@liebherr/patternlib-react';
import React from 'react';

import { CityOptions, type FormErrors, type FormExampleData, getFieldStatusV1 } from '~/routes/form/form.util';

type LocationInformationSectionProps = {
  handleDropdownOptionSelect: (name: keyof FormExampleData) => (event: PatternlibDropdownV1CustomEvent<string>) => void;
  formData: FormExampleData;
  errors: FormErrors;
  handleInputChange: (name: keyof FormExampleData) => (event: CustomEvent) => void;
};

export const LocationInformationSection: React.FC<LocationInformationSectionProps> = ({
  handleDropdownOptionSelect,
  formData,
  errors,
  handleInputChange,
}) => (
  <fieldset className="space-y-6">
    <legend className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">Location Information</legend>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <PatternlibDropdownV1
          data-field="country"
          value={formData.country}
          placeholder="Select your country"
          label="Country *"
          onLhSelect={handleDropdownOptionSelect('country')}
          status={getFieldStatusV1('country', errors)}
          statusText={errors.country}
          controlled={true}
          aria-required="true"
          aria-invalid={errors.country ? 'true' : 'false'}
          aria-describedby={errors.country ? 'country-error' : 'country-hint'}
        >
          <PatternlibOptionV1 value="DE">Germany</PatternlibOptionV1>
          <PatternlibOptionV1 value="AT">Austria</PatternlibOptionV1>
          <PatternlibOptionV1 value="CH">Switzerland</PatternlibOptionV1>
          <PatternlibOptionV1 value="US">United States</PatternlibOptionV1>
          <PatternlibOptionV1 value="UK">United Kingdom</PatternlibOptionV1>
          <PatternlibOptionV1 value="FR">France</PatternlibOptionV1>
        </PatternlibDropdownV1>
        <div id="country-hint" className="sr-only">
          Select your country of residence
        </div>
      </div>

      <div>
        <PatternlibDropdownV1
          data-field="city"
          value={formData.city}
          placeholder="Select your city"
          label="City (Optional)"
          onLhSelect={handleDropdownOptionSelect('city')}
          disabled={!formData.country}
          aria-describedby="city-hint"
          controlled={true}
        >
          <CityOptions country={formData.country}></CityOptions>
        </PatternlibDropdownV1>
        <div id="city-hint" className="sr-only">
          Optional field. Select your city. This field becomes available after selecting a country.
        </div>
      </div>
    </div>
  </fieldset>
);
