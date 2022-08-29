import React from 'react';

const CorporateAddress = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center my-10'>
                <div>
                    <p><b>Phone : </b>0123456789</p>
                    <p><b>Street : </b>11/15, Sultan Road</p>
                    <p><b>Location : </b>Abu Dhabi</p>
                </div>
                <div>
                    <p className="text-3xl font-bold">United Arab Emirates
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CorporateAddress;