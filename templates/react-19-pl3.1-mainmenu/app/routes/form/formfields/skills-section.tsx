import type { LhMultipleOptionSelectEvent } from '@liebherr/patternlib';
import { PatternlibCheckOption, PatternlibMultiselect } from '@liebherr/patternlib-react';
import React from 'react';

import { type FormExampleData } from '~/routes/form/form.util';

type SkillsSectionProps = {
  multiSelectRef: React.RefObject<HTMLPatternlibMultiselectElement | null>;
  handleMultiselectChange: (name: keyof FormExampleData) => (event: CustomEvent<LhMultipleOptionSelectEvent>) => void;
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ multiSelectRef, handleMultiselectChange }) => (
  <fieldset className="space-y-6">
    <legend className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">Skills</legend>

    <div role="group" aria-labelledby="skills-label" aria-describedby="skills-hint">
      <div id="skills-label" className="sr-only">
        Select your technical skills
      </div>
      <div id="skills-hint" className="sr-only">
        Optional field. Select all technologies and programming languages you are familiar with. You can select multiple
        options.
      </div>

      <PatternlibMultiselect
        ref={multiSelectRef}
        data-field="skills"
        onLhSelect={handleMultiselectChange('skills')}
        controlled={true}
        aria-label="Technical Skills Selection"
      >
        <PatternlibCheckOption value="javascript" label="JavaScript"></PatternlibCheckOption>
        <PatternlibCheckOption value="typescript" label="TypeScript"></PatternlibCheckOption>
        <PatternlibCheckOption value="react" label="React"></PatternlibCheckOption>
        <PatternlibCheckOption value="angular" label="Angular"></PatternlibCheckOption>
        <PatternlibCheckOption value="vue" label="Vue.js"></PatternlibCheckOption>
        <PatternlibCheckOption value="svelte" label="Svelte"></PatternlibCheckOption>
        <PatternlibCheckOption value="nodejs" label="Node.js"></PatternlibCheckOption>
        <PatternlibCheckOption value="python" label="Python"></PatternlibCheckOption>
        <PatternlibCheckOption value="java" label="Java"></PatternlibCheckOption>
        <PatternlibCheckOption value="csharp" label="C#"></PatternlibCheckOption>
        <PatternlibCheckOption value="php" label="PHP"></PatternlibCheckOption>
        <PatternlibCheckOption value="ruby" label="Ruby"></PatternlibCheckOption>
        <PatternlibCheckOption value="go" label="Go (Golang) - A powerful systems language"></PatternlibCheckOption>
        <PatternlibCheckOption value="rust" label="Rust"></PatternlibCheckOption>
        <PatternlibCheckOption value="kotlin" label="Kotlin"></PatternlibCheckOption>
        <PatternlibCheckOption value="swift" label="Swift"></PatternlibCheckOption>
        <PatternlibCheckOption value="dart" label="Dart"></PatternlibCheckOption>
        <PatternlibCheckOption value="flutter" label="Flutter"></PatternlibCheckOption>
        <PatternlibCheckOption value="docker">Docker</PatternlibCheckOption>
        <PatternlibCheckOption value="kubernetes" label="Kubernetes"></PatternlibCheckOption>
        <PatternlibCheckOption value="aws" label="AWS"></PatternlibCheckOption>
      </PatternlibMultiselect>
    </div>
  </fieldset>
);
