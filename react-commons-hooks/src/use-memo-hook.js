import { useEffect, useMemo, useState } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/name/portugal")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const displayMessage = () => {
    console.log("Hello World everybody!!");
  };

  const displayMemoMessage = useMemo(() => displayMessage(), [data]);

  return (
    <>
      <div>{displayMemoMessage}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <span>Toggle</span>}
    </>
  );
};

export default UseMemoHook;
