import {useParams} from 'react-router-dom';
import styled from "styled-components";
import {useState} from "react";
import {useLocation} from 'react-router-dom';


const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor}
`

const Loader = styled.span`
  text-align: center;
  display: block;
`

export interface IParams {
    coinId: string
}

interface RouteState {
    name : string
}

function Coin() {
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams<IParams>();
    const {state} = useLocation<RouteState>();

    return <Container>
        <Header>
            <Title>{state.name || "Loading..."}</Title>
        </Header>
        {loading ? <Loader>Loading...</Loader> : null}
    </Container>
}

export default Coin;