import {useParams} from 'react-router-dom';


export interface IParams {
    coinId: string
}

function Coin() {

    const {coinId} = useParams<IParams>();

    return <h1>Coin : {coinId}</h1>
}

export default Coin;