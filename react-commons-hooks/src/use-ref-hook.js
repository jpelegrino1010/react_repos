import { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </>
  );
};

export default UseRefHook;
