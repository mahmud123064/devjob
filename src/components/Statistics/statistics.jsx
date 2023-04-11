import React from 'react';
// import { Pie, PieChart } from 'recharts';
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {
    const marks = [
        {name:"Assignment-1" ,value: 60},
        {name:"Assignment-2" ,value: 60},
        {name:"Assignment-3" ,value: 51},
        {name:"Assignment-4" ,value: 50},
        {name:"Assignment-5" ,value: 47},
        {name:"Assignment-6" ,value: 42},
        {name:"Assignment-7" ,value: 60},
        {name:"Assignment-8" ,value: 60},
    ]

    return (
       
        <div>
            <PieChart width={400} height={300} className='mx-auto'>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={marks}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>

            <figcaption>Pie Chart</figcaption>
        </div>
    );
};

export default Statistics;