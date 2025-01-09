import { useEffect, useState } from 'react';
import Search from '../components/SearchInput';
import AllCards from '../components/allCards';
import data, { CountryInfo } from '../../TS/data';
import Loading from '../components/Loading';
import RegionBar from '../components/RegionBar';
import { Helmet } from 'react-helmet';

export default function Home() {
  const [countries, setCoun] = useState<CountryInfo[]>([]);
  const [filtered, setFiltered] = useState<CountryInfo[]>([]);
  async function getCountries() {
    setCoun(data);
    setFiltered(data);
  }
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
      <Helmet>
        <title>Around The World</title>
      </Helmet>
      <div className="container mt-5 flex items-center justify-between">
        {/* <ReigonMenue setFiltered={setFiltered} countries={countries} /> */}
        <RegionBar setFiltered={setFiltered} countries={countries} />
        <Search setFiltered={setFiltered} countries={countries} />
      </div>
      {countries.length > 0 ? <AllCards countries={filtered} /> : <Loading />}
    </>
  );
}
