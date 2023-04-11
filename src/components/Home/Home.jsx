import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobCatagory from '../JobCatagory/JobCatagory';
import Feature from '../Feature/Feature';
import "./Home.css"

const Home = () => {

    // const catagories = useLoaderData();
    // console.log(catagories);

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])

    // const [features, setFeatures] = useState([]);
    // useEffect(() => {
    //     fetch(`/features.json`)
    //         .then(res => res.json())
    //         .then(data => setFeatures(data))
    // }, []);

    //////////////////////////////////////

   const features = useLoaderData()
//    console.log(features);


    return (
        <div className=''>
            <Banner></Banner>

            <div className='catagory-info mt-12'>
                <h2 className='text-3xl font-bold mb-2'>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='sm:flex justify-center mt-6 '>
                {
                    catagories.map(catagory => <JobCatagory
                        catagory={catagory}
                        key={catagory.id}
                    >
                    </JobCatagory>)
                }
            </div>

            <div>
                <h2 className='text-3xl font-bold mt-4 mb-4'>Featured Jobs</h2>
                <p className='mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='feature md:grid grid-cols-2 shadow-lg'>
                {
                    features.map(feature => <Feature
                    feature ={feature}
                    key={feature.id}
                    ></Feature>)
                }
            </div>
        </div>

    );
};

export default Home;