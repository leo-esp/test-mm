import React from 'react';
import { CardText, CardTitle } from 'reactstrap';

export default function StockInfo(props) {
    const { title, value, className } = props;
    return (
        <div className={className}>
            <CardTitle tag="b">{title}</CardTitle>
            { value &&
                <CardText>{value}</CardText>
            }
        </div>
    )
}
