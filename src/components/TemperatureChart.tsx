import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    },
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    },
    elements: {
        point:{
            radius: 2
        },
    },
    responsive: true,
    maintainAspectRatio: true,
};

const data = {
    labels: ['Now', '18', '19', '20', '21', '22', '23', '00', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
        {
            fill: true,
            label: 'Temperature',
            data: [32, 32, 31, 29, 27, 25, 24, 23, 22, 22, 21, 20, 20, 19, 19, 19, 21, 24, 27, 29, 31],
            pointHoverRadius: 5,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const TemperatureChart = () => {
    return (
        <div className="temperature-chart">
            <p className="text font-semibold">Temperature</p>
            <Line options={options} data={data} />
        </div>
    )
}

export default TemperatureChart;