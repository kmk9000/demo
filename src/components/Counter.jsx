const Counter = ({ count, setCount }) => {
  //   const handleColor = () => {
  //     if (count === 0) {
  //       return "white";
  //     } else if (count > 0) {
  //       return "green";
  //     } else if (count < 0) {
  //       return "red";
  //     }
  //   };

  const handleColor = () => {
    switch (true) {
      case count === 0:
        return "white";
      case count > 0:
        return "green";
      case count < 0:
        return "red";
    }
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <div style={{ color: handleColor() }}>{count}</div>
      {/* <div style={{ color: count > 0 ? "green" : "red" }}>{count}</div> */}
    </>
  );
};

export default Counter;
