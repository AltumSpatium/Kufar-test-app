import React, { Component } from 'react';
import Header from './Header';
import CarsList from './CarsList';

import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: props.cars
        };
    }

    render() {
        const { cars } = this.state;

        return (
            <div className='app'>
                <Header title='VIP Объявления' />
                <CarsList cars={cars} />
            </div>
        );
    }
}

export default App;
