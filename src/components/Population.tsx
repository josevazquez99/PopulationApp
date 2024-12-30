import { Bar } from "react-chartjs-2";
import "chart.js/auto";

interface PopulationProps {
  labels: string[];
  populations: number[];
}

const Population: React.FC<PopulationProps> = ({ labels, populations }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Population",
        data: populations,
        backgroundColor: "rgba(44, 165, 165, 0.8)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
};

export default Population;
