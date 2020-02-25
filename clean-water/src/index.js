import React from 'react';
import ReactDOM from 'react-dom';

import Promo from './components/promo';
import Order from './components/order';

// Лого и промо
ReactDOM.render(<Promo/>, document.getElementById('promo'))
ReactDOM.render(<Order/>, document.getElementById('order'))