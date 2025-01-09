import { CountryInfo } from '../../TS/data';

export default function Search({
  setFiltered,
  countries,
}: {
  setFiltered: React.Dispatch<React.SetStateAction<CountryInfo[]>>;
  countries: CountryInfo[];
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    const filter =
      value !== ''
        ? countries?.filter((country) =>
            country.name.common
              .toLocaleLowerCase()
              .includes(value.toLocaleLowerCase())
          )
        : countries;
    setFiltered(filter);
  }

  return (
    <>
      <div className="sm:w-1/2 md:w-1/3">
        <div className="flex items-center overflow-hidden rounded-full bg-zinc-100 px-3 shadow-md dark:bg-zinc-500">
          <i className="fa-solid fa-magnifying-glass transition-transform duration-300 hover:rotate-90 hover:transform dark:!text-zinc-100"></i>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            placeholder="Search..."
            className="boreder-none ml-3 bg-zinc-100 p-2 outline-none dark:bg-zinc-500 dark:caret-white"
          ></input>
        </div>
      </div>
    </>
  );
}
