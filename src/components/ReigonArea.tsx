import Select, { SingleValue } from 'react-select';

import { CountryInfo } from '../../TS/data';

const options = [
  { value: 'allRegion', label: 'All Region' },
  { value: 'asia', label: 'Asia' },
  { value: 'africa', label: 'Africa' },
  { value: 'europa', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const ReigonMenue = ({
  setFiltered,
  countries,
}: {
  countries: CountryInfo[];
  setFiltered: React.Dispatch<React.SetStateAction<CountryInfo[]>>;
}) => {
  const HandleChange = (e: SingleValue<{ value: string; label: string }>) => {
    const region = e?.label;
    const filteredCountries =
      region === 'All Region'
        ? countries
        : countries?.filter((country) => country.region === region);
    setFiltered(filteredCountries);
  };
  return (
    <>
      <div className="sm:w-1/3 md:w-1/4">
        <Select
          defaultValue={options[0]}
          onChange={HandleChange}
          options={options}
          classNames={{
            input: () => 'dark:!text-zinc-100 dark:!bg-zinc-600',
            singleValue: () => 'dark:!text-zinc-800',
            // control:()=>"flex h-12 items-center gap-12 rounded-md !border-none pl-4 pr-2 shadow-md",
            option: () => 'hover:!text-gray-800 hover:bg-zinc-200',
            menu: () => '!bg-zinc-100 dark:!bg-zinc-600',
          }}
        />
      </div>
    </>
  );
};
export default ReigonMenue;
