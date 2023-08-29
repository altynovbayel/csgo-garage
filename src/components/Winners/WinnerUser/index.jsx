import React from 'react'
import c from './WinnerUser.module.scss'
import weapon from '../../../images/winner-weapon.png'
import graffit from '../../../images/graffit.png'

const WinnerUser = () => {
  return (
    <div className={c.user}>
      <div className={c.card}>
        <div className={c.neonCircle}>
          <img src={weapon} alt="weapon" loading='lazy' />
        </div>
      </div>
      <div className={c.user_info}>
        <img src={graffit} alt="" />
        <div className={c.user_name}>
          <p>
            WhiteFoxxxx
          </p>
          <span>
            26.05.2023
          </span>
        </div>
      </div>
      <div className={c.weapon_type}>
        <p>AK-47</p>
        <span>Убийство</span>
      </div>
      <div className={c.summ}>
        147101.23 ₽
      </div>
      <div className={c.day}>
        ежедневная
      </div>
    </div>
  )
}

export default WinnerUser
