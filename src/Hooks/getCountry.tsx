import { useEffect, useState } from 'react';

export default function useCountry(name: string | undefined) {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    getCountry();
  }, []);

  async function getCountry() {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    setCountryData(data);
    return data;
  }

  return { countryData };
}
