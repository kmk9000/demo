import { useState } from "react";

export default function TextInput() {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const isTooLong = state.length > 20;
  return (
    <>
      <input type="text" value={state} onChange={handleChange} />
      <p style={{ color: isTooLong ? "red" : "black" }}>
        You typed {state.length} characters
      </p>
    </>
  );
}
