import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from 'reactstrap';

export default function Chart(props) {
    const { wallet } = props;
    const options = {
        title: {
            text: 'IR por ações'
        },
        xAxis: {
            categories: Object.keys(wallet)
        },
        yAxis: {
            title: {
                text: "RS"
            }
        },
        tooltip: {
            enabled: false
        },
        series: [{
            showInLegend: false,
            data: Object.keys(wallet).map(w => wallet[w].ir),
            type: 'column',
        }]
    }
    return (
        Object.keys(wallet).length > 0 ?
            <Container className="pt-5">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </Container>
            : <div></div>
    )
}
