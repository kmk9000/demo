import { useState } from "react";

export default function OnButton() {
  const [buttonState, setButtonState] = useState(false);
  const handleClick = () => {
    setButtonState(!buttonState);
  };
  return (
    <>
      <button onClick={handleClick}>
        {buttonState == true ? "ON" : "OFF"}
      </button>
    </>
  );
}
