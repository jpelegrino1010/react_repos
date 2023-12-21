import { useCallback, useState } from "react";
import Child from "./child";

const UseCallBackHook = () => {
  const [data, setData] = useState("Hello world!!");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(() => {
    return data;
  }, [data]);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <Child returnComment={returnComment} />
      {toggle && <span>Toggle</span>}
    </>
  );
};

export default UseCallBackHook;
