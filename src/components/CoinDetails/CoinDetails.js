import React from 'react';
import { useParams } from "react-router-dom";
import useCoin from '../hooks/useCoin/useCoin';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin] = useCoin(id);

    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 h-full justify-items-center content-center' >
            <div className='order-2 md:order-1'>
                <p className='text-2xl font-bold my-3'>Genereal Information :</p>
                <p><b>Name : </b>{coin.name}</p>
                <p><b>Origin : </b>{coin.country_origin ? coin.country_origin : 'Not available'}</p>
                <p><b>Cetogories : </b>{coin.categories?.[0] ? coin.categories?.[0] : 'Not available'}</p>
                <p className='text-2xl font-bold my-3'>Score Information :</p>
                <p><b>Coin Rank : </b>{coin.coingecko_rank}</p>
                <p><b>Coin Score : </b>{coin.coingecko_score}</p>
                <p><b>Community Score : </b>{coin.community_score}</p>
                <p><b>Description : </b>{coin.description?.en.slice(0, 500) ? coin.description?.en.slice(0, 500) : 'Not available'}</p>
            </div>
            <div className='flex justify-center items-center order-1 md:order-2'>
                <img src={coin.image?.large} alt="coin" />
            </div>
        </div>
    );
};

export default CoinDetails;