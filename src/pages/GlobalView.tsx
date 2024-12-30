import { useEffect, useState } from "react";
import { getAllCountries } from "../services/countriesService";
import Population from "../components/Population";
import FilterInput from "../components/FilterInput";

interface Country {
  region: string;
  population: number;
}

const GlobalView: React.FC = () => {
  const [data, setData] = useState<[string, number][]>([]);
  const [filter, setFilter] = useState<number>(0);

  useEffect(() => {
    getAllCountries().then((countries: Country[]) => {
      const continents: { [key: string]: number } = {};
      countries.forEach((country) => {
        const region = country.region;
        if (region) {
          continents[region] = (continents[region] || 0) + country.population;
        }
      });
      const sortedContinents = Object.entries(continents).sort((a, b) => b[1] - a[1]);
      setData(sortedContinents);
    });
  }, []);

  const filteredData = data.filter(([_, pop]) => pop >= filter);

  return (
    <main>
      <div className="container">
        <h1>Global Population by Continent</h1>
        <div>
          <FilterInput onChange={(value) => setFilter(Number(value))} />
        </div>
        <Population
          labels={filteredData.map(([region]) => region)}
          populations={filteredData.map(([_, pop]) => pop)}
        />
      </div>
    </main>
  );
};

export default GlobalView;
