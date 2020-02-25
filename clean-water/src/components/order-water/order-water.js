import React from 'react';
import ReactDOM from 'react-dom';
import './order-water.css';

export default class OrderWater extends React.Component {
    state = {
        count: this.props.count,
        selected: true
    };

    onToggleClick = (increment) => {
        this.setState({
                count: this.props.count,
                selected: true
            })
    }
    
    render() {
        const { volume, price } = this.props;
        console.log(volume, price);

        let classList = 'water-bottle';
        classList = this.state.selected ? (classList + ' active') : classList;

        return (
            <div className={classList}>
                <p className="bottle-volume">{volume} л</p> 
                <p className="bottle-count">{this.state.count} шт</p> 
                <p className="bottle-price">{price} ₽</p> 
            </div>)
    }
}