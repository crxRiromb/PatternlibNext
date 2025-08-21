import { PatternlibButton, PatternlibIcon } from '@liebherr/patternlib-react';
import { PlButton } from '@liebherr2/reactnext';

export default function Button() {
  const handleButtonClick = () => {
    console.log('React Wrapper V4 Button geklickt!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
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
      <div className="grid grid-cols-3 gap-[16px]">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '32px' }}>
          <PlButton label="V4 Primary" onClick={handleButtonClick} />
          <PlButton label="V4 Secondary" variant="secondary" onClick={handleButtonClick} />
          <PlButton label="V4 Disabled" disabled={true} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}
