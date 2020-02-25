import React from 'react';
import ReactDOM, {Component} from 'react-dom';
import './order.css';
/*
export default class Order extends Component {
    
}
*/

const Order = () => {
    return (
        <form className="order-form">
            <input type="text" id="fio"></input>
            <input type="tel" id="phone"></input>
            <input type="mail" id="email"></input>
            <input type="text" id="address"></input>
        </form>
    )
}

export default Order;