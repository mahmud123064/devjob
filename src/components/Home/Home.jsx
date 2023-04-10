import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
// import picture from "../../assets/All Images/google-1-1 1.png"

const Home = () => {

    const abc = useLoaderData();
    // const {catagory_logo,name} = abc;
    // console.log(name);
    // console.log(abc);

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('catagory.json')
        .then( res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className=''>
            {/* <img src={catagory_logo} alt="" /> */}
            <Banner></Banner>
            <p>{jobs.job_available}</p>
        </div>
    );
};

export default Home;