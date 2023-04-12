import React from 'react';
import "./JobDetails.css"
import { Link, useLoaderData } from 'react-router-dom';
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/solid'

const JobDetails = () => {
  const featureData = useLoaderData();
  const {
    company_name,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    phone,
    email,
    location
  } = featureData;
  console.log(featureData);



  return (
    <div className=' '>
      <div className='jobDetails p-14 mx-auto bg-gray-200 mb-12'>
        <p className=' text-2xl font-bold'>Job Details</p>
      </div>

      <div className=' details text-start sm:grid'>

        <div>
          <p><span className='font-bold'>Job Description :</span>{job_description}</p><br />
          <p><span className='font-bold'>Job Responsibility</span> : {job_responsibility}</p>
          <br />
          <p className='font-bold'>Educational Requirements:</p>
          <p>{educational_requirements}</p> <br />

          <p><span className='font-bold'>Experiences:</span><br />
            {educational_requirements}</p><br />
          <p></p>

        </div>

        <div className=' bg-gray-200 p-6 rounded-lg'>
          <h3 className='text-center mb-4 font-bold' >Job Details</h3>
          <hr className='hr mb-3' />

          <div className='flex mb-4 gap-2'>
            <CurrencyDollarIcon className='icon opacity-50' />
            <p> <span className='font-bold'>Salary : </span> {salary}</p>
          </div>

          <div className='flex mb-4 gap-2'>
            <BriefcaseIcon className='icon opacity-50 ' />
            <p> <span className='font-bold'>Job Title : </span> {job_title} </p>
          </div>

          <p className='font-bold text-center mb-2'>Contact Information</p>
          <hr className='hr mb-3' />

          <div className='flex mb-4 gap-2'>
            <PhoneIcon className='icon' />
            <p> <span className='font-bold'>Phone : </span>{contact_information.phone} </p>
          </div>

          <div className='flex mb-4 gap-2'>
            <EnvelopeIcon className='icon' />
            <p> <span className='font-bold'> Email :</span> {contact_information.email}</p>
          </div>

          <div className='flex gap-2'>
            <MapPinIcon className='icon' />
            <p> <span className='font-bold'>Address : </span>{location
            }</p>
          </div>
       <Link to={`/jobs`}><button  className='btn m-6 '>Apply Now</button></Link>
        </div>
      </div>

    </div>
  );
};

export default JobDetails;