import React from 'react';
import { Card, CardBody } from 'reactstrap';
import StockInfo from './StockInfo';
import { toCurrency } from '../../../utilities/numbers';

export default function StockCard(props) {
    const { wallet } = props;
    console.log(wallet);
    return (
        <Card className="mt-2 w-100">
            <CardBody className="stock-card p-2">
                <StockInfo title={wallet.name} />
                <StockInfo title="QM" value={wallet.qm} />
                <StockInfo title="PM" value={toCurrency(wallet.pm)} />
                <StockInfo title="PA" value={toCurrency(wallet.pa)} className='results' />
                <StockInfo title="RA" value={toCurrency(wallet.ra)} className='results' />
                <StockInfo title="IR" value={toCurrency(wallet.ir)} />
            </CardBody>
        </Card>
    )
}
