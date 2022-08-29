import React from 'react';
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
    const { image, name, symbol } = coin;
    return (
        <div>
            <Link to='/coin'>
                <div className='flex justify-between items-center shadow-lg p-5 rounded-lg'>
                    <div className='flex flex-shrink-0'>
                        <img className='w-20 h-20 rounded-full' src={image} alt="" />
                    </div>
                    <div className=''>
                        <p>{name}</p>
                        <p>{symbol}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Coin;