import { PatternlibButton, PatternlibIcon } from '@liebherr/patternlib-react';

export default function Button() {
  return (
    <div className="grid grid-cols-3 gap-[16px]">
      <PatternlibButton>Button Text</PatternlibButton>
      <PatternlibButton type="secondary">Button Text</PatternlibButton>
      <PatternlibButton type="secondary-inverted">Button Text</PatternlibButton>
      <PatternlibButton type="warning">Button Text</PatternlibButton>
      <PatternlibButton label="Text only"></PatternlibButton>
      <PatternlibButton label="Icon + Text" icon-position="left">
        <PatternlibIcon iconName="download" size="24px" slot="icon" tabIndex={-1} />
      </PatternlibButton>
      <PatternlibButton label="CTA" icon-position="right">
        <PatternlibIcon iconName="font-arrow" size="24px" slot="icon" tabIndex={-1} />
      </PatternlibButton>
      <PatternlibButton label="loading" loading={true}></PatternlibButton>
    </div>
  );
}
