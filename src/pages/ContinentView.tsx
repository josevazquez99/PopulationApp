import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountriesByRegion } from "../services/countriesService";
import Population from "../components/Population";
import FilterInput from "../components/FilterInput";

interface Country {
  name: {
    common: string;
  };
  population: number;
}

const ContinentView: React.FC = () => {
  const { region } = useParams<Record<string, string | undefined>>();
  const [data, setData] = useState<Country[]>([]);
  const [filter, setFilter] = useState<number>(0);

  useEffect(() => {
    if (region) {
      getCountriesByRegion(region).then((countries: Country[]) => {
        const chartData = countries.map((c) => ({
          name: { common: c.name.common },
          population: c.population,
        }));
        setData(chartData);
      });
    }
  }, [region]);

  const filteredData = data.filter((c) => c.population >= filter);

  return (
    <main>
      <div className="container">
        <h1>Population in {region}</h1>
        <div>
          <FilterInput onChange={(value) => setFilter(Number(value))} />
        </div>
        <Population
          labels={filteredData.map((c) => c.name.common)}
          populations={filteredData.map((c) => c.population)}
        />
      </div>
    </main>
  );
};

export default ContinentView;
