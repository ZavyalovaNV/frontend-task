import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './order.css';

import OrderDate from '../order-date';
import OrderPersonal from '../order-personal';
import OrderWaterList from '../order-water-list';


export default class Order extends Component {
    render () {
        return (
            <div className="order">
                <h2>Заполните данные</h2>
                <OrderPersonal/>
                <OrderDate/>
                <OrderWaterList/>

                <div>Итог</div>
            </div>
        )
    }
}