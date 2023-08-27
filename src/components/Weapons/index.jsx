import React from 'react'
import c from './Weapons.module.scss'
import WeaponCard from './WeaponCard'

const Weapons = () => {
  return (
    <div className={c.weapons}>
      <div className={c.container}>
        {
          new Array(12).fill().map((_, id) => (
            <WeaponCard/>
          ))
        }
      </div>
    </div>
  )
}

export default Weapons
