import { PlButton } from '@liebherr2/reactnext';

export default function Pl4Integration() {
  const handleButtonClick = () => {
    console.log('React Wrapper V4 Button geklickt!');
  };

  return (
    <div className="grid grid-cols-3 gap-[16px]">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '32px' }}>
        <PlButton label="V4 Primary" onClick={handleButtonClick} />
        <PlButton label="V4 Secondary" variant="secondary" onClick={handleButtonClick} />
        <PlButton label="V4 Disabled" disabled={true} onClick={handleButtonClick} />
      </div>
    </div>
  );
}
