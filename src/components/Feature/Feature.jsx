import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({ feature }) => {
    const { id, company_name, company_logo, job_title, remote_or_onsite,
        fulltime_or_parttime, location, salary } = feature;
    // console.log(feature);

    return (
        <div className='card text-start shadow-lg'>
            <img className='mb-2' src={company_logo} alt="" />
            <h2 className='mb-2 text-2xl font-semibold'>{job_title}</h2>
            <p>{company_name}</p>

            <div className='mb-3'>
                <Link><button className='work-info px-3 rounded me-3'>{remote_or_onsite}</button></Link>
                <Link><button className='work-info px-3 rounded'>{fulltime_or_parttime}</button></Link>
            </div>

            <div className='flex mb-3'>
                <p className='me-6'>{location}</p>
                <p>{salary}</p>
            </div>
            <Link to={`/details/${id}`}> <button  className='btn'>View Details</button></Link>
        </div>
    );
};

export default Feature;