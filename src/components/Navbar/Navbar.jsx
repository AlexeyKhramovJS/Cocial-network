import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><NavLink to='/profile' activeClassName={style.active}>Профиль</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={style.active}>Сообщения</NavLink></li>
                <li><NavLink to='/users' activeClassName={style.active}>Пользователи</NavLink></li>
                <li><NavLink to='#'>Новости</NavLink></li>
                <li><NavLink to='#'>Музыка</NavLink></li>
                <li><NavLink to='#'>Настройки</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;