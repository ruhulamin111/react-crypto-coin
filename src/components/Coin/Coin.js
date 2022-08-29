import React from 'react';
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
    const { image, name, symbol, id } = coin;
    return (
        <div className='shadow-lg p-5 rounded-lg'>
            <Link to={`/coin/${id}`}>
                <div className='flex justify-between items-center '>
                    <div className='flex flex-shrink-0'>
                        <img className='w-20 h-20 rounded-full' src={image} alt="coin" />
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