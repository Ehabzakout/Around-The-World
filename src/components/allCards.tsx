import Card from './Card';
import { CountryInfo } from './../../TS/data';
import NotFound from './NotFound';

const AllCards = ({ countries }: { countries: CountryInfo[] }) => {
  return (
    <>
      <div className="container mt-8 flex flex-wrap md:justify-between gap-3 sm:justify-center">
        {countries.length > 0 ? (
          countries?.map((country) => (
            <Card
              key={country.name.official}
              countryData={{
                name: country.name.common,
                population: country.population,
                capital: country.capital,
                region: country.region,
                flag: country.flags.svg,
              }}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default AllCards;
