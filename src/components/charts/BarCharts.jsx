import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register required chart types
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyChart = ({yaxis, xaxis, label, color}) => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: 'Sales',
                data: [40, 45, 60 ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 99, 132, 0.9)',
                ],
                borderRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
        },
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Monthly Sales' },
        },
    };

    return <div className='h-[300px] w-[300px]'>
        <Bar data={data} options={options} />
    </div>;
};

export default MyChart;