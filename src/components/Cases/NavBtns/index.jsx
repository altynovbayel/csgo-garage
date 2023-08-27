import React from 'react'
import c from './NavBtns.module.scss'

const NavButtons = () => {
  return (
    <div className={c.nav}>
      <ul>
        {
          new Array(4).fill().map((_, id) => (
            <li key={id}>
              Навигация
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default NavButtons
