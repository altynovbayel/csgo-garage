import React from 'react'
import c from './UserSkins.module.scss'
import weapon from '../../images/weapon.png'
const UserSkins = () => {
  return (
    <div className={c.card}>
      <span></span>
      <div className={c.neonCircle}>
        <img src={weapon} alt="weapon" loading='lazy'/>
      </div>
      <div className={c.about}>
        <h3>
          Desert Eagle
        </h3>
        <p>Валетность</p>
      </div>
    </div>
  )
}

export default UserSkins
