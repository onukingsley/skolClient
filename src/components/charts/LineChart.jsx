// LineChart.jsx
import React, {useMemo} from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';

// Register necessary components
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
);

const LineChart = ({inputData}) => {

    const barColor = [
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)',
        'rgba(123, 159, 64, 0.9)',
        'rgba(255, 99, 132, 0.9)',
    ]
    const shuffleColor = useMemo(()=>{

        return barColor[Math.floor(Math.random()*4)]

    },[])

    const mappedData = inputData.totalArray?.map((item)=>{
        return {
            label: item.label,
            data: item.totalScore,
            fill: true,
            borderColor: shuffleColor,
            backgroundColor: shuffleColor,
            tension: 0.4, // curved lines
            pointBackgroundColor: 'rgba(75,192,192,1)',
        }
    })
/*    console.log(mappedData, "THis is the mapped data")
    console.log(inputData.label, "THis is the mapped data")*/

    const data = {
        labels: inputData.label,
        datasets:mappedData
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Term',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="h-[300px] w-[300px]">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
