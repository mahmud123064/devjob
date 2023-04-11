import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobCatagory from '../JobCatagory/JobCatagory';
// import picture from "../../assets/All Images/google-1-1 1.png"

const Home = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch('catagory.json')
        .then( res => res.json())
        .then(data => setCatagories(data))
    },[])

    // console.log(jobs);
    return (
        <div className=''>
            <Banner></Banner>
           
           <div className='sm:flex justify-center mt-6 '>
            {
                catagories.map(catagory => <JobCatagory
                catagory={catagory}
                key={catagory.id}
                >
                </JobCatagory>)
            }
           </div>
        </div>
    );
};

export default Home;