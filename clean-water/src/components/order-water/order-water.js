import React from 'react';
import ReactDOM from 'react-dom';
import './order-water.css';

class EditCountMenu extends React.Component {
    state = {
        count: this.props.count,
        selected: this.props.selected
    };

    onIncrementMinus = () => {
        this.setState({
                count: +this.state.count - 1,
                selected: this.state.selected
            })
    }

    onIncrementPlus = () => {
        this.setState({
                count: +this.state.count + 1,
                selected: this.state.selected
            })
    }
    
    render() {
        if (!this.state.selected) {
            return null
        }
        return (
            <div className="count-menu">
                <button className="minus" onClick={this.onIncrementMinus}></button>
                <span>{this.state.count}</span>
                <button className="plus" onClick={this.onIncrementPlus}></button>
            </div>
        )
    }
}

export default class OrderWater extends React.Component {
    state = {
        count: this.props.count,
        selected: this.props.selected,
        image: ''
    };


    onToggleClick = () => {
        this.setState({
                count: this.state.count,
                selected: !this.state.selected
            })
    }
    
    render() {
        console.log(this.state);
        const { volume, price } = this.props;
        const { selected, count } = this.state;
        console.log(selected, price);

        let classList = 'water-bottle';
        classList = (!!selected) ? (classList + ' active') : classList;

        let EditCountElement = () => <EditCountMenu count={count} selected={selected}/>;

        return (
            <div className={classList}>
                <img src="../img/bg.png" alt=""></img>
                <div className="water-bottle-wrapper" onClick={this.onToggleClick}>
                    <p className="bottle-volume">{volume} л</p> 
                    <p className="bottle-count">{count} шт</p> 
                    <p className="bottle-price">{price} ₽</p> 
                </div>
                <EditCountElement />
            </div>)
    }
}