import React from 'react';
import { Container, Table } from 'reactstrap';
import { toCurrency } from '../../utilities/numbers';

export default function OrdersTable(props) {
    const { orders } = props;
    return (
        <Container className="pt-5 overflowx">
            <h4>Histórico de Operações</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Ação</th>
                        <th>Operação</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Taxa</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr>
                            <th scope="row">{order.date.split('-').reverse().join('/')}</th>
                            <td>{order.name}</td>
                            <td>{order.type}</td>
                            <td>{toCurrency(order.price)}</td>
                            <td>{order.qty}</td>
                            <td>{order.tax}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
