import React from 'react';

const CarItem = props => {
    const { car } = props;

    return (
        <div className='car-item'>
            <img src={car.img} alt={car.title} className='car-item__img' />
            <div className='car-item__info'>
                <span className='car-item__title'>{car.title}</span>
                <div className='car-item__price'>
                    <span className='car-item__price-byn'>{car.price} р.</span>
                    <span className='car-item__price-usd'>{car.priceUSD} $</span>
                </div>
            </div>
        </div>
    );
};

export default CarItem;
