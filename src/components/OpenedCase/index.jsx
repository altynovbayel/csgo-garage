import React from 'react'
import c from './OpenedCase.module.scss'
import UserSkins from '../UserSkins'
import weapon from '../../images/winner-weapon.png'
import {BsFillTriangleFill} from 'react-icons/bs'

const OpenedCase = () => {
  return (
    <div className={c.opened}>
      <h1>Бесплатный кейс #1</h1>
      <div className={c.case_inner}>
        <BsFillTriangleFill/>
        <BsFillTriangleFill/>
        <div className={c.row}>
          {
            new Array(5).fill().map((_, id) => (
              <UserSkins key={id}/>
            ))
          }
        </div>
        <div className={c.prize}>
          <div className={c.circle}>
            <img src={weapon} alt="prize" />
          </div>
        </div>
      </div>
      <div className={c.buttons}>
        <button>Попробовать еще</button>
        <button>Продать предмет</button>
      </div>
    </div>
  )
}

export default OpenedCase
