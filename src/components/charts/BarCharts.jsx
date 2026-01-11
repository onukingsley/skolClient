import React, {useMemo} from 'react';
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

const BarChart = ({yaxis, xaxis, label, color,inputData}) => {


    const barColor = [
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)',
        'rgba(255, 99, 132, 0.9)',
    ]
    const shuffleColor = useMemo(()=>{

            return barColor[Math.floor(Math.random()*3)]

    },[])
    const assignmentDataset =
        inputData?.inputData?.map((value,key,array)=>{
       /*     console.log('here is the value', value.labelType)*/
            return (
                {
                    label: value.labelType,
                    data: value.data,
                    //data: inputData,
                    backgroundColor: key === 0 ? barColor[3]: shuffleColor,
                    borderRadius: 5,
                }
            )
        })

    /*console.log(assignmentDataset, 'this is the assignment dataset')*/



    const data = {
        labels: inputData?.label,
        datasets: assignmentDataset
    };

    /*console.log('here is the data', data)*/

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
        },
        plugins: {
            legend: { position: 'bottom' },
            title: { display: false, text: 'Monthly Sales' },
        },
    };

    return <div className='h-[300px] w-[300px]'>
        <Bar data={data} options={options} />
    </div>;
};

export default BarChart;


