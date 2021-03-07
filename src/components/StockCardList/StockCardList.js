import React from 'react';
import { Container } from 'reactstrap';
import StockCard from './StockCard/StockCard';

export default function StockCardList(props) {
    const { wallet } = props;
    return (
        <Container className="pt-5">
            {Object.keys(wallet).map(i => (
                <StockCard wallet={{ ...wallet[i], name: i }} key={wallet[i].name} />
            ))}
        </Container>
    )
}
