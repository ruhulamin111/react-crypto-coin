import React from 'react';

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-bold my-5'>Contact with us</p>
                <div className='flex justify-center items-center'>
                    <button className='border mx-2 px-2 py-1 rounded-lg bg-green-200'>Local Office </button>
                    <button className='border mx-2 px-2 py-1 rounded-lg bg-green-200'>Corporate Office </button>
                </div>
            </div>

        </div>
    );
};

export default Contact;