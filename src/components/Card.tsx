import { Link } from 'react-router-dom';
import { cardData } from '../../TS/data';

const Card = ({ countryData }: { countryData: cardData }) => {
  const { name, population, capital, region, flag } = countryData;
  return (
    <>
      <Link to={name}>
        <div className="rounded-md bg-zinc-100 p-2 shadow-md sm:w-[264px] md:w-[250px] dark:bg-gray-800">
          <img
            src={flag}
            alt="NO photo"
            className="rounded-md w-full h-32 object-contain"
          ></img>
          <div className="mt-3 mb-4 px-3 flex items-center h-8 text-[14px] font-semibold">
            <h1>{name}</h1>
          </div>
          <div className="px-3">
            <h1 className="text-sm font-semibold">
              Population: <span className="font-normal">{population}</span>
            </h1>
            <h1 className="text-sm font-semibold">
              Reigon: <span className="font-normal">{region}</span>
            </h1>
            <h1 className="text-sm font-semibold">
              Capital: <span className="font-normal">{capital}</span>{' '}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
