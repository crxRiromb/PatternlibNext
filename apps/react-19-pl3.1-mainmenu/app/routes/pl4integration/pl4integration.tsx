import { PlButton } from "@liebherr2/reactnext";

export default function Pl4Integration() {
  const handleButtonClick = () => {
    console.log("React Wrapper V4 Button geklickt!");
  };

  return (
    <div className="grid grid-cols-3 gap-[16px]">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          marginTop: "32px",
        }}
      >
        <p>React Wrapper V4</p>
        <PlButton label="V4 Primary" onClick={handleButtonClick} />
      </div>
    </div>
  );
}
