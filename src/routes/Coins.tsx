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
  align-items: center;
`

const CoinList = styled.ul`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in-out;
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

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
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
                            <Link to={{
                                pathname: `/${coin.id}`,
                                state: {
                                    name: coin.name
                                }
                            }}>
                                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                     alt={coin.symbol}/>
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