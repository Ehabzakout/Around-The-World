import { useState, useEffect } from 'react';
import { CountryInfo } from '../../TS/data';

export default function RegionBar({
  setFiltered,
  countries,
}: {
  setFiltered: React.Dispatch<React.SetStateAction<CountryInfo[]>>;
  countries: CountryInfo[];
}) {
  const [region, setReg] = useState<string>('');
  const options = [
    { value: 'allRegion', label: 'All Region' },
    { value: 'asia', label: 'Asia' },
    { value: 'africa', label: 'Africa' },
    { value: 'europa', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];

  const handleChange = (e: string) => {
    if (e === 'All Region') setReg('');
    else setReg(e);
  };
  const filter = () => {
    const filteredCountries =
      region === ''
        ? countries
        : countries?.filter((country) => country.region === region);
    return setFiltered(filteredCountries);
  };
  useEffect(() => {
    filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);
  console.log(region);
  return (
    <>
      <div className="sm:w-1/3 md:w-1/4">
        <input
          onChange={(e) => handleChange(e.target.value)}
          list="regions"
          name="region"
          id="region"
          onClick={(e) => {
            (e.target as HTMLInputElement).value = '';
            setReg('');
          }}
          placeholder="Filter by Region..."
          className="dark:text-zinc-100 outline-none dark:bg-zinc-500 bg-zinc-100 w-full h-8 rounded-md border-none pl-4 pr-2 shadow-md"
        ></input>
      </div>
      <datalist className=" bg-zinc-500 " id="regions">
        {options.map((option) => (
          <option
            key={option.value}
            value={option.label}
            className=" bg-zinc-500 "
          >
            {option.label}
          </option>
        ))}
      </datalist>
    </>
  );
}
