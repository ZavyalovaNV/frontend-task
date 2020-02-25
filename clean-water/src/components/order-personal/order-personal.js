import React from 'react';
import ReactDOM from 'react-dom';
import './order-personal.css';

const Checkbox = props => (
    <div>
        <input type="checkbox" id="checkbox" {...props} />
        <label htmlFor="checkbox">Я согласен на <a href="#">обработку персональных данных</a></label>
    </div>
)

export default class OrderPersonal extends React.Component {
    state = { checked: false };

    handleCheckboxChange = event => this.setState({ checked: event.target.checked });

    render () {
        return (
            <form className="order-form">
                <div className="order-form-fields">
                    <div className="order-form-side">
                        <input type="text" id="fio" placeholder="ФИО"></input>
                        <input type="tel" id="phone" placeholder="+7 900 000 00 00"></input>
                    </div>                
                    <div className="order-form-side">
                        <input type="email" id="email" placeholder="e-mail"></input>
                        <input type="text" id="address" placeholder="Адрес"></input>
                    </div>
                </div> 

                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleCheckboxChange}
                />
            </form>
        )
    }
}