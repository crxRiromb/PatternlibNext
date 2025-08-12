import type { PatternlibDatepickerSingleCustomEvent } from '@liebherr/patternlib/dist/types/components';
import { PatternlibDatepickerSingle, PatternlibTextinput, PatternlibTimeinput } from '@liebherr/patternlib-react';
import React from 'react';

import { type FormErrors, type FormExampleData, getFieldStatus } from '~/routes/form/form.util';

type PersonalInfoSectionProps = {
  formData: FormExampleData;
  errors: FormErrors;
  handleInputChange: (name: keyof FormExampleData) => (event: CustomEvent) => void;
  onDateChange: (name: keyof FormExampleData) => (event: PatternlibDatepickerSingleCustomEvent<Date>) => void;
};

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  formData,
  errors,
  handleInputChange,
  onDateChange,
}) => (
  <fieldset className="space-y-6">
    <legend className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">Personal Information</legend>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <PatternlibTextinput
          data-field="firstname"
          value={formData.firstname}
          placeholder="Enter your first name"
          label="First Name *"
          onLhChange={handleInputChange('firstname')}
          status={getFieldStatus('firstname', errors)}
          errorText={errors.firstname}
          aria-required="true"
          aria-invalid={errors.firstname ? 'true' : 'false'}
          aria-describedby={errors.firstname ? 'firstname-error' : undefined}
        />
      </div>

      <div>
        <PatternlibTextinput
          data-field="lastname"
          value={formData.lastname}
          placeholder="Enter your last name"
          label="Last Name *"
          onLhChange={handleInputChange('lastname')}
          status={getFieldStatus('lastname', errors)}
          errorText={errors.lastname}
          aria-required="true"
          aria-invalid={errors.lastname ? 'true' : 'false'}
          aria-describedby={errors.lastname ? 'lastname-error' : undefined}
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <PatternlibTextinput
          data-field="email"
          type="email"
          value={formData.email}
          placeholder="Enter your email address"
          label="Email Address *"
          onLhChange={handleInputChange('email')}
          status={getFieldStatus('email', errors)}
          errorText={errors.email}
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : 'email-hint'}
        />
        <div id="email-hint" className="sr-only">
          Enter a valid email address like user@example.com
        </div>
      </div>

      <div>
        <PatternlibTextinput
          data-field="phone"
          value={formData.phone}
          placeholder="Enter your phone number"
          label="Phone Number *"
          onLhChange={handleInputChange('phone')}
          status={getFieldStatus('phone', errors)}
          errorText={errors.phone}
          aria-required="true"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
        />
        <div id="phone-hint" className="sr-only">
          Enter a phone number with at least 10 digits
        </div>
      </div>
    </div>

    <PatternlibTextinput
      data-field="website"
      type="url"
      value={formData.website}
      placeholder="https://www.example.com"
      label="Website (Optional)"
      onLhChange={handleInputChange('website')}
      aria-describedby="website-hint"
    />
    <div id="website-hint" className="sr-only">
      Optional field. Enter a complete URL starting with http:// or https://
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <PatternlibTextinput
          data-field="age"
          type="number"
          value={formData.age.toString()}
          placeholder="Enter your age"
          label="Age *"
          min="18"
          max="120"
          onLhChange={handleInputChange('age')}
          status={getFieldStatus('age', errors)}
          errorText={errors.age}
          aria-required="true"
          aria-invalid={errors.age ? 'true' : 'false'}
          aria-describedby={errors.age ? 'age-error' : 'age-hint'}
        />
        <div id="age-hint" className="sr-only">
          Enter your age. Must be between 18 and 120 years old
        </div>
      </div>

      <PatternlibTextinput
        data-field="salary"
        type="number"
        value={formData.salary.toString()}
        placeholder="Enter expected salary"
        label="Expected Salary (Optional)"
        min="0"
        onLhChange={handleInputChange('salary')}
        aria-describedby="salary-hint"
      />
      <div id="salary-hint" className="sr-only">
        Optional field. Enter your expected salary in your local currency
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PatternlibDatepickerSingle
        data-field="birthday"
        controlled={true}
        value={formData.birthday}
        label="Birthday (Optional)"
        onLhChange={onDateChange('birthday')}
        aria-describedby="birthday-hint"
      />
      <div id="birthday-hint" className="sr-only">
        Optional field. Select your date of birth
      </div>

      <PatternlibTimeinput
        data-field="appointmentTime"
        value={formData.appointmentTime}
        label="Appointment Time (Optional)"
        onLhChange={handleInputChange('appointmentTime')}
        aria-describedby="time-hint"
      />
      <div id="time-hint" className="sr-only">
        Optional field. Select a preferred appointment time
      </div>
    </div>
  </fieldset>
);
