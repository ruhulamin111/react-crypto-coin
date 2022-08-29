import React from 'react';

const Footer = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center p-5 mt-20 '>
                <p> &copy; All copyright are reserved</p>
                <div className='flex justify-center gap-5 my-3'>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;