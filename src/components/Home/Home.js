import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/image.jpg';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 h-[80vh]'>
            <div className='flex md:justify-center md:items-center'>
                <div>
                    <p className='text-2xl font-bold my-4'>Crypto Note</p>
                    <p className='text-xl leading-8'>A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.</p>
                    <Link to='/coins' className='text-xl border border-indigo-600 rounded-lg px-3 py-1 my-4'>Explore</Link>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='img-fluid rounded-lg' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;