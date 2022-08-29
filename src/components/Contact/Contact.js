import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-bold my-5'>Contact with us</p>
                <div className='flex justify-center items-center'>
                    <Link to='local' className='border mx-2 px-2 py-1 rounded-lg bg-green-200'>Local Office </Link>
                    <Link to='corporate' className='border mx-2 px-2 py-1 rounded-lg bg-green-200'>Corporate Office </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;