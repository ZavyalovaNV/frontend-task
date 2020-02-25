import React from 'react';
import ReactDOM from 'react-dom';
import './order-water-list.css';
import OrderWater from '../order-water';

export default class OrderWaterList extends React.Component {
    render() {
        return <div className="water-bottle-list">
            <h2>Вода</h2>
            <ul className="bottle-list">
                <li>
                    <OrderWater volume="12.8" price="220" count="0" selected="1" />
                </li>
                <li>
                    <OrderWater volume="1.5" price="175" count="0" selected="" />
                </li>
                <li>
                    <OrderWater volume="0.5" price="270" count="0" selected="" />
                </li>
            </ul>
        </div>
    }
}