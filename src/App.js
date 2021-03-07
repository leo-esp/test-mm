import './App.css';
import React, { useState } from 'react';
import Chart from './components/Chart/Chart';
import OrdersTable from './components/OrdersTable/OrdersTable';
import OrderForm from './components/OrderForm/OrderForm';
import StockCardList from './components/StockCardList/StockCardList';

function App() {
    const [orders, setOrders] = useState([]);
    const [wallet, setWallet] = useState({});

    function addOrder(values, { resetForm }) {
        addWallet(values);
        setOrders(orders.concat(values));
        resetForm({});
    }

    function addWallet(values) {
        let newWallet = {
            ...wallet
        }
        if (wallet[values.name] !== undefined) {
            if (values.type === 'Venda') {
                let result = ((values.price - wallet[values.name].pm) * values.qty - values.tax);
                if (result > 0) {
                    newWallet[values.name].ra = result;
                    newWallet[values.name].ir = (result - Math.abs(Math.min(result, wallet[values.name].pa))) * 0.15;
                    newWallet[values.name].pa = (wallet[values.name].pa - Math.min(result, wallet[values.name].pa));
                } else {
                    newWallet[values.name].pa = wallet[values.name].pa + result;
                }
                newWallet[values.name].qm = wallet[values.name].qm - values.qty;
            } else {
                newWallet[values.name].pm = (wallet[values.name].pm * wallet[values.name].qm + values.price * values.qty + values.tax) / (wallet[values.name].qm + values.qty);
                newWallet[values.name].qm = wallet[values.name].qm + values.qty;
            }
        } else {
            newWallet[values.name] = { pm: 0, qm: 0, ra: 0, pa: 0, ir: 0 }
            newWallet[values.name].pm = (newWallet[values.name].pm * newWallet[values.name].qm + values.price * values.qty + values.tax) / (newWallet[values.name].qm + values.qty);
            newWallet[values.name].qm = newWallet[values.name].qm + values.qty;
        }
        setWallet(newWallet);
    }
    return (
        <div className="App">
            <StockCardList wallet={wallet} />
            <OrderForm onSubmit={addOrder} />
            <Chart wallet={wallet} />
            <OrdersTable orders={orders} />
        </div>
    );
}

export default App;
