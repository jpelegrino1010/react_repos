import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v2/name/portugal"
      );

      if (!response.ok) throw new Error("Error trying to access the api");

      const data = await response.json();

      setCountries(data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  console.log(countries);
  return;
};

export default UseEffectHook;
