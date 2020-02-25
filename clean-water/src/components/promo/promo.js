import React from 'react';
import ReactDOM from 'react-dom';
import './promo.css';

const Promo = () => {
    return  <div className="promo">
                <img className="promo-logo" src='img/logo.svg'/>
                <h1>Чистая Вода</h1>
                <p>
                    Питьевая вода, предназначенная для ежедневного потребления, идеально подходит для кулеров. Закажите доставку воды и мы привезем её на дом или в офис.
                </p>
            </div>
}

export default Promo;