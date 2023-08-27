import React from 'react'
import c from './WeaponCard.module.scss'
import weapon from '../../../images/weapon.png'

const WeaponCard = () => {
  return (
    <div className={c.card}>
      <div className={c.neonCircle}>
        <img src={weapon} alt="weapon" loading='lazy'/>
      </div>
    </div>
  )
}

export default WeaponCard
