import React from 'react'
import style from './modules/Header.module.css'
import SignInMenu from './SignInMenu';

import logo from '../img/logo.png'



export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img src={logo} alt="img" />
            </div>
        <div className={style.signInMenu}>
                <SignInMenu />
            </div>
        </div>
    )
}