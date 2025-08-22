import { PlButton, PlIcon } from "@liebherr2/reactnext";

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
        <p>Button React Wrapper V4</p>
        <PlButton label="V4 Primary" onClick={handleButtonClick} />

        <p>Icon React Wrapper V4</p>
        <PlIcon
          iconName="globe"
          alt="Globe Icon"
          onClick={() => console.log("Globe Icon clicked")}
        />
        <PlIcon
          iconName="search"
          alt="Search Icon"
          onClick={() => console.log("Search Icon clicked")}
        />
      </div>
    </div>
  );
}
