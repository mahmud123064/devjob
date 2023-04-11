import React from 'react';
import "./JobCatagory.css"

const JobCatagory = ({catagory}) => {
    console.log(catagory);

    const {catagory_logo, name, job_available} = catagory;
    return (
        <div className='card p-12 bg-gray-100 shadow-lg '>
            <img className='mx-auto mb-3' src= {catagory_logo} alt="" />
            <p className='mb-3 font-semibold'>{name}</p>
            <p>{job_available}</p>

        </div>
    );
};

export default JobCatagory;