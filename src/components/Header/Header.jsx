import React from 'react';
import logoImage from '../../assets/img/logo.svg';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logoImage} alt="logo" />
        </header>
    );
}

export default Header;