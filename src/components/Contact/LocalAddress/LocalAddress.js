import React from 'react';

const LocalAddress = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center my-10'>
                <div>
                    <p><b>Phone : </b>0123456789</p>
                    <p><b>Street : </b>11/15 Mirpur, Dhaka-1216</p>
                    <p><b>Location : </b>Dhaka, Bangladesh</p>
                </div>
                <div>
                    <p className="text-3xl font-bold">Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default LocalAddress;