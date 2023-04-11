import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='  sm:flex justify-start md:text-start md:bg-gray-200 p-6'>

            <div className=''>
            
                <h2 className='max-w-lg mb-6 mt-8 mr-12 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none justify-start'>
                    One Step <br className='hidden md:block' /> Closer To Your  {' '}
                    <br /><span className='inline-block text-blue-400'>Dream Job</span>
                </h2>
                <p className=' text-base mb-3 w-11/12 text-gray-700 md:text-lg'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <Link><button className='btn'>Get started</button></Link>
            </div>


            <div >

                <img  className='mt-8' src="../../../public/P3OLGJ1 copy 1.png" alt="Banner image" />
            </div>


        </div>
    );
};

export default Banner;

