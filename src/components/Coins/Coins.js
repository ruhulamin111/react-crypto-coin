import React from 'react';
import Coin from '../Coin/Coin';
import useCoins from '../hooks/useCoins/useCoins';

const Coins = () => {
    const [coins] = useCoins();

    return (
        <div className='w-11/12 mx-auto'>
            <p className='text-3xl font-bold text-center my-12'>All Crypto Currency Coins</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
                {
                    coins.map((coin, index) => <Coin
                        key={index}
                        coin={coin}
                    ></Coin>)
                }
            </div>

        </div>
    );
};

export default Coins;