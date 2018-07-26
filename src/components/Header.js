import React from 'react';

const Header = props => {
    const { title } = props;

    return (
        <header className='app-header'>
            <div className='header-logo'></div>
            <div className='header-title'>
                <span>{title}</span>
            </div>
        </header>
    );
};

export default Header;
