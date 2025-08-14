import { PatternlibTextareaV1 } from '@liebherr/patternlib-react';
import React from 'react';

import { type FormExampleData } from '~/routes/form/form.util';

type AdditionalInformationSectionProps = {
  description: FormExampleData['description'];
  handleInputChange: (name: keyof FormExampleData) => (event: CustomEvent) => void;
};

export const AdditionalInformationSection: React.FC<AdditionalInformationSectionProps> = ({
  handleInputChange,
  description,
}) => (
  <fieldset className="space-y-6">
    <legend className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
      Additional Information
    </legend>

    <PatternlibTextareaV1
      data-field="description"
      value={description}
      placeholder="Tell us about yourself..."
      label="Description (Optional)"
      onLhChange={handleInputChange('description')}
      aria-describedby="description-hint"
    />
    <div id="description-hint" className="sr-only">
      Optional field. Provide additional information about yourself, your interests, or experience.
    </div>
  </fieldset>
);
