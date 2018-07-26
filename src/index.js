import React from 'react';
import { render } from 'react-dom';
import cars from './cars.json';

import App from './components/App';

render(
    <App cars={cars} />,
    document.getElementById('root')
);
