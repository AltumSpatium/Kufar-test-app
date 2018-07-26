import React from 'react';

import CarItem from './CarItem';

const CarsList = props => {
    const { cars } = props;

    return (
        <div className="cars-list">
            {cars.map((car, index) => (
                <CarItem car={car} key={index} />
            ))}
        </div>
    );
};

export default CarsList;
