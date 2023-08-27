import React from 'react'
import c from './Navbar.module.scss'
import LinksItem from './LInksItem'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <div className={c.navbar}>
      <div className={c.container}>
        <div className={c.links}>
          {
            new Array(3).fill().map((_, id) => (
              <LinksItem key={id} />
            ))
          }
        </div>
        <div className={c.logo}>
          <img src={logo} alt="logo" loading='lazy' />
        </div>
        <div className={c.buttons}>
          <div className={c.balance}>
            <img src="" alt="" />
            <div className={c.balance_title}>
              <p>16 909 руб.</p>
              <span>Баланс</span>
            </div>
          </div>
          <div className={c.auth}>
            <img src="" alt="" />
            <div className={c.balance_title}>
              <p>Вход / Регистрация</p>
              <span>Личный кабинет</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
