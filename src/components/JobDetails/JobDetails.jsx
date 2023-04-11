import React from 'react';
import "./JobDetails.css"
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const featureData = useLoaderData();
    console.log(featureData);

    return (
        <div className=' bg-gray-200'>
          <div className='jobDetails p-14'>
            <p>Job Details</p>
          </div>
          <p>{featureData.id}</p>
        </div>
    );
};

export default JobDetails;