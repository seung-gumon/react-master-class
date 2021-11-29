import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";


interface ChartProps {
    coinId : string
}

const Chart : React.FC<ChartProps> =
    ({
        coinId
     }) => {

    const {isLoading , data} = useQuery(['ohlcv' , coinId], () => fetchCoinHistory(coinId));

    return (
        <h1>
            chart
        </h1>
    )
}
export default Chart