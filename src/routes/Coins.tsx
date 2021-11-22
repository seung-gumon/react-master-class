import styled from "styled-components";
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-content: center;
`

const CoinList = styled.ul`
`

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    transition: color 0.2s ease-in-out;
    display: block;
  }

  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`
const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor}
`

const Loader = styled.span`
  text-align: center;
  display: block;
`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number
    is_new: boolean,
    is_active: boolean,
    type: string
}


function Coins() {

    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await res.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })()
    }, [])

    return <Container>
        <Header>
            <Title>코인</Title>
        </Header>
        {loading ? <Loader>Loading...</Loader> :
            <CoinList>
                {
                    coins.map((coin: CoinInterface) =>
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    )
                }
            </CoinList>
        }

    </Container>
}

export default Coins;