import { Link, useParams } from 'react-router-dom';
import useCountry from '../Hooks/getCountry';
import Loading from '../components/Loading';
import { CountryInfo } from './../../TS/data';
import { Helmet } from 'react-helmet';

export default function Country() {
  const { country } = useParams();
  const { countryData }: { countryData: CountryInfo[] } = useCountry(country);
  console.log(countryData);
  return (
    <>
      <Helmet>
        <title>{country}</title>
      </Helmet>
      <div className="container mt-8  grid-cols-12 gap-4 grid-rows-3">
        <Link to="/">
          <div className="bg-zinc-100 dark:bg-zinc-500 w-fit py-1 px-3  mb-6 rounded-md">
            <i className="fa-solid fa-arrow-left-long text-gray-700 dark:text-zinc-100"></i>
          </div>
        </Link>
        <div className="grid grid-cols-12 gap-4">
          {countryData.length > 0 ? (
            <>
              <div className="md:col-span-6 mr-5 sm:col-span-12 row-span-3">
                <img src={countryData[0]?.flags.svg}></img>
              </div>
              <h1 className=" font-bold text-lg col-span-6">{country}</h1>
              <div className="md:col-span-3 sm:col-span-12">
                <h1 className="mb-3 font-semibold text-sm">
                  Populaion:
                  <span className="font-normal ml-2 ">
                    {countryData[0]?.population.toLocaleString()}
                  </span>
                </h1>
                <h1 className="mb-3 font-semibold text-sm">
                  Region:
                  <span className="font-normal ml-2 ">
                    {countryData[0]?.region}
                  </span>
                </h1>
                <h1 className="mb-3 font-semibold text-sm">
                  Sub Region:
                  <span className="font-normal ml-2 ">
                    {countryData[0]?.subregion}
                  </span>
                </h1>
                <h1 className="mb-3 font-semibold text-sm">
                  Capital:
                  <span className="font-normal ml-2 ">
                    {countryData[0]?.capital}
                  </span>
                </h1>
              </div>
              <div className="md:col-span-3 sm:col-span-12">
                <h1 className="mb-3 font-semibold text-sm">
                  Top Level Domain:
                  <span className="font-normal ml-2 ">
                    {countryData[0]?.tld.join(',')}
                  </span>
                </h1>
                <h1 className="mb-3 font-semibold text-sm">
                  Currancy:
                  <span className="font-normal ml-2 ">
                    {Object.keys(countryData[0].currencies).join(',')}
                  </span>
                </h1>
                <h1 className="mb-3 font-semibold text-sm">
                  Language:
                  <span className="font-normal ml-2 ">
                    {Object.keys(countryData[0].languages).join(',')}
                  </span>
                </h1>
              </div>
            </>
          ) : (
            <div className="col-span-12">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
