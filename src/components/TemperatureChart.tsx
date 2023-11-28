import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
);

const labels = ['Now', '1h', '2h', '3h', '4h', '5h', '6h'];

const options = {
    plugins: {
        title: { display: false },
        legend: { display: false },
        tooltips: { enabled: false }
    },
    scales: {
        x: { display: false },
        y: { display: false }
    },
    elements: {
        point: { radius: 8 }
    },
    responsive: true,
    maintainAspectRatio: true,
};

const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Temperature',
            data: [13, 15, 20, 25, 30, 35, 40],
            borderColor: 'rgba (31, 58, 138, 1)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
    ],
};

const TemperatureChart = () => {
    return (
        <div className="temperature-chart container bg-slate-50 rounded-lg drop-shadow">
            <p className="text font-semibold">Temperature</p>
            <Line data={data} options={options} />
        </div>
    )
}

export default TemperatureChart;