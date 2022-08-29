import React from 'react';
import { useParams } from "react-router-dom";
import useCoin from '../hooks/useCoin/useCoin';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useCoin(id);

    return (
        <div>
            {coin.name}
            <div>

            </div>

        </div>
    );
};

export default CoinDetails;