import React from 'react'
import c from './WeaponCard.module.scss'
import weapon from '../../../images/weapon.png'
import graffit from '../../../images/graffit.png'
import freeCash from '../../../images/free-cash.png'
import {BsFillTriangleFill} from 'react-icons/bs'

const WeaponCard = () => {
  return (
    <div 
      className={c.card}
    >
      <div className={c.neonCircle}>
        <img src={weapon} alt="weapon" loading='lazy'/>
      </div>
      <div className={c.about}>
        <BsFillTriangleFill/>
        <img src={freeCash} alt="img" loading='lazy'/>
        <p>
          Desert Eagle
        </p>
        <div className={c.user_name}>
          <img src={graffit} alt="user" loading='lazy'/>
          <p>White Foxxxx</p>
        </div>
      </div>
    </div>
  )
}

export default WeaponCard
